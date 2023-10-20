const achievement = require('./ACHIEVEMENT.json')
const stringTemplate = require('./STRING_TEMPLATE.json')
const conquest = require('./GREAT_BUILDING.json')
const conquestStep = require('./GREAT_BUILDING_STEP.json')
const money = require('./MONEY.json')
const fs = require('fs')

const ConquestTowersData = {}

const towers = conquest[0].Rows
const towersStep = Object.values(conquestStep[0].Rows)
const stringData = stringTemplate[0].Rows
const achievementData = achievement[0].Rows

function getStepCosts(stepObj) {
  const object = {}

  Array.from(Array(4).keys()).forEach((index) => {
    const idKey = `NeedID0${index + 1}`
    const countKey = `NeedCount0${index + 1}`

    if (stepObj[idKey] === 0) return
    const moneyStringId = money[0].Rows[stepObj[idKey]].NameSid
    const moneyName = stringData[moneyStringId].ENG

    object[moneyName] = stepObj[countKey]
  })

  return object
}

function getStepEffects(stepObj) {
  const object = {}

  Array.from(Array(4).keys()).forEach((index) => {
    const stringKey = `EffectString0${index + 1}`
    const typeKey = `EffectType0${index + 1}`
    const valueKey = `EffectNum0${index + 1}`

    if (stepObj[stringKey][0] === 0) return
    let value = stepObj[valueKey][0]

    switch (stepObj[typeKey]) {
      case 5:
        value = `${value / 10}.00%`
        break
    }

    const moneyName = stringData[stepObj[stringKey][0]].ENG

    object[moneyName] = value
  })

  return object
}

function getStepAchievements(stepObj) {
  const object = {}

  Array.from(Array(3).keys()).forEach((index) => {
    const idKey = `AchievementIdCondition0${index + 1}`
    const stringKey = `AchievementIdConditionString0${index + 1}`

    if (stepObj[stringKey] === 0) return
    const count = achievementData[stepObj[idKey]].CompleteCount
    let achievementString = stringData[stepObj[stringKey]].ENG

    const achievementHasCount = achievementString.match(/\{1\}/gm)

    if (achievementHasCount) {
      achievementString = achievementString.replace(/\{1\}/gm, count)
    } else if (count > 1) achievementString = `${achievementString} ${count}x`

    object[stepObj[idKey]] = achievementString
  })

  return object
}

function getStepBuildingConditions(stepObj) {
  const object = {}

  Array.from(Array(3).keys()).forEach((index) => {
    const idKey = `BuildingIdCondition0${index + 1}`

    if (stepObj[idKey] === 0) return
    const buildingObject = conquestStep[0].Rows[stepObj[idKey]]
    const buildingName =
      stringData[towers[buildingObject.GreatBuildingId].BuildingName].ENG

    object[buildingName] = buildingObject.BuildingStep
  })
  return object
}

function dumpConquestTowers() {
  for (const stepObj of towersStep) {
    const { BuildingStep, BuildingCombat, GreatBuildingId, UpgradeTime } =
      stepObj

    const dataObject = {
      Step: BuildingStep,
      Power: BuildingCombat,
      UpgradeTime,
      Cost: getStepCosts(stepObj),
      Building: getStepBuildingConditions(stepObj),
      Achievement: getStepAchievements(stepObj),
      Effects: getStepEffects(stepObj),
    }

    const buildingName = stringData[towers[GreatBuildingId].BuildingName].ENG
    if (buildingName in ConquestTowersData) {
      ConquestTowersData[buildingName].Steps.push(dataObject)
    } else {
      ConquestTowersData[buildingName] = {
        BuildingId: GreatBuildingId,
        Steps: [dataObject],
      }
    }
  }
}

dumpConquestTowers()
// console.log(ConquestTowersData)
fs.writeFileSync('./result.json', JSON.stringify(ConquestTowersData, null, 2))
