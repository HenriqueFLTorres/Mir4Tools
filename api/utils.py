import cv2
import numpy as np
import pytesseract
import re

pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract"

items = [
    "anima_stone",
    "blue_devil_stone",
    # "copper",
    # "dark_steel",
    # "dragon_leather",
    # "energy",
    "evil_minded_orb",
    "exorcism_bauble",
    "glittering_powder",
    "illuminating_fragment",
    "moon_shadow_stone",
    "platinum",
    "quintessence",
    "steel",
    # "dragon_eye",
    # "dragon_scale",
    # "dragon_claw",
    # "dragon_horn",
]

GLOBAL_SCALE = 1.4
threshold = 0.85
frameOffset = int(np.round(30 * GLOBAL_SCALE))


def addAlphaChannels(image):
    b, g, r = cv2.split(image)
    a = np.ones(b.shape, dtype=b.dtype) * 255  # creating a dummy alpha channel image.
    image = cv2.merge((b, g, r, a))

    return image

def checkItemRarity(top, bottom, left, right, originalImage, inventoryImage):
    colorFrame = originalImage.copy()[top + 20 : bottom, left : right + 5]
    rarity = None

    if np.any(np.all(colorFrame == (13, 210, 237, 255), axis=-1)):
        rarity = "legendary"
    elif np.any(np.all(colorFrame == (50, 60, 216, 255), axis=-1)):
        rarity = "epic"
    elif np.any(np.all(colorFrame == (199, 122, 66, 255), axis=-1)):
        rarity = "rare"
    elif np.any(np.all(colorFrame == (145, 184, 70, 255), axis=-1)):
        rarity = "uncommon"
    elif np.any(np.all(colorFrame == (123, 121, 123, 255), axis=-1)):
        rarity = "common"

    cv2.putText(
        inventoryImage,
        rarity,
        (left + 5, bottom - 8),
        2,
        0.5,
        (255, 255, 255),
        1,
        cv2.LINE_AA,
        False,
    )

    return rarity


def checkItemAmount(top, bottom, left, right, originalImage, inventoryImage):
    matchedValue = originalImage.copy()
    matchedValue = originalImage[top:bottom, left:right]
    matchedValue[np.all(matchedValue <= 210, axis=-1)] = (0, 0, 0, 255)

    matchedValue = cv2.cvtColor(matchedValue, cv2.COLOR_BGR2GRAY)
    _, thresh1 = cv2.threshold(matchedValue, 180, 255, cv2.THRESH_BINARY)

    text = pytesseract.image_to_string(thresh1, config=r"--psm 6 outputbase digits")
    text = re.sub(r"\\n|\.|\-", "", text)

    try:
        number = str(int(text))
        cv2.putText(
            inventoryImage,
            number,
            (left + 5, bottom - 20),
            2,
            0.5,
            (255, 255, 255),
            1,
            cv2.LINE_AA,
            False,
        )
    except:
        return text

    return text


def searchItem(template, item, originalImage, tradeIcon, inventoryImage, PlayerInventory):
    result = cv2.matchTemplate(originalImage, template, cv2.TM_CCOEFF_NORMED)

    w = template.shape[1]
    h = template.shape[0]

    yloc, xloc = np.where(result >= threshold)

    rectangles = []
    for x, y in zip(xloc, yloc):
        width = int(x + w)
        height = int(y + h)
        left, top = int(x - frameOffset), int(y - frameOffset)
        right, bottom = width + frameOffset, height + frameOffset

        rectangles.append([int(left), int(top), int(right), int(bottom)])
        rectangles.append([int(left), int(top), int(right), int(bottom)])

        cv2.rectangle(
            inventoryImage,
            (left, top),
            (right, bottom),
            (255, 255, 255),
            2,
        )

    rectangles, _ = cv2.groupRectangles(rectangles, 1, 0.1)

    for left, top, right, bottom in rectangles:
        frame = originalImage.copy()
        frame = frame[top:bottom, left:right]

        itemRarity = checkItemRarity(bottom - frameOffset, bottom, left, left, originalImage, inventoryImage)
        itemAmount = checkItemAmount(bottom - frameOffset, bottom, left, right, originalImage, inventoryImage)
        isTraddable = findTraddables(frame, top, left, tradeIcon, inventoryImage)
        hasProperty = (
            PlayerInventory.get(item)
            and PlayerInventory.get(item).get(itemRarity) is not None
        )

        try:
            itemAmount = int(itemAmount)
            if hasProperty:
                if isTraddable:
                    PlayerInventory[item][itemRarity]["traddable"] = itemAmount
                else:
                    PlayerInventory[item][itemRarity]["nonTraddable"] = itemAmount
            else:
                if isTraddable:
                    PlayerInventory[item] = {itemRarity: {"traddable": itemAmount}}
                else:
                    PlayerInventory[item] = {itemRarity: {"nonTraddable": itemAmount}}
        except:
            continue


def findTraddables(image, top, left, tradeIcon, inventoryImage):
    result = cv2.matchTemplate(image, tradeIcon, cv2.TM_CCOEFF_NORMED)
    yloc, xloc = np.where(result >= 0.75)

    for _ in zip(xloc, yloc):
        cv2.rectangle(
            inventoryImage,
            (int(left), int(top)),
            (left + 40, top + 40),
            (80, 200, 120),
            2,
        )

    return len(yloc) > 0