/* eslint-disable @typescript-eslint/no-var-requires */
const stringTemplate = require('./STRING_TEMPLATE.json')
const forceUpgrade = require('./CHARACTER_FORCE_LEVEL.json')
const forceInfo = require('./CHARACTER_FORCE.json')
const itemDataList = require('./ITEM.json')
const fs = require('fs')

const CostJSON = {}
const forceUpgradeData = forceUpgrade[0].Rows
const stringData = stringTemplate[0].Rows
const itemsData = itemDataList[0].Rows
const forceInfoData = forceInfo[0].Rows

for (const [, data] of Object.entries(forceUpgradeData)) {
  const name = getItemName(
    forceInfoData[data.ForcePanelID].ForcePanel_TitleStringID
  )
  const object = {
    copper: data.HardTraining_NeedCostCount,
    ...retrieveCost(data),
  }

  if (name in CostJSON) {
    CostJSON[name] = {
      ...CostJSON[name],
      [String(data.ForcePanelLevel)]: object,
    }
  } else {
    CostJSON[name] = {
      [String(data.ForcePanelLevel)]: object,
    }
  }
}

function retrieveCost(costObject) {
  const obj = {}

  Array.from(Array(4).keys())
    .map((index) => {
      index = index + 1

      const objectKeyId = `HardTraining_NeedUseId0${index}`
      const objectKeyCount = `HardTraining_NeedItem0${index}Count`
      if (costObject[objectKeyId] !== 0) {
        obj[getItemName(getItemNameSid(costObject[objectKeyId] + 100000))] =
          costObject[objectKeyCount]
      }

      return null
    })
    .filter(Boolean)

  return obj
}

function getItemNameSid(itemId) {
  return itemsData[itemId]?.NameSid
}

function getItemName(id) {
  return stringData[id]?.ENG
}

fs.writeFileSync(
  './FORCE_LEVEL_UPGRADE.json',
  JSON.stringify(CostJSON, null, 2)
)
