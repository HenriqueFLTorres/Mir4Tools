from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
# import cv2
# import numpy as np
import utils
import base64

# items = [
#     "anima_stone",
#     "blue_devil_stone",
#     # "copper",
#     # "dark_steel",
#     # "dragon_leather",
#     # "energy",
#     "evil_minded_orb",
#     "exorcism_bauble",
#     "glittering_powder",
#     "illuminating_fragment",
#     "moon_shadow_stone",
#     "platinum",
#     "quintessence",
#     "steel",
#     # "dragon_eye",
#     # "dragon_scale",
#     # "dragon_claw",
#     # "dragon_horn",
# ]

# PlayerInventory = {}
# GLOBAL_SCALE = 1.4
# threshold = 0.85
# frameOffset = int(np.round(30 * GLOBAL_SCALE))

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/api/inventoryFromImage', methods=['GET', 'POST'])
@cross_origin()
def hello_world():
    data = request.get_json()
    imageBase64 = data.get("image")

    if imageBase64 is None:
        return jsonify({
            'message': "An image was not provided.",
            'status': 422
        })
        
    # originalImage = None  

    # try:
    #     im_bytes = base64.b64decode(imageBase64)
    #     im_arr = np.frombuffer(im_bytes, dtype=np.uint8)  # im_arr is one-dim Numpy array
    #     originalImage = cv2.imdecode(im_arr, flags=cv2.IMREAD_COLOR)
    # except:
    #     return jsonify({
    #         'message': "Unsupported image.",
    #         'status': 415
    #     })

    # originalImage = utils.addAlphaChannels(originalImage)
    # inventoryImage = originalImage.copy()
    # trade = cv2.imread(r"C:\Users\rical\Documents\VCS\Mir4Tools\public\items\trade.png", cv2.IMREAD_UNCHANGED)

    # for item in items:
    #     itemTemplate = cv2.imread(rf"C:\Users\rical\Desktop\Testing\items\{item}.png", cv2.IMREAD_UNCHANGED)
    #     itemTemplate = itemTemplate[30:62, 30:62]
    #     itemTemplate = imutils.resize(
    #         itemTemplate, width=int(itemTemplate.shape[1] * GLOBAL_SCALE)
    #     )
    #     tradeIcon = imutils.resize(trade, width=int(trade.shape[1] * 0.90526))

    #     utils.searchItem(itemTemplate, item, originalImage, tradeIcon, inventoryImage, PlayerInventory)
    
    # imageToJSON = inventoryImage.copy()
    # _, im_arr = cv2.imencode('.png', imageToJSON)  # im_arr: image in Numpy one-dim array format.
    # im_bytes = im_arr.tobytes()
    # im_b64 = base64.b64encode(im_bytes).decode("utf8")


    return jsonify({
        'message': None,
        # 'inventory': PlayerInventory,
        # 'image': im_b64
    })

if __name__ == '__main__':
    app.run()