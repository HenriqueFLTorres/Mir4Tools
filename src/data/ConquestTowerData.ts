const ConquestTowersData: {
  [key in ConquestTowers]: {
    BuildingId: number
    Unlock?:
      | {
          [key in string]: number | { [key in number]: string }
        }
      | {
          Building: Partial<{ Portal: number }>
        }
    Steps: Array<{
      Step: number
      Power: number
      UpgradeTime: number
      Cost: Partial<{ [key in 'Copper' | 'Energy' | 'Darksteel']: number }>
      Achievement: { [key in number]: string }
      Building: Partial<{ [key in ConquestTowers]: number }>
      Effects: {
        [key in string]: string | number
      }
    }>
  }
} = {
  'Tower of Conquest': {
    BuildingId: 1000000,
    Steps: [
      {
        Step: 1,
        Power: 435,
        UpgradeTime: 3,
        Cost: {
          Copper: 10000,
        },
        Building: {},
        Achievement: {},
        Effects: {
          'Character Max Level': 60,
          'Unified Market Tax Rate Reduction': '-1% (24%)',
          'Boss ATK DMG Boost': '3.00%',
          'Boss DMG Reduction': '3.00%',
        },
      },
      {
        Step: 2,
        Power: 562,
        UpgradeTime: 3,
        Cost: {
          Copper: 20000,
        },
        Building: {
          'Tower of Quintessence': 1,
        },
        Achievement: {},
        Effects: {
          'Character Max Level': 60,
          'Unified Market Tax Rate Reduction': '-2% (23%)',
          'Boss ATK DMG Boost': '6.00%',
          'Boss DMG Reduction': '6.00%',
        },
      },
      {
        Step: 3,
        Power: 702,
        UpgradeTime: 300,
        Cost: {
          Copper: 30000,
        },
        Building: {
          'Tower of Quintessence': 2,
        },
        Achievement: {
          98001003: 'Reach Character Lv. 30',
          98001102: 'Nefariox Ruins 2F Common Mission 9x',
        },
        Effects: {
          'Character Max Level': 70,
          'Unified Market Tax Rate Reduction': '-3% (22%)',
          'Boss ATK DMG Boost': '9.00%',
          'Boss DMG Reduction': '9.00%',
        },
      },
      {
        Step: 4,
        Power: 857,
        UpgradeTime: 1800,
        Cost: {
          Copper: 40000,
          Darksteel: 12000,
          Energy: 8000,
        },
        Building: {
          'Tower of Quintessence': 3,
        },
        Achievement: {
          98001004: 'Reach Character Lv. 35',
          98001103: 'Bullface Forest Common Mission 11x',
        },
        Effects: {
          'Character Max Level': 70,
          'Unified Market Tax Rate Reduction': '-4% (21%)',
          'Boss ATK DMG Boost': '12.00%',
          'Boss DMG Reduction': '12.00%',
        },
      },
      {
        Step: 5,
        Power: 1026,
        UpgradeTime: 3600,
        Cost: {
          Copper: 60000,
          Darksteel: 18000,
          Energy: 12000,
        },
        Building: {
          'Tower of Quintessence': 4,
        },
        Achievement: {
          98001005: 'Reach Character Lv. 40',
          98001104: 'Demon Bull Temple All Floors Common Mission 38x',
          98001205: 'Ginkgo Valley Common Mission 15x',
        },
        Effects: {
          'Character Max Level': 80,
          'Unified Market Tax Rate Reduction': '-5% (20%)',
          'Boss ATK DMG Boost': '15.00%',
          'Boss DMG Reduction': '15.00%',
        },
      },
      {
        Step: 6,
        Power: 1208,
        UpgradeTime: 10800,
        Cost: {
          Copper: 80000,
          Darksteel: 24000,
          Energy: 16000,
        },
        Building: {
          'Tower of Quintessence': 5,
        },
        Achievement: {
          98001006: 'Reach Character Lv. 45',
          98001105: 'Bicheon Town Common Mission 14x',
        },
        Effects: {
          'Character Max Level': 80,
          'Unified Market Tax Rate Reduction': '-6% (19%)',
          'Boss ATK DMG Boost': '15.00%',
          'Boss DMG Reduction': '15.00%',
        },
      },
      {
        Step: 7,
        Power: 1404,
        UpgradeTime: 21600,
        Cost: {
          Copper: 120000,
          Darksteel: 36000,
          Energy: 24000,
        },
        Building: {
          'Tower of Quintessence': 6,
        },
        Achievement: {
          98001007: 'Reach Character Lv. 50',
          98001106: 'Snake Pit Common Mission 17x',
        },
        Effects: {
          'Character Max Level': 90,
          'Unified Market Tax Rate Reduction': '-8% (17%)',
          'Boss ATK DMG Boost': '18.00%',
          'Boss DMG Reduction': '18.00%',
        },
      },
      {
        Step: 8,
        Power: 1611,
        UpgradeTime: 36000,
        Cost: {
          Copper: 160000,
          Darksteel: 48000,
          Energy: 32000,
        },
        Building: {
          'Tower of Quintessence': 7,
        },
        Achievement: {
          98001008: 'Reach Character Lv. 55',
          98001107: 'Viperbeast Plain Common Mission 14x',
        },
        Effects: {
          'Character Max Level': 90,
          'Unified Market Tax Rate Reduction': '-11% (14%)',
          'Boss ATK DMG Boost': '18.00%',
          'Boss DMG Reduction': '18.00%',
        },
      },
      {
        Step: 9,
        Power: 1831,
        UpgradeTime: 108000,
        Cost: {
          Copper: 220000,
          Darksteel: 66000,
          Energy: 44000,
        },
        Building: {
          'Tower of Quintessence': 8,
          'Millennial Tree': 8,
        },
        Achievement: {
          98001009: 'Reach Character Lv. 60',
          98001108: 'Death Gorge All Floors Common Mission 32x',
        },
        Effects: {
          'Character Max Level': 100,
          'Unified Market Tax Rate Reduction': '-15% (10%)',
          'Boss ATK DMG Boost': '21.00%',
          'Boss DMG Reduction': '21.00%',
        },
      },
      {
        Step: 10,
        Power: 2066,
        UpgradeTime: 216000,
        Cost: {
          Copper: 300000,
          Darksteel: 90000,
          Energy: 60000,
        },
        Building: {
          'Tower of Quintessence': 9,
          'Millennial Tree': 9,
        },
        Achievement: {
          98001010: 'Reach Character Lv. 65',
          98001109: 'Abandoned Mine All Floors Common Mission 43x',
        },
        Effects: {
          'Character Max Level': 100,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '21.00%',
          'Boss DMG Reduction': '21.00%',
        },
      },
      {
        Step: 11,
        Power: 2316,
        UpgradeTime: 432000,
        Cost: {
          Copper: 450000,
          Darksteel: 135000,
          Energy: 90000,
        },
        Building: {
          'Tower of Quintessence': 10,
          'Millennial Tree': 10,
          'Tower of Victory': 10,
        },
        Achievement: {
          98001011: 'Reach Character Lv. 70',
          98001110: 'Secret Mine All Floors Common Mission 28x',
          98001211: 'Seocheon Trading Post Common Mission 15x',
        },
        Effects: {
          'Character Max Level': 110,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '24.00%',
          'Boss DMG Reduction': '24.00%',
        },
      },
      {
        Step: 12,
        Power: 2582,
        UpgradeTime: 864000,
        Cost: {
          Copper: 600000,
          Darksteel: 180000,
          Energy: 120000,
        },
        Building: {
          'Tower of Quintessence': 11,
          'Millennial Tree': 11,
          'Tower of Victory': 11,
        },
        Achievement: {
          98001012: 'Reach Character Lv. 80',
          98001111: 'Phantom Woods Common Mission 14x',
        },
        Effects: {
          'Character Max Level': 110,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '24.00%',
          'Boss DMG Reduction': '24.00%',
        },
      },
      {
        Step: 13,
        Power: 2830,
        UpgradeTime: 1468800,
        Cost: {
          Copper: 750000,
          Darksteel: 225000,
          Energy: 150000,
        },
        Building: {
          'Tower of Quintessence': 12,
          'Millennial Tree': 12,
          'Tower of Victory': 12,
        },
        Achievement: {
          98001013: 'Reach Character Lv. 85',
          98001112: "Heaven's Way Peak Lower Level Common Mission 12x",
        },
        Effects: {
          'Character Max Level': 120,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '27.00%',
          'Boss DMG Reduction': '27.00%',
        },
      },
      {
        Step: 14,
        Power: 3062,
        UpgradeTime: 2203200,
        Cost: {
          Copper: 900000,
          Darksteel: 270000,
          Energy: 180000,
        },
        Building: {
          'Tower of Quintessence': 13,
          'Millennial Tree': 13,
          'Tower of Victory': 13,
        },
        Achievement: {
          98001014: 'Reach Character Lv. 90',
          98001113: "Heaven's Way Peak Upper Level Common Mission 9x",
        },
        Effects: {
          'Character Max Level': 120,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '27.00%',
          'Boss DMG Reduction': '27.00%',
        },
      },
      {
        Step: 15,
        Power: 3301,
        UpgradeTime: 3110400,
        Cost: {
          Copper: 1100000,
          Darksteel: 330000,
          Energy: 220000,
        },
        Building: {
          'Tower of Quintessence': 14,
          'Millennial Tree': 14,
          'Tower of Victory': 14,
        },
        Achievement: {
          98001015: 'Reach Character Lv. 95',
          98001114: 'Redmoon Mountain Common Mission 11x',
        },
        Effects: {
          'Character Max Level': 130,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '30.00%',
          'Boss DMG Reduction': '30.00%',
        },
      },
      {
        Step: 16,
        Power: 3794,
        UpgradeTime: 3283200,
        Cost: {
          Copper: 1300000,
          Darksteel: 390000,
          Energy: 260000,
        },
        Building: {
          'Tower of Quintessence': 15,
          'Millennial Tree': 15,
          'Tower of Victory': 15,
        },
        Achievement: {
          98001016: 'Reach Character Lv. 100',
          98001115: 'Phantasia Desert Common Mission 16x',
          98001116: 'Desert Road Common Mission 12x',
        },
        Effects: {
          'Character Max Level': 130,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '30.00%',
          'Boss DMG Reduction': '30.00%',
        },
      },
      {
        Step: 17,
        Power: 4307,
        UpgradeTime: 3456000,
        Cost: {
          Copper: 1500000,
          Darksteel: 450000,
          Energy: 300000,
        },
        Building: {
          'Tower of Quintessence': 16,
          'Millennial Tree': 16,
          'Tower of Victory': 16,
        },
        Achievement: {
          98001017: 'Reach Character Lv. 105',
          98001117: 'Sabuk Town Common Mission 14x',
          98001118: 'Ant Hole All Floors Common Mission 27x',
        },
        Effects: {
          'Character Max Level': 140,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '33.00%',
          'Boss DMG Reduction': '33.00%',
        },
      },
      {
        Step: 18,
        Power: 4838,
        UpgradeTime: 3628800,
        Cost: {
          Copper: 3000000,
          Darksteel: 900000,
          Energy: 600000,
        },
        Building: {
          'Tower of Quintessence': 17,
          'Millennial Tree': 17,
          'Tower of Victory': 17,
        },
        Achievement: {
          98001019: 'Reach Character Lv. 115',
          98001119: 'Rockcut Tomb 1F Common Mission 15x',
          98001120: 'Rockcut Tomb 2F Common Mission 15x',
        },
        Effects: {
          'Character Max Level': 140,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '36.00%',
          'Boss DMG Reduction': '36.00%',
        },
      },
      {
        Step: 19,
        Power: 5387,
        UpgradeTime: 3801600,
        Cost: {
          Copper: 5000000,
          Darksteel: 1500000,
          Energy: 1000000,
        },
        Building: {
          'Tower of Quintessence': 18,
          'Millennial Tree': 18,
          'Tower of Victory': 18,
        },
        Achievement: {
          98001020: 'Reach Character Lv. 120',
          98001121: 'Rockcut Tomb 3F Common Mission 15x',
          98001122: 'Bladehaven All Floors Common Mission 26x',
        },
        Effects: {
          'Character Max Level': 150,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '39.00%',
          'Boss DMG Reduction': '39.00%',
        },
      },
      {
        Step: 20,
        Power: 5951,
        UpgradeTime: 3974400,
        Cost: {
          Copper: 7500000,
          Darksteel: 2250000,
          Energy: 1500000,
        },
        Building: {
          'Tower of Quintessence': 19,
          'Millennial Tree': 19,
          'Tower of Victory': 19,
        },
        Achievement: {
          98001021: 'Reach Character Lv. 125',
          98001123: 'Gorge Cliff Path Common Mission 12x',
          98001124: 'Gorge Cave Common Mission 15x',
        },
        Effects: {
          'Character Max Level': 160,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '42.00%',
          'Boss DMG Reduction': '42.00%',
        },
      },
      {
        Step: 21,
        Power: 6530,
        UpgradeTime: 4147200,
        Cost: {
          Copper: 10000000,
          Darksteel: 3000000,
          Energy: 2000000,
        },
        Building: {
          'Tower of Quintessence': 20,
          'Millennial Tree': 20,
          'Tower of Victory': 20,
        },
        Achievement: {
          98001022: 'Reach Character Lv. 130',
          98001125: 'Great Sabuk Wall Common Mission 47x',
        },
        Effects: {
          'Character Max Level': 170,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '45.00%',
          'Boss DMG Reduction': '45.00%',
        },
      },
      {
        Step: 22,
        Power: 7122,
        UpgradeTime: 4320000,
        Cost: {
          Copper: 15000000,
          Darksteel: 4500000,
          Energy: 3000000,
        },
        Building: {
          'Tower of Quintessence': 21,
          'Millennial Tree': 21,
          'Tower of Victory': 21,
        },
        Achievement: {
          98001023: 'Reach Character Lv. 140',
          98001126: 'Nine Dragon Ice Field Common Mission 16x',
          98001127: 'Nine Dragon Ice Palace Common Mission 14x',
        },
        Effects: {
          'Character Max Level': 175,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '48.00%',
          'Boss DMG Reduction': '48.00%',
        },
      },
      {
        Step: 23,
        Power: 7729,
        UpgradeTime: 4492800,
        Cost: {
          Copper: 20000000,
          Darksteel: 6000000,
          Energy: 4000000,
        },
        Building: {
          'Tower of Quintessence': 22,
          'Millennial Tree': 22,
          'Tower of Victory': 22,
        },
        Achievement: {
          98001024: 'Reach Character Lv. 145',
          98001128: 'Sagittarion Temple All Floors Common Mission 42x',
        },
        Effects: {
          'Character Max Level': 180,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '51.00%',
          'Boss DMG Reduction': '51.00%',
        },
      },
      {
        Step: 24,
        Power: 8348,
        UpgradeTime: 4665600,
        Cost: {
          Copper: 28000000,
          Darksteel: 8400000,
          Energy: 5600000,
        },
        Building: {
          'Tower of Quintessence': 23,
          'Millennial Tree': 23,
          'Tower of Victory': 23,
        },
        Achievement: {
          98001025: 'Reach Character Lv. 150',
          98001129: 'Mirage Ship Inner Cabins Common Mission 14x',
          98001130:
            '[World 1] Demon Bull Temple All Floors Common Mission 41x',
        },
        Effects: {
          'Character Max Level': 185,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '54.00%',
          'Boss DMG Reduction': '54.00%',
        },
      },
      {
        Step: 25,
        Power: 9625,
        UpgradeTime: 4838400,
        Cost: {
          Copper: 42000000,
          Darksteel: 12600000,
          Energy: 8400000,
        },
        Building: {
          'Tower of Quintessence': 24,
          'Millennial Tree': 24,
          'Tower of Victory': 24,
        },
        Achievement: {
          98001026: 'Reach Character Lv. 155',
          98001131: 'Mirage Ship Engine Room Common Mission 14x',
          98001132: '[World 8] Abandoned Mine All Floors Common Mission 39x',
        },
        Effects: {
          'Character Max Level': 190,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '57.00%',
          'Boss DMG Reduction': '57.00%',
        },
      },
      {
        Step: 26,
        Power: 10973,
        UpgradeTime: 5270400,
        Cost: {
          Copper: 60000000,
          Darksteel: 18000000,
          Energy: 18000000,
        },
        Building: {
          'Tower of Quintessence': 25,
          'Millennial Tree': 25,
          'Tower of Victory': 25,
        },
        Achievement: {
          98001027: 'Reach Character Lv. 160',
          98001133: '[World 2] Seocheon Trading Post Common Mission 8x',
          98001134: "[World 2] Heaven's Way Peak Common Mission 9x",
        },
        Effects: {
          'Character Max Level': 195,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '60.00%',
          'Boss DMG Reduction': '60.00%',
        },
      },
      {
        Step: 27,
        Power: 12399,
        UpgradeTime: 5702400,
        Cost: {
          Copper: 84000000,
          Darksteel: 25200000,
          Energy: 25200000,
        },
        Building: {
          'Tower of Quintessence': 26,
          'Millennial Tree': 26,
          'Tower of Victory': 26,
        },
        Achievement: {
          98001028: 'Reach Character Lv. 165',
          98001135: '[World 5] Nine Dragon Ice Field Common Mission 9x',
          98001136: '[World 5] Illusion Temple Common Mission 8x',
        },
        Effects: {
          'Character Max Level': 200,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '63.00%',
          'Boss DMG Reduction': '63.00%',
        },
      },
      {
        Step: 28,
        Power: 13776,
        UpgradeTime: 6134400,
        Cost: {
          Copper: 114000000,
          Darksteel: 34000000,
          Energy: 34000000,
        },
        Building: {
          'Tower of Quintessence': 27,
          'Millennial Tree': 27,
          'Tower of Victory': 27,
        },
        Achievement: {
          98001029: 'Reach Character Lv. 170',
          98001137:
            'Complete a [Layer 1 World 1] Seven Valleys Mountain common mission 8 times 8x',
          98001138:
            'Complete a [Layer 1 World 1] Roaring Flame Island common mission 7 times 7x',
        },
        Effects: {
          'Character Max Level': 205,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '66.00%',
          'Boss DMG Reduction': '66.00%',
        },
      },
      {
        Step: 29,
        Power: 15306,
        UpgradeTime: 6566400,
        Cost: {
          Copper: 152000000,
          Darksteel: 46000000,
          Energy: 46000000,
        },
        Building: {
          'Tower of Quintessence': 28,
          'Millennial Tree': 28,
          'Tower of Victory': 28,
        },
        Achievement: {
          98001030: 'Reach Character Lv. 175',
          98001139:
            'Complete a [Layer 1 World 2] Underground Jail common mission 7 times 7x',
          98001140:
            'Complete a [Layer 1 World 2] Nine Dragon Palace common mission 7 times 7x',
        },
        Effects: {
          'Character Max Level': 210,
          'Unified Market Tax Rate Reduction': '-20% (5%)',
          'Boss ATK DMG Boost': '69.00%',
          'Boss DMG Reduction': '69.00%',
        },
      },
    ],
  },
  Forge: {
    BuildingId: 2000000,
    Steps: [
      {
        Step: 1,
        Power: 187,
        UpgradeTime: 3,
        Cost: {
          Copper: 6000,
        },
        Building: {},
        Achievement: {
          98002001: '[Elite] Nefariox Necropolis 1F Common Mission 13x',
        },
        Effects: {
          'PHYS DEF': 10,
          'Darksteel Storage Boost': 5000000,
        },
      },
      {
        Step: 2,
        Power: 241,
        UpgradeTime: 3,
        Cost: {
          Copper: 12000,
        },
        Building: {
          'Tower of Conquest': 2,
        },
        Achievement: {
          98002002: '[Elite] Nefariox Necropolis 2F Common Mission 13x',
        },
        Effects: {
          'PHYS DEF': 20,
          'Darksteel Storage Boost': 5000000,
        },
      },
      {
        Step: 3,
        Power: 301,
        UpgradeTime: 150,
        Cost: {
          Copper: 18000,
        },
        Building: {
          'Tower of Conquest': 3,
        },
        Achievement: {
          98002003: '[Elite] Demon Bull Temple 1F Common Mission 11x',
        },
        Effects: {
          'PHYS DEF': 30,
          'Darksteel Storage Boost': 10000000,
        },
      },
      {
        Step: 4,
        Power: 367,
        UpgradeTime: 900,
        Cost: {
          Copper: 24000,
          Energy: 4800,
        },
        Building: {
          'Tower of Conquest': 4,
        },
        Achievement: {
          98002004: '[Elite] Demon Bull Temple 3F Common Mission 13x',
        },
        Effects: {
          'PHYS DEF': 40,
          'Darksteel Storage Boost': 10000000,
        },
      },
      {
        Step: 5,
        Power: 440,
        UpgradeTime: 1800,
        Cost: {
          Copper: 36000,
          Energy: 7200,
        },
        Building: {
          'Tower of Conquest': 5,
        },
        Achievement: {
          98002005: '[Elite] Viperbeast Plain Common Mission 8x',
        },
        Effects: {
          'PHYS DEF': 50,
          'Darksteel Storage Boost': 15000000,
        },
      },
      {
        Step: 6,
        Power: 518,
        UpgradeTime: 5400,
        Cost: {
          Copper: 48000,
          Energy: 9600,
        },
        Building: {
          'Tower of Conquest': 6,
        },
        Achievement: {
          98002006: '[Elite] Upper Death Gorge Common Mission 12x',
        },
        Effects: {
          'PHYS DEF': 50,
          'Darksteel Storage Boost': 15000000,
        },
      },
      {
        Step: 7,
        Power: 602,
        UpgradeTime: 10800,
        Cost: {
          Copper: 72000,
          Energy: 14400,
        },
        Building: {
          'Tower of Conquest': 7,
        },
        Achievement: {
          98002007: '[Elite] Lower Death Gorge Common Mission 12x',
        },
        Effects: {
          'PHYS DEF': 60,
          'Darksteel Storage Boost': 20000000,
        },
      },
      {
        Step: 8,
        Power: 691,
        UpgradeTime: 18000,
        Cost: {
          Copper: 96000,
          Energy: 19200,
        },
        Building: {
          'Tower of Conquest': 8,
        },
        Achievement: {
          98002008: '[Elite] Abandoned Mine 1F Common Mission 12x',
        },
        Effects: {
          'PHYS DEF': 60,
          'Darksteel Storage Boost': 20000000,
        },
      },
      {
        Step: 9,
        Power: 785,
        UpgradeTime: 54000,
        Cost: {
          Copper: 132000,
          Energy: 26400,
        },
        Building: {
          'Tower of Conquest': 9,
        },
        Achievement: {
          98002009: '[Elite] Abandoned Mine 3F Common Mission 12x',
        },
        Effects: {
          'PHYS DEF': 70,
          'Darksteel Storage Boost': 30000000,
        },
      },
      {
        Step: 10,
        Power: 886,
        UpgradeTime: 108000,
        Cost: {
          Copper: 180000,
          Energy: 36000,
        },
        Building: {
          'Tower of Conquest': 10,
        },
        Achievement: {
          98002010: '[Elite] Secret Mine 1F Common Mission 12x',
        },
        Effects: {
          'PHYS DEF': 70,
          'Darksteel Storage Boost': 30000000,
        },
      },
      {
        Step: 11,
        Power: 993,
        UpgradeTime: 216000,
        Cost: {
          Copper: 270000,
          Energy: 54000,
        },
        Building: {
          'Tower of Conquest': 11,
        },
        Achievement: {
          98002011: '[Elite] Secret Mine 2F Common Mission 12x',
        },
        Effects: {
          'PHYS DEF': 80,
          'Darksteel Storage Boost': 40000000,
        },
      },
      {
        Step: 12,
        Power: 1107,
        UpgradeTime: 432000,
        Cost: {
          Copper: 360000,
          Energy: 72000,
        },
        Building: {
          'Tower of Conquest': 12,
        },
        Achievement: {
          98002012: '[Elite] Phantom Woods Common Mission 8x',
        },
        Effects: {
          'PHYS DEF': 80,
          'Darksteel Storage Boost': 40000000,
        },
      },
      {
        Step: 13,
        Power: 1213,
        UpgradeTime: 734400,
        Cost: {
          Copper: 450000,
          Energy: 90000,
        },
        Building: {
          'Tower of Conquest': 13,
        },
        Achievement: {
          98002013: "[Elite] Heaven's Way Peak Upper Level Common Mission 8x",
        },
        Effects: {
          'PHYS DEF': 90,
          'Darksteel Storage Boost': 45000000,
        },
      },
      {
        Step: 14,
        Power: 1313,
        UpgradeTime: 1101600,
        Cost: {
          Copper: 540000,
          Energy: 108000,
        },
        Building: {
          'Tower of Conquest': 14,
        },
        Achievement: {
          98002014: '[Elite] Redmoon Mountain Common Mission 8x',
        },
        Effects: {
          'PHYS DEF': 90,
          'Darksteel Storage Boost': 45000000,
        },
      },
      {
        Step: 15,
        Power: 1415,
        UpgradeTime: 1555200,
        Cost: {
          Copper: 660000,
          Energy: 132000,
        },
        Building: {
          'Tower of Conquest': 15,
        },
        Achievement: {
          98002015: '[Elite] Redmoon Gorge Common Mission 36x',
        },
        Effects: {
          'PHYS DEF': 100,
          'Darksteel Storage Boost': 50000000,
        },
      },
      {
        Step: 16,
        Power: 1626,
        UpgradeTime: 1641600,
        Cost: {
          Copper: 975000,
          Energy: 195000,
        },
        Building: {
          'Tower of Conquest': 16,
        },
        Achievement: {
          98002016: '[Elite] Phantasia Desert Common Mission 11x',
          98002017: '[Elite] Ant Hole 1F Common Mission 11x',
        },
        Effects: {
          'PHYS DEF': 100,
          'Darksteel Storage Boost': 50000000,
        },
      },
      {
        Step: 17,
        Power: 1846,
        UpgradeTime: 1728000,
        Cost: {
          Copper: 1125000,
          Energy: 225000,
        },
        Building: {
          'Tower of Conquest': 17,
        },
        Achievement: {
          98002018:
            '[Elite] Sabuk Castle Underground Jail Common Mission 11x',
          98002019: '[Elite] Ant Hole 2F Common Mission 11x',
        },
        Effects: {
          'PHYS DEF': 110,
          'Darksteel Storage Boost': 55000000,
        },
      },
      {
        Step: 18,
        Power: 2074,
        UpgradeTime: 1814400,
        Cost: {
          Copper: 2250000,
          Energy: 450000,
        },
        Building: {
          'Tower of Conquest': 18,
        },
        Achievement: {
          98002020: '[Elite] Rockcut Tomb 1F Common Mission 9x',
          98002021: '[Elite] Rockcut Tomb 2F Common Mission 9x',
        },
        Effects: {
          'PHYS DEF': 120,
          'Darksteel Storage Boost': 55000000,
        },
      },
      {
        Step: 19,
        Power: 2309,
        UpgradeTime: 1900800,
        Cost: {
          Copper: 3750000,
          Energy: 750000,
        },
        Building: {
          'Tower of Conquest': 19,
        },
        Achievement: {
          98002022: '[Elite] Rockcut Tomb 3F Common Mission 9x',
          98002023: '[Elite] Bladehaven 1F Common Mission 9x',
          98002024: '[Elite] Bladehaven 2F Common Mission 9x',
        },
        Effects: {
          'PHYS DEF': 130,
          'Darksteel Storage Boost': 60000000,
        },
      },
      {
        Step: 20,
        Power: 2551,
        UpgradeTime: 1987200,
        Cost: {
          Copper: 5625000,
          Energy: 1125000,
        },
        Building: {
          'Tower of Conquest': 20,
        },
        Achievement: {
          98002025: '[Elite] Gorge Cave Common Mission 9x',
          98002026: '[Elite] Great Sabuk Wall Camp Common Mission 11x',
        },
        Effects: {
          'PHYS DEF': 140,
          'Darksteel Storage Boost': 60000000,
        },
      },
      {
        Step: 21,
        Power: 2799,
        UpgradeTime: 2073600,
        Cost: {
          Copper: 7500000,
          Energy: 1500000,
        },
        Building: {
          'Tower of Conquest': 21,
        },
        Achievement: {
          98002027:
            '[Elite] Great Sabuk Wall Supply Depot Common Mission 11x',
          98002028:
            '[Elite] Great Sabuk Wall Control Room Common Mission 11x',
        },
        Effects: {
          'PHYS DEF': 150,
          'Darksteel Storage Boost': 65000000,
        },
      },
      {
        Step: 22,
        Power: 3053,
        UpgradeTime: 2160000,
        Cost: {
          Copper: 11250000,
          Energy: 2250000,
        },
        Building: {
          'Tower of Conquest': 22,
        },
        Achievement: {
          98002029: '[Elite] Sagittarion Temple 1F Common Mission 8x',
          98002030: '[Elite] Sagittarion Temple 2F Common Mission 9x',
        },
        Effects: {
          'PHYS DEF': 160,
          'Darksteel Storage Boost': 65000000,
        },
      },
      {
        Step: 23,
        Power: 3313,
        UpgradeTime: 2246400,
        Cost: {
          Copper: 15000000,
          Energy: 3000000,
        },
        Building: {
          'Tower of Conquest': 23,
        },
        Achievement: {
          98002031: '[Elite] Sagittarion Temple 3F Common Mission 8x',
          98002032: '[Elite] Nine Dragon Ice Palace Common Mission 8x',
        },
        Effects: {
          'PHYS DEF': 170,
          'Darksteel Storage Boost': 70000000,
        },
      },
      {
        Step: 24,
        Power: 3578,
        UpgradeTime: 2332800,
        Cost: {
          Copper: 21000000,
          Energy: 4200000,
        },
        Building: {
          'Tower of Conquest': 24,
        },
        Achievement: {
          98002301: 'Reach Vermilion Bird Mystique Stage 4 4x',
          98002401: 'Reach Blue Dragon Mystique Stage 4 4x',
        },
        Effects: {
          'PHYS DEF': 180,
          'Darksteel Storage Boost': 70000000,
        },
      },
      {
        Step: 25,
        Power: 4125,
        UpgradeTime: 2419200,
        Cost: {
          Copper: 31500000,
          Energy: 6300000,
        },
        Building: {
          'Tower of Conquest': 25,
        },
        Achievement: {
          98002302: 'Reach Vermilion Bird Mystique Stage 5 5x',
          98002402: 'Reach Blue Dragon Mystique Stage 5 5x',
        },
        Effects: {
          'PHYS DEF': 190,
          'Darksteel Storage Boost': 75000000,
        },
      },
      {
        Step: 26,
        Power: 4696,
        UpgradeTime: 2635200,
        Cost: {
          Copper: 45000000,
          Energy: 13500000,
        },
        Building: {
          'Tower of Conquest': 26,
        },
        Achievement: {
          98002303: 'Reach Vermilion Bird Mystique Stage 6 6x',
          98002403: 'Reach Blue Dragon Mystique Stage 6 6x',
        },
        Effects: {
          'PHYS DEF': 200,
          'Darksteel Storage Boost': 75000000,
        },
      },
      {
        Step: 27,
        Power: 5307,
        UpgradeTime: 2851200,
        Cost: {
          Copper: 63000000,
          Energy: 18900000,
        },
        Building: {
          'Tower of Conquest': 27,
        },
        Achievement: {
          98002304: 'Reach Vermilion Bird Mystique Stage 7 7x',
          98002404: 'Reach Blue Dragon Mystique Stage 7 7x',
        },
        Effects: {
          'PHYS DEF': 210,
          'Darksteel Storage Boost': 80000000,
        },
      },
      {
        Step: 28,
        Power: 5897,
        UpgradeTime: 3067200,
        Cost: {
          Copper: 86000000,
          Energy: 26000000,
        },
        Building: {
          'Tower of Conquest': 28,
        },
        Achievement: {
          98002305: 'Reach Vermilion Bird Mystique Stage 8 8x',
          98002405: 'Reach Blue Dragon Mystique Stage 8 8x',
        },
        Effects: {
          'PHYS DEF': 220,
          'Darksteel Storage Boost': 80000000,
        },
      },
      {
        Step: 29,
        Power: 6552,
        UpgradeTime: 3283200,
        Cost: {
          Copper: 114000000,
          Energy: 35000000,
        },
        Building: {
          'Tower of Conquest': 29,
        },
        Achievement: {
          98002306: 'Reach Vermilion Bird Mystique Stage 9 9x',
          98002406: 'Reach Blue Dragon Mystique Stage 9 9x',
        },
        Effects: {
          'PHYS DEF': 230,
          'Darksteel Storage Boost': 85000000,
        },
      },
    ],
  },
  Mine: {
    BuildingId: 3000000,
    Steps: [
      {
        Step: 1,
        Power: 63,
        UpgradeTime: 3,
        Cost: {
          Copper: 2500,
        },
        Building: {},
        Achievement: {
          98003101: 'Mine Darksteel 2x',
        },
        Effects: {
          'Spell DEF': 10,
          'Darksteel Gain Boost': 0,
        },
      },
      {
        Step: 2,
        Power: 81,
        UpgradeTime: 3,
        Cost: {
          Copper: 5000,
        },
        Building: {
          'Tower of Conquest': 2,
        },
        Achievement: {
          98003002: 'Mine Ores 30x',
        },
        Effects: {
          'Spell DEF': 20,
          'Darksteel Gain Boost': '5.00%',
        },
      },
      {
        Step: 3,
        Power: 101,
        UpgradeTime: 150,
        Cost: {
          Copper: 7500,
        },
        Building: {
          'Tower of Conquest': 3,
        },
        Achievement: {
          98003103: 'Mine Darksteel 8x',
        },
        Effects: {
          'Spell DEF': 30,
          'Darksteel Gain Boost': '5.00%',
        },
      },
      {
        Step: 4,
        Power: 123,
        UpgradeTime: 900,
        Cost: {
          Copper: 10000,
          Energy: 2000,
        },
        Building: {
          'Tower of Conquest': 4,
        },
        Achievement: {
          98003204: 'Bicheon Valley 1F Common Mission 7x',
        },
        Effects: {
          'Spell DEF': 40,
          'Darksteel Gain Boost': '10.00%',
        },
      },
      {
        Step: 5,
        Power: 147,
        UpgradeTime: 1800,
        Cost: {
          Copper: 15000,
          Energy: 3000,
        },
        Building: {
          'Tower of Conquest': 5,
        },
        Achievement: {
          98003005: 'Mine Ores 70x',
        },
        Effects: {
          'Spell DEF': 50,
          'Darksteel Gain Boost': '10.00%',
        },
      },
      {
        Step: 6,
        Power: 173,
        UpgradeTime: 5400,
        Cost: {
          Copper: 20000,
          Energy: 4000,
        },
        Building: {
          'Tower of Conquest': 6,
        },
        Achievement: {
          98003206: 'Bicheon Valley 2F Common Mission 6x',
        },
        Effects: {
          'Spell DEF': 50,
          'Darksteel Gain Boost': '15.00%',
        },
      },
      {
        Step: 7,
        Power: 201,
        UpgradeTime: 10800,
        Cost: {
          Copper: 30000,
          Energy: 6000,
        },
        Building: {
          'Tower of Conquest': 7,
        },
        Achievement: {
          98003007: 'Mine Ores 200x',
        },
        Effects: {
          'Spell DEF': 60,
          'Darksteel Gain Boost': '15.00%',
        },
      },
      {
        Step: 8,
        Power: 231,
        UpgradeTime: 18000,
        Cost: {
          Copper: 40000,
          Energy: 8000,
        },
        Building: {
          'Tower of Conquest': 8,
        },
        Achievement: {
          98003208: 'Bicheon Valley 4F Common Mission 6x',
        },
        Effects: {
          'Spell DEF': 60,
          'Darksteel Gain Boost': '20.00%',
        },
      },
      {
        Step: 9,
        Power: 262,
        UpgradeTime: 54000,
        Cost: {
          Copper: 55000,
          Energy: 11000,
        },
        Building: {
          'Tower of Conquest': 9,
        },
        Achievement: {
          98003109: 'Mine Darksteel 790x',
        },
        Effects: {
          'Spell DEF': 70,
          'Darksteel Gain Boost': '20.00%',
        },
      },
      {
        Step: 10,
        Power: 296,
        UpgradeTime: 108000,
        Cost: {
          Copper: 75000,
          Energy: 15000,
        },
        Building: {
          'Tower of Conquest': 10,
        },
        Achievement: {
          98003210: 'Snake Valley 1F Common Mission 7x',
        },
        Effects: {
          'Spell DEF': 70,
          'Darksteel Gain Boost': '25.00%',
        },
      },
      {
        Step: 11,
        Power: 331,
        UpgradeTime: 216000,
        Cost: {
          Copper: 112500,
          Energy: 22500,
        },
        Building: {
          'Tower of Conquest': 11,
        },
        Achievement: {
          98003211: 'Snake Valley 2F Common Mission 7x',
        },
        Effects: {
          'Spell DEF': 80,
          'Darksteel Gain Boost': '25.00%',
        },
      },
      {
        Step: 12,
        Power: 369,
        UpgradeTime: 432000,
        Cost: {
          Copper: 150000,
          Energy: 30000,
        },
        Building: {
          'Tower of Conquest': 12,
        },
        Achievement: {
          98003212: 'Snake Valley 3F Common Mission 7x',
        },
        Effects: {
          'Spell DEF': 80,
          'Darksteel Gain Boost': '75.00%',
        },
      },
      {
        Step: 13,
        Power: 405,
        UpgradeTime: 734400,
        Cost: {
          Copper: 187500,
          Energy: 37500,
        },
        Building: {
          'Tower of Conquest': 13,
        },
        Achievement: {
          98003213: 'Snake Valley 4F Common Mission 6x',
        },
        Effects: {
          'Spell DEF': 90,
          'Darksteel Gain Boost': '85.00%',
        },
      },
      {
        Step: 14,
        Power: 438,
        UpgradeTime: 1101600,
        Cost: {
          Copper: 225000,
          Energy: 45000,
        },
        Building: {
          'Tower of Conquest': 14,
        },
        Achievement: {
          98003214: 'Redmoon Valley 1F Common Mission 7x',
        },
        Effects: {
          'Spell DEF': 90,
          'Darksteel Gain Boost': '95.00%',
        },
      },
      {
        Step: 15,
        Power: 472,
        UpgradeTime: 1555200,
        Cost: {
          Copper: 275000,
          Energy: 55000,
        },
        Building: {
          'Tower of Conquest': 15,
        },
        Achievement: {
          98003215: 'Redmoon Valley 2F Common Mission 7x',
        },
        Effects: {
          'Spell DEF': 100,
          'Darksteel Gain Boost': '105.00%',
        },
      },
      {
        Step: 16,
        Power: 542,
        UpgradeTime: 1641600,
        Cost: {
          Copper: 975000,
          Energy: 195000,
        },
        Building: {
          'Tower of Conquest': 16,
        },
        Achievement: {
          98003016: 'Mine ores 1100 times',
          98003216: 'Redmoon Valley 3F Common Mission 7x',
        },
        Effects: {
          'Spell DEF': 100,
          'Darksteel Gain Boost': '115.00%',
        },
      },
      {
        Step: 17,
        Power: 616,
        UpgradeTime: 1728000,
        Cost: {
          Copper: 1125000,
          Energy: 225000,
        },
        Building: {
          'Tower of Conquest': 17,
        },
        Achievement: {
          98003117: 'Mine Darksteel 1960 times',
          98003217: 'Redmoon Valley 4F Common Mission 6x',
        },
        Effects: {
          'Spell DEF': 110,
          'Darksteel Gain Boost': '165.00%',
        },
      },
      {
        Step: 18,
        Power: 692,
        UpgradeTime: 1814400,
        Cost: {
          Copper: 2250000,
          Energy: 450000,
        },
        Building: {
          'Tower of Conquest': 18,
        },
        Achievement: {
          98003218: 'Phantasia Valley 1F Common Mission 8x',
          98003219: 'Phantasia Valley 2F Common Mission 8x',
        },
        Effects: {
          'Spell DEF': 120,
          'Darksteel Gain Boost': '175.00%',
        },
      },
      {
        Step: 19,
        Power: 770,
        UpgradeTime: 1900800,
        Cost: {
          Copper: 3750000,
          Energy: 750000,
        },
        Building: {
          'Tower of Conquest': 19,
        },
        Achievement: {
          98003220: 'Phantasia Valley 3F Common Mission 8x',
          98003221: 'Phantasia Valley 4F Common Mission 7x',
        },
        Effects: {
          'Spell DEF': 130,
          'Darksteel Gain Boost': '185.00%',
        },
      },
      {
        Step: 20,
        Power: 851,
        UpgradeTime: 1987200,
        Cost: {
          Copper: 5625000,
          Energy: 1125000,
        },
        Building: {
          'Tower of Conquest': 20,
        },
        Achievement: {
          98003230: 'Defeat 10 Unique Monsters at Phantasia Valley 1F 10x',
          98003231: 'Defeat 10 Unique Monsters at Phantasia Valley 2F 10x',
        },
        Effects: {
          'Spell DEF': 140,
          'Darksteel Gain Boost': '195.00%',
        },
      },
      {
        Step: 21,
        Power: 933,
        UpgradeTime: 2073600,
        Cost: {
          Copper: 7500000,
          Energy: 1500000,
        },
        Building: {
          'Tower of Conquest': 21,
        },
        Achievement: {
          98003232: 'Defeat 10 Unique Monsters at Phantasia Valley 3F 10x',
          98003233: 'Defeat 10 Unique Monsters at Phantasia Valley 4F 10x',
        },
        Effects: {
          'Spell DEF': 150,
          'Darksteel Gain Boost': '205.00%',
        },
      },
      {
        Step: 22,
        Power: 1018,
        UpgradeTime: 2160000,
        Cost: {
          Copper: 11250000,
          Energy: 2250000,
        },
        Building: {
          'Tower of Conquest': 22,
        },
        Achievement: {
          98003226: 'Sagittarion Valley 1F Common Mission 7x',
          98003227: 'Sagittarion Valley 2F Common Mission 7x',
        },
        Effects: {
          'Spell DEF': 160,
          'Darksteel Gain Boost': '215.00%',
        },
      },
      {
        Step: 23,
        Power: 1105,
        UpgradeTime: 2246400,
        Cost: {
          Copper: 15000000,
          Energy: 3000000,
        },
        Building: {
          'Tower of Conquest': 23,
        },
        Achievement: {
          98003228: 'Sagittarion Valley 3F Common Mission 7x',
          98003229: 'Sagittarion Valley 4F Common Mission 6x',
        },
        Effects: {
          'Spell DEF': 170,
          'Darksteel Gain Boost': '225.00%',
        },
      },
      {
        Step: 24,
        Power: 1193,
        UpgradeTime: 2332800,
        Cost: {
          Copper: 21000000,
          Energy: 4200000,
        },
        Building: {
          'Tower of Conquest': 24,
        },
        Achievement: {
          98002101: 'Reach Unicorn Lion Mystique Stage 4 4x',
          98002201: 'Reach Black Tortoise Mystique Stage 4 4x',
        },
        Effects: {
          'Spell DEF': 180,
          'Darksteel Gain Boost': '235.00%',
        },
      },
      {
        Step: 25,
        Power: 1375,
        UpgradeTime: 2419200,
        Cost: {
          Copper: 31500000,
          Energy: 6300000,
        },
        Building: {
          'Tower of Conquest': 25,
        },
        Achievement: {
          98002102: 'Reach Unicorn Lion Mystique Stage 5 5x',
          98002202: 'Reach Black Tortoise Mystique Stage 5 5x',
        },
        Effects: {
          'Spell DEF': 190,
          'Darksteel Gain Boost': '245.00%',
        },
      },
      {
        Step: 26,
        Power: 1569,
        UpgradeTime: 2635200,
        Cost: {
          Copper: 45000000,
          Energy: 13500000,
        },
        Building: {
          'Tower of Conquest': 26,
        },
        Achievement: {
          98002103: 'Reach Unicorn Lion Mystique Stage 6 6x',
          98002203: 'Reach Black Tortoise Mystique Stage 6 6x',
        },
        Effects: {
          'Spell DEF': 200,
          'Darksteel Gain Boost': '255.00%',
        },
      },
      {
        Step: 27,
        Power: 1773,
        UpgradeTime: 2851200,
        Cost: {
          Copper: 63000000,
          Energy: 18900000,
        },
        Building: {
          'Tower of Conquest': 27,
        },
        Achievement: {
          98002104: 'Reach Unicorn Lion Mystique Stage 7 7x',
          98002204: 'Reach Black Tortoise Mystique Stage 7 7x',
        },
        Effects: {
          'Spell DEF': 210,
          'Darksteel Gain Boost': '265.00%',
        },
      },
      {
        Step: 28,
        Power: 1970,
        UpgradeTime: 3067200,
        Cost: {
          Copper: 86000000,
          Energy: 26000000,
        },
        Building: {
          'Tower of Conquest': 28,
        },
        Achievement: {
          98002105: 'Reach Unicorn Lion Mystique Stage 8 8x',
          98002205: 'Reach Black Tortoise Mystique Stage 8 8x',
        },
        Effects: {
          'Spell DEF': 220,
          'Darksteel Gain Boost': '275.00%',
        },
      },
      {
        Step: 29,
        Power: 2189,
        UpgradeTime: 3283200,
        Cost: {
          Copper: 114000000,
          Energy: 35000000,
        },
        Building: {
          'Tower of Conquest': 29,
        },
        Achievement: {
          98002106: 'Reach Unicorn Lion Mystique Stage 9 9x',
          98002206: 'Reach Black Tortoise Mystique Stage 9 9x',
        },
        Effects: {
          'Spell DEF': 230,
          'Darksteel Gain Boost': '285.00%',
        },
      },
    ],
  },
  'Millennial Tree': {
    BuildingId: 4000000,
    Steps: [
      {
        Step: 1,
        Power: 63,
        UpgradeTime: 3,
        Cost: {
          Copper: 2000,
        },
        Building: {},
        Achievement: {
          98005001: 'Gather Herbs 10x',
        },
        Effects: {
          'PHYS DEF': 10,
          'Max Number of Magic Square Tickets': '+0',
          'Max Number of Secret Peak Tickets': '+0',
        },
      },
      {
        Step: 2,
        Power: 81,
        UpgradeTime: 3,
        Cost: {
          Copper: 4000,
        },
        Building: {
          'Tower of Conquest': 2,
        },
        Achievement: {
          98005102: 'Promote Constitution to Tier 2',
        },
        Effects: {
          'PHYS DEF': 20,
          'Max Number of Magic Square Tickets': '+0',
          'Max Number of Secret Peak Tickets': '+0',
        },
      },
      {
        Step: 3,
        Power: 101,
        UpgradeTime: 230,
        Cost: {
          Copper: 6000,
        },
        Building: {
          'Tower of Conquest': 3,
        },
        Achievement: {
          98005003: 'Gather Herbs 10x',
        },
        Effects: {
          'PHYS DEF': 30,
          'Max Number of Magic Square Tickets': '+0',
          'Max Number of Secret Peak Tickets': '+0',
        },
      },
      {
        Step: 4,
        Power: 123,
        UpgradeTime: 1350,
        Cost: {
          Copper: 8000,
          Energy: 1600,
          Darksteel: 2400,
        },
        Building: {
          'Tower of Conquest': 4,
        },
        Achievement: {
          98005104: 'Promote Constitution to Tier 3',
        },
        Effects: {
          'PHYS DEF': 40,
          'Max Number of Magic Square Tickets': '+0',
          'Max Number of Secret Peak Tickets': '+0',
        },
      },
      {
        Step: 5,
        Power: 147,
        UpgradeTime: 2700,
        Cost: {
          Copper: 12000,
          Energy: 2400,
          Darksteel: 3600,
        },
        Building: {
          'Tower of Conquest': 5,
        },
        Achievement: {
          98005005: 'Gather Herbs 50x',
        },
        Effects: {
          'PHYS DEF': 50,
          'Max Number of Magic Square Tickets': '+0',
          'Max Number of Secret Peak Tickets': '+0',
        },
      },
      {
        Step: 6,
        Power: 173,
        UpgradeTime: 8100,
        Cost: {
          Copper: 16000,
          Energy: 3200,
          Darksteel: 4800,
        },
        Building: {
          'Tower of Conquest': 6,
        },
        Achievement: {
          98005106: 'Promote Constitution to Tier 4',
        },
        Effects: {
          'PHYS DEF': 50,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+0',
        },
      },
      {
        Step: 7,
        Power: 201,
        UpgradeTime: 16200,
        Cost: {
          Copper: 24000,
          Energy: 4800,
          Darksteel: 7200,
        },
        Building: {
          'Tower of Conquest': 7,
        },
        Achievement: {
          98005007: 'Gather Herbs 80x',
        },
        Effects: {
          'PHYS DEF': 60,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+0',
        },
      },
      {
        Step: 8,
        Power: 231,
        UpgradeTime: 27000,
        Cost: {
          Copper: 32000,
          Energy: 6400,
          Darksteel: 9600,
        },
        Building: {
          'Tower of Conquest': 8,
        },
        Achievement: {
          98005108: 'Promote Constitution to Tier 5',
        },
        Effects: {
          'PHYS DEF': 60,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+0',
        },
      },
      {
        Step: 9,
        Power: 262,
        UpgradeTime: 81000,
        Cost: {
          Copper: 44000,
          Energy: 8800,
          Darksteel: 13200,
        },
        Building: {
          'Tower of Conquest': 9,
        },
        Achievement: {
          98005009: 'Gather Herbs 150x',
        },
        Effects: {
          'PHYS DEF': 70,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+0',
        },
      },
      {
        Step: 10,
        Power: 296,
        UpgradeTime: 162000,
        Cost: {
          Copper: 60000,
          Energy: 12000,
          Darksteel: 18000,
        },
        Building: {
          'Tower of Conquest': 10,
        },
        Achievement: {
          98005110: 'Promote Constitution to Tier 6',
        },
        Effects: {
          'PHYS DEF': 70,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+0',
        },
      },
      {
        Step: 11,
        Power: 331,
        UpgradeTime: 324000,
        Cost: {
          Copper: 90000,
          Energy: 18000,
          Darksteel: 27000,
        },
        Building: {
          'Tower of Conquest': 11,
        },
        Achievement: {
          98001012: 'Reach Character Lv. 80',
          98005011: 'Gather Herbs 400x',
        },
        Effects: {
          'PHYS DEF': 80,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+0',
        },
      },
      {
        Step: 12,
        Power: 369,
        UpgradeTime: 648000,
        Cost: {
          Copper: 120000,
          Energy: 24000,
          Darksteel: 36000,
        },
        Building: {
          'Tower of Conquest': 12,
        },
        Achievement: {
          98001013: 'Reach Character Lv. 85',
          98005112: 'Promote Constitution to Tier 7',
        },
        Effects: {
          'PHYS DEF': 80,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+0',
        },
      },
      {
        Step: 13,
        Power: 405,
        UpgradeTime: 1101600,
        Cost: {
          Copper: 150000,
          Energy: 30000,
          Darksteel: 45000,
        },
        Building: {
          'Tower of Conquest': 13,
        },
        Achievement: {
          98001014: 'Reach Character Lv. 90',
          98005113: 'Promote Constitution to Tier 8',
        },
        Effects: {
          'PHYS DEF': 90,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+1',
        },
      },
      {
        Step: 14,
        Power: 438,
        UpgradeTime: 1652400,
        Cost: {
          Copper: 180000,
          Energy: 36000,
          Darksteel: 54000,
        },
        Building: {
          'Tower of Conquest': 14,
        },
        Achievement: {
          98001015: 'Reach Character Lv. 95',
          98005114: 'Promote Constitution to Tier 9',
        },
        Effects: {
          'PHYS DEF': 90,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+1',
        },
      },
      {
        Step: 15,
        Power: 472,
        UpgradeTime: 2332800,
        Cost: {
          Copper: 220000,
          Energy: 44000,
          Darksteel: 66000,
        },
        Building: {
          'Tower of Conquest': 15,
        },
        Achievement: {
          98001016: 'Reach Character Lv. 100',
          98005115: 'Promote Constitution to Tier 10',
        },
        Effects: {
          'PHYS DEF': 100,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+1',
        },
      },
      {
        Step: 16,
        Power: 542,
        UpgradeTime: 2462400,
        Cost: {
          Copper: 650000,
          Energy: 130000,
          Darksteel: 195000,
        },
        Building: {
          'Tower of Conquest': 16,
        },
        Achievement: {
          98001017: 'Reach Character Lv. 105',
          98005012: 'Gather herbs 700 times',
          98005116: 'Promote Constitution to Tier 11',
        },
        Effects: {
          'PHYS DEF': 100,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+1',
        },
      },
      {
        Step: 17,
        Power: 616,
        UpgradeTime: 2592000,
        Cost: {
          Copper: 750000,
          Energy: 150000,
          Darksteel: 225000,
        },
        Building: {
          'Tower of Conquest': 17,
        },
        Achievement: {
          98001018: 'Reach Character Lv. 110',
          98005013: 'Gather herbs 1400 times',
          98005117: 'Promote Constitution to Tier 12',
        },
        Effects: {
          'PHYS DEF': 110,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+1',
        },
      },
      {
        Step: 18,
        Power: 692,
        UpgradeTime: 2721600,
        Cost: {
          Copper: 1500000,
          Energy: 300000,
          Darksteel: 450000,
        },
        Building: {
          'Tower of Conquest': 18,
          Portal: 17,
        },
        Achievement: {
          98001019: 'Reach Character Lv. 115',
          98005014: 'Gather Herbs 1200x',
          98005118: 'Promote Constitution to Tier 13',
        },
        Effects: {
          'PHYS DEF': 120,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+1',
        },
      },
      {
        Step: 19,
        Power: 770,
        UpgradeTime: 2851200,
        Cost: {
          Copper: 2500000,
          Energy: 500000,
          Darksteel: 750000,
        },
        Building: {
          'Tower of Conquest': 19,
          Portal: 18,
        },
        Achievement: {
          98001020: 'Reach Character Lv. 120',
          98005015: 'Gather Herbs 1200x',
          98005119: 'Promote Constitution to Tier 14',
        },
        Effects: {
          'PHYS DEF': 130,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+1',
        },
      },
      {
        Step: 20,
        Power: 851,
        UpgradeTime: 2980800,
        Cost: {
          Copper: 3750000,
          Energy: 750000,
          Darksteel: 1125000,
        },
        Building: {
          'Tower of Conquest': 20,
          Portal: 19,
        },
        Achievement: {
          98005120: 'Promote Constitution to Tier 15',
        },
        Effects: {
          'PHYS DEF': 140,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+1',
        },
      },
      {
        Step: 21,
        Power: 933,
        UpgradeTime: 3110400,
        Cost: {
          Copper: 5000000,
          Energy: 1000000,
          Darksteel: 1500000,
        },
        Building: {
          'Tower of Conquest': 21,
          Portal: 20,
        },
        Achievement: {
          98005121: 'Promote Constitution to Tier 16',
        },
        Effects: {
          'PHYS DEF': 150,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+1',
        },
      },
      {
        Step: 22,
        Power: 1018,
        UpgradeTime: 3240000,
        Cost: {
          Copper: 7500000,
          Energy: 1500000,
          Darksteel: 2250000,
        },
        Building: {
          'Tower of Conquest': 22,
          Portal: 21,
        },
        Achievement: {
          98005122: 'Promote Constitution to Tier 17',
        },
        Effects: {
          'PHYS DEF': 160,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+1',
        },
      },
      {
        Step: 23,
        Power: 1105,
        UpgradeTime: 3369600,
        Cost: {
          Copper: 10000000,
          Energy: 2000000,
          Darksteel: 3000000,
        },
        Building: {
          'Tower of Conquest': 23,
          Portal: 22,
        },
        Achievement: {
          98005123: 'Promote Constitution to Tier 18',
        },
        Effects: {
          'PHYS DEF': 170,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+1',
        },
      },
      {
        Step: 24,
        Power: 1193,
        UpgradeTime: 3499200,
        Cost: {
          Copper: 14000000,
          Energy: 2800000,
          Darksteel: 4200000,
        },
        Building: {
          'Tower of Conquest': 24,
          Portal: 23,
        },
        Achievement: {
          98005124: 'Promote Constitution to Tier 19',
        },
        Effects: {
          'PHYS DEF': 180,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+1',
        },
      },
      {
        Step: 25,
        Power: 1375,
        UpgradeTime: 3628800,
        Cost: {
          Copper: 21000000,
          Energy: 4200000,
          Darksteel: 6300000,
        },
        Building: {
          'Tower of Conquest': 25,
          Portal: 24,
        },
        Achievement: {
          98005125: 'Promote Constitution to Tier 20',
        },
        Effects: {
          'PHYS DEF': 190,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+1',
        },
      },
      {
        Step: 26,
        Power: 1569,
        UpgradeTime: 3952800,
        Cost: {
          Copper: 30000000,
          Energy: 9000000,
          Darksteel: 9000000,
        },
        Building: {
          'Tower of Conquest': 26,
          Portal: 25,
        },
        Achievement: {
          98005126: 'Promote Constitution to Tier 21',
        },
        Effects: {
          'PHYS DEF': 200,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+1',
        },
      },
      {
        Step: 27,
        Power: 1773,
        UpgradeTime: 4276800,
        Cost: {
          Copper: 42000000,
          Energy: 12600000,
          Darksteel: 12600000,
        },
        Building: {
          'Tower of Conquest': 27,
          Portal: 26,
        },
        Achievement: {
          98005127: 'Promote Constitution to Tier 22',
        },
        Effects: {
          'PHYS DEF': 210,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+1',
        },
      },
      {
        Step: 28,
        Power: 1970,
        UpgradeTime: 4600800,
        Cost: {
          Copper: 57000000,
          Energy: 17000000,
          Darksteel: 17000000,
        },
        Building: {
          'Tower of Conquest': 28,
          Portal: 27,
        },
        Achievement: {
          98005128: 'Promote Constitution to Tier 23',
        },
        Effects: {
          'PHYS DEF': 220,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+1',
        },
      },
      {
        Step: 29,
        Power: 2189,
        UpgradeTime: 4924800,
        Cost: {
          Copper: 76000000,
          Energy: 23000000,
          Darksteel: 23000000,
        },
        Building: {
          'Tower of Conquest': 29,
          Portal: 28,
        },
        Achievement: {
          98005129: 'Promote Constitution to Tier 24',
        },
        Effects: {
          'PHYS DEF': 230,
          'Max Number of Magic Square Tickets': '+1',
          'Max Number of Secret Peak Tickets': '+1',
        },
      },
    ],
  },
  'Training Sanctum': {
    BuildingId: 5000000,
    Steps: [
      {
        Step: 1,
        Power: 63,
        UpgradeTime: 3,
        Cost: {
          Copper: 4000,
        },
        Building: {},
        Achievement: {
          98006201: 'Promote Muscle Strength Manual to Tier 2',
        },
        Effects: {
          MP: 50,
          'Copper Gain Boost': '2.00%',
          'Energy Storage Limit Boost': 5000000,
          'PvP DMG Reduction': '1.00%',
        },
      },
      {
        Step: 2,
        Power: 81,
        UpgradeTime: 3,
        Cost: {
          Copper: 8000,
        },
        Building: {
          'Tower of Conquest': 2,
        },
        Achievement: {
          98006102: 'Collect Energy 30 times',
        },
        Effects: {
          MP: 100,
          'Copper Gain Boost': '4.00%',
          'Energy Storage Limit Boost': 5000000,
          'PvP DMG Reduction': '2.00%',
        },
      },
      {
        Step: 3,
        Power: 101,
        UpgradeTime: 150,
        Cost: {
          Copper: 12000,
        },
        Building: {
          'Tower of Conquest': 3,
        },
        Achievement: {
          98006103: 'Collect Energy 40 times',
        },
        Effects: {
          MP: 150,
          'Copper Gain Boost': '8.00%',
          'Energy Storage Limit Boost': 10000000,
          'PvP DMG Reduction': '3.00%',
        },
      },
      {
        Step: 4,
        Power: 123,
        UpgradeTime: 900,
        Cost: {
          Copper: 16000,
          Darksteel: 4800,
        },
        Building: {
          'Tower of Conquest': 4,
        },
        Achievement: {
          98006104: 'Collect Energy 110 times',
        },
        Effects: {
          MP: 200,
          'Copper Gain Boost': '10.00%',
          'Energy Storage Limit Boost': 10000000,
          'PvP DMG Reduction': '4.00%',
        },
      },
      {
        Step: 5,
        Power: 147,
        UpgradeTime: 1800,
        Cost: {
          Copper: 24000,
          Darksteel: 7200,
        },
        Building: {
          'Tower of Conquest': 5,
        },
        Achievement: {
          98006205: 'Promote Muscle Strength Manual to Tier 4 2x',
        },
        Effects: {
          MP: 250,
          'Copper Gain Boost': '12.00%',
          'Energy Storage Limit Boost': 15000000,
          'PvP DMG Reduction': '5.00%',
        },
      },
      {
        Step: 6,
        Power: 173,
        UpgradeTime: 5400,
        Cost: {
          Copper: 32000,
          Darksteel: 9600,
        },
        Building: {
          'Tower of Conquest': 6,
        },
        Achievement: {
          98006206: 'Promote Muscle Strength Manual to Tier 5',
        },
        Effects: {
          MP: 250,
          'Copper Gain Boost': '14.00%',
          'Energy Storage Limit Boost': 15000000,
          'PvP DMG Reduction': '5.00%',
        },
      },
      {
        Step: 7,
        Power: 201,
        UpgradeTime: 10800,
        Cost: {
          Copper: 48000,
          Darksteel: 14400,
        },
        Building: {
          'Tower of Conquest': 7,
        },
        Achievement: {
          98006307: 'Promote Nine Yin Manual to Tier 5 4x',
        },
        Effects: {
          MP: 300,
          'Copper Gain Boost': '16.00%',
          'Energy Storage Limit Boost': 20000000,
          'PvP DMG Reduction': '6.00%',
        },
      },
      {
        Step: 8,
        Power: 231,
        UpgradeTime: 18000,
        Cost: {
          Copper: 64000,
          Darksteel: 19200,
        },
        Building: {
          'Tower of Conquest': 8,
        },
        Achievement: {
          98006308: 'Promote Nine Yin Manual to Tier 6',
        },
        Effects: {
          MP: 300,
          'Copper Gain Boost': '18.00%',
          'Energy Storage Limit Boost': 20000000,
          'PvP DMG Reduction': '6.00%',
        },
      },
      {
        Step: 9,
        Power: 262,
        UpgradeTime: 54000,
        Cost: {
          Copper: 88000,
          Darksteel: 26400,
        },
        Building: {
          'Tower of Conquest': 9,
        },
        Achievement: {
          98006409: 'Promote Nine Yang Manual to Tier 6 5x',
        },
        Effects: {
          MP: 350,
          'Copper Gain Boost': '20.00%',
          'Energy Storage Limit Boost': 30000000,
          'PvP DMG Reduction': '7.00%',
        },
      },
      {
        Step: 10,
        Power: 296,
        UpgradeTime: 108000,
        Cost: {
          Copper: 120000,
          Darksteel: 36000,
        },
        Building: {
          'Tower of Conquest': 10,
        },
        Achievement: {
          98006210: 'Promote Muscle Strength Manual to Tier 6',
        },
        Effects: {
          MP: 350,
          'Copper Gain Boost': '22.00%',
          'Energy Storage Limit Boost': 30000000,
          'PvP DMG Reduction': '7.00%',
        },
      },
      {
        Step: 11,
        Power: 331,
        UpgradeTime: 216000,
        Cost: {
          Copper: 180000,
          Darksteel: 54000,
        },
        Building: {
          'Tower of Conquest': 11,
        },
        Achievement: {
          98006211: 'Promote Muscle Strength Manual to Tier 7',
        },
        Effects: {
          MP: 400,
          'Copper Gain Boost': '24.00%',
          'Energy Storage Limit Boost': 40000000,
          'PvP DMG Reduction': '8.00%',
        },
      },
      {
        Step: 12,
        Power: 369,
        UpgradeTime: 432000,
        Cost: {
          Copper: 240000,
          Darksteel: 72000,
        },
        Building: {
          'Tower of Conquest': 12,
        },
        Achievement: {
          98006312: 'Promote Nine Yin Manual to Tier 7',
        },
        Effects: {
          MP: 400,
          'Copper Gain Boost': '26.00%',
          'Energy Storage Limit Boost': 40000000,
          'PvP DMG Reduction': '8.00%',
        },
      },
      {
        Step: 13,
        Power: 405,
        UpgradeTime: 734400,
        Cost: {
          Copper: 300000,
          Darksteel: 90000,
        },
        Building: {
          'Tower of Conquest': 13,
        },
        Achievement: {
          98006313: 'Promote Nine Yin Manual to Tier 8',
        },
        Effects: {
          MP: 450,
          'Copper Gain Boost': '28.00%',
          'Energy Storage Limit Boost': 45000000,
          'PvP DMG Reduction': '9.00%',
        },
      },
      {
        Step: 14,
        Power: 438,
        UpgradeTime: 1101600,
        Cost: {
          Copper: 360000,
          Darksteel: 108000,
        },
        Building: {
          'Tower of Conquest': 14,
        },
        Achievement: {
          98006414: 'Promote Nine Yang Manual to Tier 8 2x',
        },
        Effects: {
          MP: 450,
          'Copper Gain Boost': '30.00%',
          'Energy Storage Limit Boost': 45000000,
          'PvP DMG Reduction': '9.00%',
        },
      },
      {
        Step: 15,
        Power: 472,
        UpgradeTime: 1555200,
        Cost: {
          Copper: 440000,
          Darksteel: 132000,
        },
        Building: {
          'Tower of Conquest': 15,
        },
        Achievement: {
          98006415: 'Promote Nine Yang Manual to Tier 9',
        },
        Effects: {
          MP: 500,
          'Copper Gain Boost': '32.00%',
          'Energy Storage Limit Boost': 50000000,
          'PvP DMG Reduction': '10.00%',
        },
      },
      {
        Step: 16,
        Power: 542,
        UpgradeTime: 1641600,
        Cost: {
          Copper: 975000,
          Darksteel: 292500,
        },
        Building: {
          'Tower of Conquest': 16,
        },
        Achievement: {
          98006504: 'Promote Violet Mist Art to Tier 2',
          98006604: 'Promote Northern Profound Art to Tier 2',
          98006704: 'Promote Toad Stance to Tier 2',
        },
        Effects: {
          MP: 500,
          'Copper Gain Boost': '34.00%',
          'Energy Storage Limit Boost': 50000000,
          'PvP DMG Reduction': '10.00%',
        },
      },
      {
        Step: 17,
        Power: 616,
        UpgradeTime: 1728000,
        Cost: {
          Copper: 1125000,
          Darksteel: 337500,
        },
        Building: {
          'Tower of Conquest': 17,
        },
        Achievement: {
          98006212: 'Promote Muscle Strength Manual to Tier 11 4x',
          98006317: 'Promote Nine Yin Manual to Tier 11 3x',
          98006417: 'Promote Nine Yang Manual to Tier 11 2x',
        },
        Effects: {
          MP: 550,
          'Copper Gain Boost': '36.00%',
          'Energy Storage Limit Boost': 55000000,
          'PvP DMG Reduction': '11.00%',
        },
      },
      {
        Step: 18,
        Power: 692,
        UpgradeTime: 1814400,
        Cost: {
          Copper: 2250000,
          Darksteel: 675000,
        },
        Building: {
          'Tower of Conquest': 18,
        },
        Achievement: {
          98006505: 'Promote Violet Mist Art to Tier 3',
          98006605: 'Promote Northern Profound Art to Tier 3',
          98006707: 'Promote Toad Stance to Tier 4 2x',
        },
        Effects: {
          MP: 600,
          'Copper Gain Boost': '38.00%',
          'Energy Storage Limit Boost': 55000000,
          'PvP DMG Reduction': '12.00%',
        },
      },
      {
        Step: 19,
        Power: 770,
        UpgradeTime: 1900800,
        Cost: {
          Copper: 3750000,
          Darksteel: 1125000,
        },
        Building: {
          'Tower of Conquest': 19,
        },
        Achievement: {
          98006213: 'Promote Muscle Strength Manual to Tier 12',
          98006318: 'Promote Nine Yin Manual to Tier 12',
          98006418: 'Promote Nine Yang Manual to Tier 13 2x',
        },
        Effects: {
          MP: 650,
          'Copper Gain Boost': '40.00%',
          'Energy Storage Limit Boost': 60000000,
          'PvP DMG Reduction': '13.00%',
        },
      },
      {
        Step: 20,
        Power: 851,
        UpgradeTime: 1987200,
        Cost: {
          Copper: 5625000,
          Darksteel: 1687500,
        },
        Building: {
          'Tower of Conquest': 20,
        },
        Achievement: {
          98006506: 'Promote Violet Mist Art to Tier 4',
          98006606: 'Promote Northern Profound Art to Tier 4',
          98006708: 'Promote Toad Stance to Tier 5',
        },
        Effects: {
          MP: 700,
          'Copper Gain Boost': '42.00%',
          'Energy Storage Limit Boost': 60000000,
          'PvP DMG Reduction': '14.00%',
        },
      },
      {
        Step: 21,
        Power: 933,
        UpgradeTime: 2073600,
        Cost: {
          Copper: 7500000,
          Darksteel: 2250000,
        },
        Building: {
          'Tower of Conquest': 21,
        },
        Achievement: {
          98006214: 'Promote Muscle Strength Manual to Tier 13',
          98006319: 'Promote Nine Yin Manual to Tier 14 2x',
          98006419: 'Promote Nine Yang Manual to Tier 14',
        },
        Effects: {
          MP: 750,
          'Copper Gain Boost': '44.00%',
          'Energy Storage Limit Boost': 65000000,
          'PvP DMG Reduction': '15.00%',
        },
      },
      {
        Step: 22,
        Power: 1018,
        UpgradeTime: 2160000,
        Cost: {
          Copper: 11250000,
          Darksteel: 3375000,
        },
        Building: {
          'Tower of Conquest': 22,
        },
        Achievement: {
          98006507: 'Promote Violet Mist Art to Tier 5',
          98006607: 'Promote Northern Profound Art to Tier 5',
          98006709: 'Promote Toad Stance to Tier 6',
        },
        Effects: {
          MP: 800,
          'Copper Gain Boost': '46.00%',
          'Energy Storage Limit Boost': 65000000,
          'PvP DMG Reduction': '16.00%',
        },
      },
      {
        Step: 23,
        Power: 1105,
        UpgradeTime: 2246400,
        Cost: {
          Copper: 15000000,
          Darksteel: 4500000,
        },
        Building: {
          'Tower of Conquest': 23,
        },
        Achievement: {
          98006215: 'Promote Muscle Strength Manual to Tier 14',
          98006320: 'Promote Nine Yin Manual to Tier 15',
          98006420: 'Promote Nine Yang Manual to Tier 15',
        },
        Effects: {
          MP: 850,
          'Copper Gain Boost': '48.00%',
          'Energy Storage Limit Boost': 70000000,
          'PvP DMG Reduction': '17.00%',
        },
      },
      {
        Step: 24,
        Power: 1193,
        UpgradeTime: 2332800,
        Cost: {
          Copper: 21000000,
          Darksteel: 6300000,
        },
        Building: {
          'Tower of Conquest': 24,
        },
        Achievement: {
          98006508: 'Promote Violet Mist Art to Tier 6',
          98006608: 'Promote Northern Profound Art to Tier 6',
          98006710: 'Promote Toad Stance to Tier 7',
        },
        Effects: {
          MP: 900,
          'Copper Gain Boost': '50.00%',
          'Energy Storage Limit Boost': 70000000,
          'PvP DMG Reduction': '18.00%',
        },
      },
      {
        Step: 25,
        Power: 1375,
        UpgradeTime: 2419200,
        Cost: {
          Copper: 31500000,
          Darksteel: 9450000,
        },
        Building: {
          'Tower of Conquest': 25,
        },
        Achievement: {
          98006216: 'Promote Muscle Strength Manual to Tier 15',
          98006321: 'Promote Nine Yin Manual to Tier 16',
          98006421: 'Promote Nine Yang Manual to Tier 16',
        },
        Effects: {
          MP: 950,
          'Copper Gain Boost': '52.00%',
          'Energy Storage Limit Boost': 75000000,
          'PvP DMG Reduction': '19.00%',
        },
      },
      {
        Step: 26,
        Power: 1569,
        UpgradeTime: 2635200,
        Cost: {
          Copper: 45000000,
          Darksteel: 13500000,
        },
        Building: {
          'Tower of Conquest': 26,
        },
        Achievement: {
          98006509: 'Promote Violet Mist Art to Tier 9 3x',
          98006609: 'Promote Northern Profound Art to Tier 9 3x',
          98006711: 'Promote Toad Stance to Tier 10 3x',
        },
        Effects: {
          MP: 1000,
          'Copper Gain Boost': '54.00%',
          'Energy Storage Limit Boost': 75000000,
          'PvP DMG Reduction': '20.00%',
        },
      },
      {
        Step: 27,
        Power: 1773,
        UpgradeTime: 2851200,
        Cost: {
          Copper: 63000000,
          Darksteel: 18900000,
        },
        Building: {
          'Tower of Conquest': 27,
        },
        Achievement: {
          98006217: 'Promote Muscle Strength Manual to Tier 17 2x',
          98006322: 'Promote Nine Yin Manual to Tier 18 2x',
          98006422: 'Promote Nine Yang Manual to Tier 18 2x',
        },
        Effects: {
          MP: 1050,
          'Copper Gain Boost': '56.00%',
          'Energy Storage Limit Boost': 80000000,
          'PvP DMG Reduction': '21.00%',
        },
      },
      {
        Step: 28,
        Power: 1970,
        UpgradeTime: 3067200,
        Cost: {
          Copper: 86000000,
          Darksteel: 26000000,
        },
        Building: {
          'Tower of Conquest': 28,
        },
        Achievement: {
          98006510: 'Promote Violet Mist Art to Tier 11 2x',
          98006610: 'Promote Northern Profound Art to Tier 11 2x',
          98006712: 'Promote Toad Stance to Tier 12 2x',
        },
        Effects: {
          MP: 1100,
          'Copper Gain Boost': '57.00%',
          'Energy Storage Limit Boost': 85000000,
          'PvP DMG Reduction': '22.00%',
        },
      },
      {
        Step: 29,
        Power: 2189,
        UpgradeTime: 3283200,
        Cost: {
          Copper: 114000000,
          Darksteel: 34000000,
        },
        Building: {
          'Tower of Conquest': 29,
        },
        Achievement: {
          98006218: 'Promote Muscle Strength Manual to Tier 19 2x',
          98006323: 'Promote Nine Yin Manual to Tier 20 2x',
          98006423: 'Promote Nine Yang Manual to Tier 20 2x',
        },
        Effects: {
          MP: 1150,
          'Copper Gain Boost': '58.00%',
          'Energy Storage Limit Boost': 90000000,
          'PvP DMG Reduction': '23.00%',
        },
      },
    ],
  },
  'Tower of Quintessence': {
    BuildingId: 6000000,
    Steps: [
      {
        Step: 1,
        Power: 125,
        UpgradeTime: 3,
        Cost: {
          Copper: 5000,
        },
        Building: {
          'Tower of Conquest': 1,
        },
        Achievement: {},
        Effects: {
          'Hunting EXP Boost': '5.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+1',
          'PvP ATK DMG Boost': '1.00%',
        },
      },
      {
        Step: 2,
        Power: 161,
        UpgradeTime: 3,
        Cost: {
          Copper: 10000,
        },
        Building: {
          'Tower of Conquest': 2,
        },
        Achievement: {
          98008102: 'Unseal 10x',
        },
        Effects: {
          'Hunting EXP Boost': '6.00%',
          'Magic Stone Slot Expansion': 'Magic Stone Slot 4',
          'Unsealed Slot Expansion': '+1',
          'PvP ATK DMG Boost': '2.00%',
        },
      },
      {
        Step: 3,
        Power: 201,
        UpgradeTime: 230,
        Cost: {
          Copper: 15000,
        },
        Building: {
          'Tower of Conquest': 3,
        },
        Achievement: {
          98008003: 'Ginkgo Valley Request 4x',
        },
        Effects: {
          'Hunting EXP Boost': '7.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+2',
          'PvP ATK DMG Boost': '3.00%',
        },
      },
      {
        Step: 4,
        Power: 245,
        UpgradeTime: 1350,
        Cost: {
          Copper: 20000,
          Darksteel: 6000,
          Energy: 4000,
        },
        Building: {
          'Tower of Conquest': 4,
        },
        Achievement: {
          98008104: 'Unseal 10x',
        },
        Effects: {
          'Hunting EXP Boost': '8.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+2',
          'PvP ATK DMG Boost': '4.00%',
        },
      },
      {
        Step: 5,
        Power: 293,
        UpgradeTime: 2700,
        Cost: {
          Copper: 30000,
          Darksteel: 9000,
          Energy: 6000,
        },
        Building: {
          'Tower of Conquest': 5,
        },
        Achievement: {
          98008005: 'Bicheon Castle Request 19x',
        },
        Effects: {
          'Hunting EXP Boost': '10.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+3',
          'PvP ATK DMG Boost': '5.00%',
        },
      },
      {
        Step: 6,
        Power: 346,
        UpgradeTime: 8100,
        Cost: {
          Copper: 40000,
          Darksteel: 12000,
          Energy: 8000,
        },
        Building: {
          'Tower of Conquest': 6,
          Forge: 5,
          Mine: 5,
        },
        Achievement: {
          98008106: 'Unseal 10x',
        },
        Effects: {
          'Hunting EXP Boost': '12.00%',
          'Magic Stone Slot Expansion': 'Magic Stone Slot 5',
          'Unsealed Slot Expansion': '+3',
          'PvP ATK DMG Boost': '5.00%',
        },
      },
      {
        Step: 7,
        Power: 402,
        UpgradeTime: 16200,
        Cost: {
          Copper: 60000,
          Darksteel: 18000,
          Energy: 12000,
        },
        Building: {
          'Tower of Conquest': 7,
          Forge: 6,
          Mine: 6,
        },
        Achievement: {
          98008007: 'Bicheon Town Request 14x',
        },
        Effects: {
          'Hunting EXP Boost': '14.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+4',
          'PvP ATK DMG Boost': '6.00%',
        },
      },
      {
        Step: 8,
        Power: 461,
        UpgradeTime: 27000,
        Cost: {
          Copper: 80000,
          Darksteel: 24000,
          Energy: 16000,
        },
        Building: {
          'Tower of Conquest': 8,
          Forge: 7,
          Mine: 7,
        },
        Achievement: {
          98008108: 'Unseal 20x',
        },
        Effects: {
          'Hunting EXP Boost': '16.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+4',
          'PvP ATK DMG Boost': '6.00%',
        },
      },
      {
        Step: 9,
        Power: 524,
        UpgradeTime: 81000,
        Cost: {
          Copper: 110000,
          Darksteel: 33000,
          Energy: 22000,
        },
        Building: {
          'Tower of Conquest': 9,
          Forge: 8,
          Mine: 8,
        },
        Achievement: {
          98008009: 'Snake Pit Request 14x',
        },
        Effects: {
          'Hunting EXP Boost': '18.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+5',
          'PvP ATK DMG Boost': '7.00%',
        },
      },
      {
        Step: 10,
        Power: 591,
        UpgradeTime: 162000,
        Cost: {
          Copper: 150000,
          Darksteel: 45000,
          Energy: 30000,
        },
        Building: {
          'Tower of Conquest': 10,
          Forge: 9,
          Mine: 9,
        },
        Achievement: {
          98008110: 'Unseal 40x',
        },
        Effects: {
          'Hunting EXP Boost': '20.00%',
          'Magic Stone Slot Expansion': 'Magic Stone Slot 6',
          'Unsealed Slot Expansion': '+5',
          'PvP ATK DMG Boost': '7.00%',
        },
      },
      {
        Step: 11,
        Power: 662,
        UpgradeTime: 324000,
        Cost: {
          Copper: 225000,
          Darksteel: 67500,
          Energy: 45000,
        },
        Building: {
          'Tower of Conquest': 11,
          Forge: 10,
          Mine: 10,
        },
        Achievement: {
          98001012: 'Reach Character Lv. 80',
          98008011: "Sinner's Shire Request 15x",
        },
        Effects: {
          'Hunting EXP Boost': '24.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+6',
          'PvP ATK DMG Boost': '8.00%',
        },
      },
      {
        Step: 12,
        Power: 738,
        UpgradeTime: 648000,
        Cost: {
          Copper: 300000,
          Darksteel: 90000,
          Energy: 60000,
        },
        Building: {
          'Tower of Conquest': 12,
          Forge: 11,
          Mine: 11,
        },
        Achievement: {
          98001013: 'Reach Character Lv. 85',
          98008112: 'Unseal 60x',
        },
        Effects: {
          'Hunting EXP Boost': '28.00%',
          'Magic Stone Slot Expansion': 'Spectrumite Slot 1',
          'Unsealed Slot Expansion': '+6',
          'PvP ATK DMG Boost': '8.00%',
        },
      },
      {
        Step: 13,
        Power: 809,
        UpgradeTime: 1101600,
        Cost: {
          Copper: 375000,
          Darksteel: 112500,
          Energy: 75000,
        },
        Building: {
          'Tower of Conquest': 13,
          Forge: 12,
          Mine: 12,
        },
        Achievement: {
          98001014: 'Reach Character Lv. 90',
          98008013: 'Seocheon Trading Post Request 9x',
        },
        Effects: {
          'Hunting EXP Boost': '30.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+7',
          'PvP ATK DMG Boost': '9.00%',
        },
      },
      {
        Step: 14,
        Power: 875,
        UpgradeTime: 1652400,
        Cost: {
          Copper: 450000,
          Darksteel: 135000,
          Energy: 90000,
        },
        Building: {
          'Tower of Conquest': 14,
          Forge: 13,
          Mine: 13,
        },
        Achievement: {
          98001015: 'Reach Character Lv. 95',
          98008014: 'Phantom Woods Request 16x',
          98008015: 'Spiritual Center Request 39x',
        },
        Effects: {
          'Hunting EXP Boost': '32.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+7',
          'PvP ATK DMG Boost': '9.00%',
        },
      },
      {
        Step: 15,
        Power: 943,
        UpgradeTime: 2332800,
        Cost: {
          Copper: 550000,
          Darksteel: 165000,
          Energy: 110000,
        },
        Building: {
          'Tower of Conquest': 15,
          Forge: 14,
          Mine: 14,
        },
        Achievement: {
          98001016: 'Reach Character Lv. 100',
          98008016: "Heaven's Way Peak Lower Level Request 2x",
          98008017: 'Redmoon Mountain Request 2x',
        },
        Effects: {
          'Hunting EXP Boost': '36.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+8',
          'PvP ATK DMG Boost': '10.00%',
        },
      },
      {
        Step: 16,
        Power: 1084,
        UpgradeTime: 2462400,
        Cost: {
          Copper: 650000,
          Darksteel: 195000,
          Energy: 130000,
        },
        Building: {
          'Tower of Conquest': 16,
          Forge: 15,
          Mine: 15,
        },
        Achievement: {
          98001017: 'Reach Character Lv. 105',
          98008018: 'Phantasia Desert Request 7x',
          98008019: 'Desert Road Request 2x',
        },
        Effects: {
          'Hunting EXP Boost': '40.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+8',
          'PvP ATK DMG Boost': '10.00%',
        },
      },
      {
        Step: 17,
        Power: 1231,
        UpgradeTime: 2592000,
        Cost: {
          Copper: 750000,
          Darksteel: 225000,
          Energy: 150000,
        },
        Building: {
          'Tower of Conquest': 17,
          Forge: 16,
          Mine: 16,
        },
        Achievement: {
          98001018: 'Reach Character Lv. 110',
          98008020: 'Sabuk Town Request 7x',
        },
        Effects: {
          'Hunting EXP Boost': '44.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+9',
          'PvP ATK DMG Boost': '11.00%',
        },
      },
      {
        Step: 18,
        Power: 1383,
        UpgradeTime: 2721600,
        Cost: {
          Copper: 1500000,
          Darksteel: 450000,
          Energy: 300000,
        },
        Building: {
          'Tower of Conquest': 18,
          Forge: 17,
          Mine: 17,
        },
        Achievement: {
          98001019: 'Reach Character Lv. 115',
          98008021: 'Phantasia Desert Request 3x',
          98008022: 'Sabuk Town Request 3x',
        },
        Effects: {
          'Hunting EXP Boost': '48.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+9',
          'PvP ATK DMG Boost': '12.00%',
        },
      },
      {
        Step: 19,
        Power: 1539,
        UpgradeTime: 2851200,
        Cost: {
          Copper: 2500000,
          Darksteel: 750000,
          Energy: 500000,
        },
        Building: {
          'Tower of Conquest': 19,
          Forge: 18,
          Mine: 18,
        },
        Achievement: {
          98001020: 'Reach Character Lv. 120',
          98008023: 'Sabuk Castle Request 19x',
        },
        Effects: {
          'Hunting EXP Boost': '52.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+10',
          'PvP ATK DMG Boost': '13.00%',
        },
      },
      {
        Step: 20,
        Power: 1701,
        UpgradeTime: 2980800,
        Cost: {
          Copper: 3750000,
          Darksteel: 1125000,
          Energy: 750000,
        },
        Building: {
          'Tower of Conquest': 20,
          Forge: 19,
          Mine: 19,
        },
        Achievement: {
          98008024: 'Sabuk Town Request 3x',
          98008025: 'Sabuk Castle Request 8x',
        },
        Effects: {
          'Hunting EXP Boost': '56.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+10',
          'PvP ATK DMG Boost': '14.00%',
        },
      },
      {
        Step: 21,
        Power: 1866,
        UpgradeTime: 3110400,
        Cost: {
          Copper: 5000000,
          Darksteel: 1500000,
          Energy: 1000000,
        },
        Building: {
          'Tower of Conquest': 21,
          Forge: 20,
          Mine: 20,
        },
        Achievement: {
          98008026: 'Gorge Cliff Path Request 8x',
        },
        Effects: {
          'Hunting EXP Boost': '60.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+11',
          'PvP ATK DMG Boost': '15.00%',
        },
      },
      {
        Step: 22,
        Power: 2035,
        UpgradeTime: 3240000,
        Cost: {
          Copper: 7500000,
          Darksteel: 2250000,
          Energy: 1500000,
        },
        Building: {
          'Tower of Conquest': 22,
          Forge: 21,
          Mine: 21,
        },
        Achievement: {
          98008027: "Complete Beggar's Request",
          98008028: 'Complete New Hobby 1',
          98008029: "Complete Guardian Soul's Request",
        },
        Effects: {
          'Hunting EXP Boost': '64.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+11',
          'PvP ATK DMG Boost': '16.00%',
        },
      },
      {
        Step: 23,
        Power: 2209,
        UpgradeTime: 3369600,
        Cost: {
          Copper: 10000000,
          Darksteel: 3000000,
          Energy: 2000000,
        },
        Building: {
          'Tower of Conquest': 23,
          Forge: 22,
          Mine: 22,
        },
        Achievement: {
          98008030: 'Complete Exemplar in Life',
          98008031: 'Nine Dragon Ice Field Requests 14x',
        },
        Effects: {
          'Hunting EXP Boost': '68.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+12',
          'PvP ATK DMG Boost': '17.00%',
        },
      },
      {
        Step: 24,
        Power: 2385,
        UpgradeTime: 3499200,
        Cost: {
          Copper: 14000000,
          Darksteel: 4200000,
          Energy: 2800000,
        },
        Building: {
          'Tower of Conquest': 24,
          Forge: 23,
          Mine: 23,
        },
        Achievement: {
          98008032: 'Mirage Ship Deck Request 11x',
        },
        Effects: {
          'Hunting EXP Boost': '72.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+12',
          'PvP ATK DMG Boost': '18.00%',
        },
      },
      {
        Step: 25,
        Power: 2750,
        UpgradeTime: 3628800,
        Cost: {
          Copper: 21000000,
          Darksteel: 6300000,
          Energy: 4200000,
        },
        Building: {
          'Tower of Conquest': 25,
          Forge: 24,
          Mine: 24,
        },
        Achievement: {
          98008033: 'Mirage Ship Inner Cabins Request 10x',
        },
        Effects: {
          'Hunting EXP Boost': '80.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+13',
          'PvP ATK DMG Boost': '19.00%',
        },
      },
      {
        Step: 26,
        Power: 3127,
        UpgradeTime: 3952800,
        Cost: {
          Copper: 30000000,
          Darksteel: 9000000,
          Energy: 9000000,
        },
        Building: {
          'Tower of Conquest': 26,
          Forge: 25,
          Mine: 25,
        },
        Achievement: {
          98008034: '[World 2] Seocheon Trading Post Request 7x',
          98008035: '[World 2] Redmoon Mountain Request 14x',
        },
        Effects: {
          'Hunting EXP Boost': '84.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+13',
          'PvP ATK DMG Boost': '20.00%',
        },
      },
      {
        Step: 27,
        Power: 3534,
        UpgradeTime: 4276800,
        Cost: {
          Copper: 42000000,
          Darksteel: 12600000,
          Energy: 12600000,
        },
        Building: {
          'Tower of Conquest': 27,
          Forge: 26,
          Mine: 26,
        },
        Achievement: {
          98008036: '[World 5] Nine Dragon Ice Field Request 20x',
        },
        Effects: {
          'Hunting EXP Boost': '88.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+14',
          'PvP ATK DMG Boost': '21.00%',
        },
      },
      {
        Step: 28,
        Power: 3927,
        UpgradeTime: 4600800,
        Cost: {
          Copper: 57000000,
          Darksteel: 17000000,
          Energy: 17000000,
        },
        Building: {
          'Tower of Conquest': 28,
          Forge: 27,
          Mine: 27,
        },
        Achievement: {
          98008037:
            'Complete a [Layer 1 World 1] Unseo Town request 4 times 4x',
          98008038:
            'Complete a [Layer 1 World 1] Seven Valleys Mountain request 9 times 9x',
        },
        Effects: {
          'Hunting EXP Boost': '92.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+14',
          'PvP ATK DMG Boost': '22.00%',
        },
      },
      {
        Step: 29,
        Power: 4364,
        UpgradeTime: 4924800,
        Cost: {
          Copper: 76000000,
          Darksteel: 23000000,
          Energy: 23000000,
        },
        Building: {
          'Tower of Conquest': 29,
          Forge: 28,
          Mine: 28,
        },
        Achievement: {
          98008039:
            'Complete a [Layer 1 World 2] Nine Dragon Ice Field request 14 times 14x',
        },
        Effects: {
          'Hunting EXP Boost': '96.00%',
          'Magic Stone Slot Expansion': '-',
          'Unsealed Slot Expansion': '+15',
          'PvP ATK DMG Boost': '23.00%',
        },
      },
    ],
  },
  'Tower of Victory': {
    BuildingId: 7000000,
    Steps: [
      {
        Step: 1,
        Power: 125,
        UpgradeTime: 3,
        Cost: {
          Copper: 1000,
        },
        Building: {},
        Achievement: {
          98004101: 'Clear Raid 1 times',
        },
        Effects: {
          'Spell DEF': 10,
          'Max Number of Raid Tickets': '+0',
          'Mystical Piece Slot Expansion': '+0',
        },
      },
      {
        Step: 2,
        Power: 161,
        UpgradeTime: 3,
        Cost: {
          Copper: 2000,
        },
        Building: {
          'Tower of Conquest': 2,
        },
        Achievement: {
          98004002: 'Clear Boss Raid 1 times',
        },
        Effects: {
          'Spell DEF': 20,
          'Max Number of Raid Tickets': '+0',
          'Mystical Piece Slot Expansion': '+0',
        },
      },
      {
        Step: 3,
        Power: 201,
        UpgradeTime: 230,
        Cost: {
          Copper: 3000,
        },
        Building: {
          'Tower of Conquest': 3,
        },
        Achievement: {
          98004103: 'Clear Raid 1 times',
          98004203: 'Complete 2 Codices',
        },
        Effects: {
          'Spell DEF': 30,
          'Max Number of Raid Tickets': '+0',
          'Mystical Piece Slot Expansion': '+0',
        },
      },
      {
        Step: 4,
        Power: 245,
        UpgradeTime: 1350,
        Cost: {
          Copper: 4000,
          Darksteel: 3600,
          Energy: 2400,
        },
        Building: {
          'Tower of Conquest': 4,
        },
        Achievement: {
          98004004: 'Clear Boss Raid 2 times',
        },
        Effects: {
          'Spell DEF': 40,
          'Max Number of Raid Tickets': '+0',
          'Mystical Piece Slot Expansion': '+0',
        },
      },
      {
        Step: 5,
        Power: 293,
        UpgradeTime: 2700,
        Cost: {
          Copper: 5000,
          Darksteel: 5400,
          Energy: 3600,
        },
        Building: {
          'Tower of Conquest': 5,
        },
        Achievement: {
          98004105: 'Clear Raid 2 times',
          98004205: 'Complete 2 Codices',
        },
        Effects: {
          'Spell DEF': 50,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+0',
        },
      },
      {
        Step: 6,
        Power: 346,
        UpgradeTime: 8100,
        Cost: {
          Copper: 6000,
          Darksteel: 7200,
          Energy: 4800,
        },
        Building: {
          'Tower of Conquest': 6,
        },
        Achievement: {
          98004006: 'Clear Boss Raid 6 times',
        },
        Effects: {
          'Spell DEF': 50,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+0',
        },
      },
      {
        Step: 7,
        Power: 402,
        UpgradeTime: 16200,
        Cost: {
          Copper: 7000,
          Darksteel: 10800,
          Energy: 7200,
        },
        Building: {
          'Tower of Conquest': 7,
        },
        Achievement: {
          98004107: 'Clear Raid 7 times',
          98004207: 'Complete 6 Codices',
        },
        Effects: {
          'Spell DEF': 60,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+1',
        },
      },
      {
        Step: 8,
        Power: 461,
        UpgradeTime: 27000,
        Cost: {
          Copper: 8000,
          Darksteel: 14400,
          Energy: 9600,
        },
        Building: {
          'Tower of Conquest': 8,
        },
        Achievement: {
          98004008: 'Clear Boss Raid 10 times',
        },
        Effects: {
          'Spell DEF': 60,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+1',
        },
      },
      {
        Step: 9,
        Power: 524,
        UpgradeTime: 81000,
        Cost: {
          Copper: 9000,
          Darksteel: 19800,
          Energy: 13200,
        },
        Building: {
          'Tower of Conquest': 9,
        },
        Achievement: {
          98004109: 'Clear Raid 15 times',
          98004209: 'Complete 20 Codices',
        },
        Effects: {
          'Spell DEF': 70,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+2',
        },
      },
      {
        Step: 10,
        Power: 591,
        UpgradeTime: 162000,
        Cost: {
          Copper: 10000,
          Darksteel: 27000,
          Energy: 18000,
        },
        Building: {
          'Tower of Conquest': 10,
        },
        Achievement: {
          98004010: 'Clear Boss Raid 13 times',
        },
        Effects: {
          'Spell DEF': 70,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+2',
        },
      },
      {
        Step: 11,
        Power: 662,
        UpgradeTime: 324000,
        Cost: {
          Copper: 11000,
          Darksteel: 40500,
          Energy: 27000,
        },
        Building: {
          'Tower of Conquest': 11,
        },
        Achievement: {
          98001012: 'Reach Character Lv. 80',
          98004111: 'Clear Raid 38 times',
          98004211: 'Complete 30 Codices',
        },
        Effects: {
          'Spell DEF': 80,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+3',
        },
      },
      {
        Step: 12,
        Power: 738,
        UpgradeTime: 648000,
        Cost: {
          Copper: 12000,
          Darksteel: 54000,
          Energy: 36000,
        },
        Building: {
          'Tower of Conquest': 12,
        },
        Achievement: {
          98001013: 'Reach Character Lv. 85',
          98004012: 'Clear Boss Raid 15 times',
        },
        Effects: {
          'Spell DEF': 80,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+3',
        },
      },
      {
        Step: 13,
        Power: 809,
        UpgradeTime: 1101600,
        Cost: {
          Copper: 13000,
          Darksteel: 67500,
          Energy: 45000,
        },
        Building: {
          'Tower of Conquest': 13,
        },
        Achievement: {
          98001014: 'Reach Character Lv. 90',
          98004113: 'Clear Raid 45 times',
          98004213: 'Complete 60 Codices',
        },
        Effects: {
          'Spell DEF': 90,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+4',
        },
      },
      {
        Step: 14,
        Power: 875,
        UpgradeTime: 1652400,
        Cost: {
          Copper: 14000,
          Darksteel: 81000,
          Energy: 54000,
        },
        Building: {
          'Tower of Conquest': 14,
        },
        Achievement: {
          98001015: 'Reach Character Lv. 95',
          98004014: 'Clear Boss Raid 20 times',
        },
        Effects: {
          'Spell DEF': 90,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+4',
        },
      },
      {
        Step: 15,
        Power: 943,
        UpgradeTime: 2332800,
        Cost: {
          Copper: 15000,
          Darksteel: 99000,
          Energy: 66000,
        },
        Building: {
          'Tower of Conquest': 15,
        },
        Achievement: {
          98001016: 'Reach Character Lv. 100',
          98004115: 'Clear Raid 60 times',
          98004215: 'Complete 30 Codices',
        },
        Effects: {
          'Spell DEF': 100,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+5',
        },
      },
      {
        Step: 16,
        Power: 1084,
        UpgradeTime: 2462400,
        Cost: {
          Copper: 650000,
          Darksteel: 195000,
          Energy: 130000,
        },
        Building: {
          'Tower of Conquest': 16,
        },
        Achievement: {
          98001017: 'Reach Character Lv. 105',
          98004015: 'Clear Boss Raid 25 times',
        },
        Effects: {
          'Spell DEF': 100,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+5',
        },
      },
      {
        Step: 17,
        Power: 1231,
        UpgradeTime: 2592000,
        Cost: {
          Copper: 750000,
          Darksteel: 225000,
          Energy: 150000,
        },
        Building: {
          'Tower of Conquest': 17,
        },
        Achievement: {
          98001018: 'Reach Character Lv. 110',
          98004117: 'Clear Raid 75 times',
          98004216: 'Complete 30 Codices',
        },
        Effects: {
          'Spell DEF': 110,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+6',
        },
      },
      {
        Step: 18,
        Power: 1383,
        UpgradeTime: 2721600,
        Cost: {
          Copper: 1500000,
          Darksteel: 450000,
          Energy: 300000,
        },
        Building: {
          'Tower of Conquest': 18,
          'Training Sanctum': 17,
          'Holy Shrine': 17,
        },
        Achievement: {
          98001019: 'Reach Character Lv. 115',
          98004016: 'Clear Boss Raid 25 times',
          98004118: 'Clear Raid 75 times',
        },
        Effects: {
          'Spell DEF': 120,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+6',
        },
      },
      {
        Step: 19,
        Power: 1539,
        UpgradeTime: 2851200,
        Cost: {
          Copper: 2500000,
          Darksteel: 750000,
          Energy: 500000,
        },
        Building: {
          'Tower of Conquest': 19,
          'Training Sanctum': 18,
          'Holy Shrine': 18,
        },
        Achievement: {
          98001020: 'Reach Character Lv. 120',
          98004017: 'Clear Boss Raid 30 times',
          98004119: 'Clear Raid 75 times',
        },
        Effects: {
          'Spell DEF': 130,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+7',
        },
      },
      {
        Step: 20,
        Power: 1701,
        UpgradeTime: 2980800,
        Cost: {
          Copper: 3750000,
          Darksteel: 1125000,
          Energy: 750000,
        },
        Building: {
          'Tower of Conquest': 20,
          'Training Sanctum': 19,
          'Holy Shrine': 19,
        },
        Achievement: {
          98004303: 'Boss Raid Deranged Hellbound Revenant 10x',
          98004401: 'Raid Hidden Altar 13x',
        },
        Effects: {
          'Spell DEF': 140,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+7',
        },
      },
      {
        Step: 21,
        Power: 1866,
        UpgradeTime: 3110400,
        Cost: {
          Copper: 5000000,
          Darksteel: 1500000,
          Energy: 1000000,
        },
        Building: {
          'Tower of Conquest': 21,
          'Training Sanctum': 20,
          'Holy Shrine': 20,
        },
        Achievement: {
          98004301: 'Boss Raid Ghostly Bogey 3x',
          98004402: 'Defeat Sabuk Execution Ground Hwangwoong 10x',
        },
        Effects: {
          'Spell DEF': 150,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+7',
        },
      },
      {
        Step: 22,
        Power: 2035,
        UpgradeTime: 3240000,
        Cost: {
          Copper: 7500000,
          Darksteel: 2250000,
          Energy: 1500000,
        },
        Building: {
          'Tower of Conquest': 22,
          'Training Sanctum': 21,
          'Holy Shrine': 21,
        },
        Achievement: {
          98004302: 'Boss Raid Claydoh GEN 5x',
          98004404: 'Hell Raid Triumphant Tiger Demon King 5x',
        },
        Effects: {
          'Spell DEF': 160,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+7',
        },
      },
      {
        Step: 23,
        Power: 2209,
        UpgradeTime: 3369600,
        Cost: {
          Copper: 10000000,
          Darksteel: 3000000,
          Energy: 2000000,
        },
        Building: {
          'Tower of Conquest': 23,
          'Training Sanctum': 22,
          'Holy Shrine': 22,
        },
        Achievement: {
          98004403: 'Raid Vipergeist Jail 13x',
          98004406: 'Hell Raid Inferno Chief 8x',
        },
        Effects: {
          'Spell DEF': 170,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+7',
        },
      },
      {
        Step: 24,
        Power: 2385,
        UpgradeTime: 3499200,
        Cost: {
          Copper: 14000000,
          Darksteel: 4200000,
          Energy: 2800000,
        },
        Building: {
          'Tower of Conquest': 24,
          'Training Sanctum': 23,
          'Holy Shrine': 23,
        },
        Achievement: {
          98004405: 'Boss Raid Heavenly Asura 8x',
          98004408: 'Hell Raid Blood-crazed Oddevil 10x',
        },
        Effects: {
          'Spell DEF': 180,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+7',
        },
      },
      {
        Step: 25,
        Power: 2750,
        UpgradeTime: 3628800,
        Cost: {
          Copper: 21000000,
          Darksteel: 6300000,
          Energy: 4200000,
        },
        Building: {
          'Tower of Conquest': 25,
          'Training Sanctum': 24,
          'Holy Shrine': 24,
        },
        Achievement: {
          98004409: 'Boss Raid Nefariox Celestial Overlord 8x',
        },
        Effects: {
          'Spell DEF': 190,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+7',
        },
      },
      {
        Step: 26,
        Power: 3127,
        UpgradeTime: 3952800,
        Cost: {
          Copper: 30000000,
          Darksteel: 9000000,
          Energy: 9000000,
        },
        Building: {
          'Tower of Conquest': 26,
          'Training Sanctum': 25,
          'Holy Shrine': 25,
        },
        Achievement: {
          98004410: 'Raid Void Demon Tempering Facility 18x',
        },
        Effects: {
          'Spell DEF': 200,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+7',
        },
      },
      {
        Step: 27,
        Power: 3534,
        UpgradeTime: 4276800,
        Cost: {
          Copper: 42000000,
          Darksteel: 12600000,
          Energy: 12600000,
        },
        Building: {
          'Tower of Conquest': 27,
          'Training Sanctum': 26,
          'Holy Shrine': 26,
        },
        Achievement: {
          98004411: 'Boss Raid Frothing Sagittarion 13x',
        },
        Effects: {
          'Spell DEF': 210,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+7',
        },
      },
      {
        Step: 28,
        Power: 3927,
        UpgradeTime: 4600800,
        Cost: {
          Copper: 57000000,
          Darksteel: 17000000,
          Energy: 17000000,
        },
        Building: {
          'Tower of Conquest': 28,
          'Training Sanctum': 27,
          'Holy Shrine': 27,
        },
        Achievement: {
          98004412: "[Raid] Ghost Honing Corps's Underbase 18x",
        },
        Effects: {
          'Spell DEF': 220,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+7',
        },
      },
      {
        Step: 29,
        Power: 4364,
        UpgradeTime: 4924800,
        Cost: {
          Copper: 76000000,
          Darksteel: 23000000,
          Energy: 23000000,
        },
        Building: {
          'Tower of Conquest': 29,
          'Training Sanctum': 28,
          'Holy Shrine': 28,
        },
        Achievement: {
          98004413: '[Raid] Shrine of Sanguine Flowers 25x',
        },
        Effects: {
          'Spell DEF': 230,
          'Max Number of Raid Tickets': '+1',
          'Mystical Piece Slot Expansion': '+7',
        },
      },
    ],
  },
  'Holy Shrine': {
    BuildingId: 8000000,
    Steps: [
      {
        Step: 1,
        Power: 125,
        UpgradeTime: 3,
        Cost: {
          Copper: 3500,
        },
        Building: {},
        Achievement: {},
        Effects: {
          'Character HP': 300,
          'Energy Gain Boost': 0,
          'Max number of Free EXP restores': '+0',
        },
      },
      {
        Step: 2,
        Power: 161,
        UpgradeTime: 3,
        Cost: {
          Copper: 7000,
        },
        Building: {
          'Tower of Conquest': 2,
        },
        Achievement: {
          98009002: 'Clan support 10x',
        },
        Effects: {
          'Character HP': 600,
          'Energy Gain Boost': '1.00%',
          'Max number of Free EXP restores': '+0',
        },
      },
      {
        Step: 3,
        Power: 201,
        UpgradeTime: 230,
        Cost: {
          Copper: 10500,
        },
        Building: {
          'Tower of Conquest': 3,
        },
        Achievement: {
          98009103: 'Clan cooperation 20x',
          98009203: 'Complete Nefariox Horn',
        },
        Effects: {
          'Character HP': 900,
          'Energy Gain Boost': '1.00%',
          'Max number of Free EXP restores': '+0',
        },
      },
      {
        Step: 4,
        Power: 245,
        UpgradeTime: 1350,
        Cost: {
          Copper: 14000,
          Darksteel: 4200,
        },
        Building: {
          'Tower of Conquest': 4,
        },
        Achievement: {
          98009004: 'Clan support 30x',
        },
        Effects: {
          'Character HP': 1200,
          'Energy Gain Boost': '2.00%',
          'Max number of Free EXP restores': '+0',
        },
      },
      {
        Step: 5,
        Power: 293,
        UpgradeTime: 2700,
        Cost: {
          Copper: 21000,
          Darksteel: 6300,
        },
        Building: {
          'Tower of Conquest': 5,
        },
        Achievement: {
          98009105: 'Clan cooperation 50x',
        },
        Effects: {
          'Character HP': 1500,
          'Energy Gain Boost': '2.00%',
          'Max number of Free EXP restores': '+0',
        },
      },
      {
        Step: 6,
        Power: 346,
        UpgradeTime: 8100,
        Cost: {
          Copper: 28000,
          Darksteel: 8400,
        },
        Building: {
          'Tower of Conquest': 6,
        },
        Achievement: {
          98009006: 'Clan support 60x',
          98009206: 'Complete Myriad Needle',
        },
        Effects: {
          'Character HP': 1500,
          'Energy Gain Boost': '3.00%',
          'Max number of Free EXP restores': '+0',
        },
      },
      {
        Step: 7,
        Power: 402,
        UpgradeTime: 16200,
        Cost: {
          Copper: 42000,
          Darksteel: 12600,
        },
        Building: {
          'Tower of Conquest': 7,
        },
        Achievement: {
          98009107: 'Clan cooperation 80x',
        },
        Effects: {
          'Character HP': 1800,
          'Energy Gain Boost': '3.00%',
          'Max number of Free EXP restores': '+0',
        },
      },
      {
        Step: 8,
        Power: 461,
        UpgradeTime: 27000,
        Cost: {
          Copper: 56000,
          Darksteel: 16800,
        },
        Building: {
          'Tower of Conquest': 8,
        },
        Achievement: {
          98009008: 'Clan support 140x',
        },
        Effects: {
          'Character HP': 1800,
          'Energy Gain Boost': '5.00%',
          'Max number of Free EXP restores': '+0',
        },
      },
      {
        Step: 9,
        Power: 524,
        UpgradeTime: 81000,
        Cost: {
          Copper: 77000,
          Darksteel: 23100,
        },
        Building: {
          'Tower of Conquest': 9,
        },
        Achievement: {
          98009109: 'Clan cooperation 180x',
          98009209: 'Complete A Noble Cause',
        },
        Effects: {
          'Character HP': 2100,
          'Energy Gain Boost': '5.00%',
          'Max number of Free EXP restores': '+0',
        },
      },
      {
        Step: 10,
        Power: 591,
        UpgradeTime: 162000,
        Cost: {
          Copper: 105000,
          Darksteel: 31500,
        },
        Building: {
          'Tower of Conquest': 10,
        },
        Achievement: {
          98009010: 'Clan support 230x',
        },
        Effects: {
          'Character HP': 2100,
          'Energy Gain Boost': '7.00%',
          'Max number of Free EXP restores': '+0',
        },
      },
      {
        Step: 11,
        Power: 662,
        UpgradeTime: 324000,
        Cost: {
          Copper: 157500,
          Darksteel: 47250,
        },
        Building: {
          'Tower of Conquest': 11,
        },
        Achievement: {
          98009111: 'Clan cooperation 200x',
        },
        Effects: {
          'Character HP': 2400,
          'Energy Gain Boost': '7.00%',
          'Max number of Free EXP restores': '+0',
        },
      },
      {
        Step: 12,
        Power: 738,
        UpgradeTime: 648000,
        Cost: {
          Copper: 210000,
          Darksteel: 63000,
        },
        Building: {
          'Tower of Conquest': 12,
        },
        Achievement: {
          98009012: 'Clan support 530x',
          98009212: "Complete Demonic Cult's Lost Tome",
        },
        Effects: {
          'Character HP': 2400,
          'Energy Gain Boost': '9.00%',
          'Max number of Free EXP restores': '+0',
        },
      },
      {
        Step: 13,
        Power: 809,
        UpgradeTime: 1101600,
        Cost: {
          Copper: 262500,
          Darksteel: 78750,
        },
        Building: {
          'Tower of Conquest': 13,
        },
        Achievement: {
          98009113: 'Clan cooperation 300x',
        },
        Effects: {
          'Character HP': 2700,
          'Energy Gain Boost': '9.00%',
          'Max number of Free EXP restores': '+1',
        },
      },
      {
        Step: 14,
        Power: 875,
        UpgradeTime: 1652400,
        Cost: {
          Copper: 315000,
          Darksteel: 94500,
        },
        Building: {
          'Tower of Conquest': 14,
        },
        Achievement: {
          98009014: 'Clan support 900x',
          98009214: 'Complete Incomparable Master',
        },
        Effects: {
          'Character HP': 2700,
          'Energy Gain Boost': '12.00%',
          'Max number of Free EXP restores': '+1',
        },
      },
      {
        Step: 15,
        Power: 943,
        UpgradeTime: 2332800,
        Cost: {
          Copper: 385000,
          Darksteel: 115500,
        },
        Building: {
          'Tower of Conquest': 15,
        },
        Achievement: {
          98009115: 'Clan cooperation 400x',
        },
        Effects: {
          'Character HP': 3000,
          'Energy Gain Boost': '12.00%',
          'Max number of Free EXP restores': '+2',
        },
      },
      {
        Step: 16,
        Power: 1084,
        UpgradeTime: 2462400,
        Cost: {
          Copper: 975000,
          Darksteel: 292500,
        },
        Building: {
          'Tower of Conquest': 16,
        },
        Achievement: {
          98009016: 'Clan support 500x',
        },
        Effects: {
          'Character HP': 3000,
          'Energy Gain Boost': '15.00%',
          'Max number of Free EXP restores': '+2',
        },
      },
      {
        Step: 17,
        Power: 1231,
        UpgradeTime: 2592000,
        Cost: {
          Copper: 1125000,
          Darksteel: 337500,
        },
        Building: {
          'Tower of Conquest': 17,
        },
        Achievement: {
          98009017: 'Clan support 1200x',
        },
        Effects: {
          'Character HP': 3300,
          'Energy Gain Boost': '15.00%',
          'Max number of Free EXP restores': '+3',
        },
      },
      {
        Step: 18,
        Power: 1383,
        UpgradeTime: 2721600,
        Cost: {
          Copper: 2250000,
          Darksteel: 675000,
        },
        Building: {
          'Tower of Conquest': 18,
        },
        Achievement: {
          98009018: 'Clan support 1500x',
          98009116: 'Clan cooperation 800x',
          98009215: 'Complete Wedding Vow',
        },
        Effects: {
          'Character HP': 3600,
          'Energy Gain Boost': '18.00%',
          'Max number of Free EXP restores': '+3',
        },
      },
      {
        Step: 19,
        Power: 1539,
        UpgradeTime: 2851200,
        Cost: {
          Copper: 3750000,
          Darksteel: 1125000,
        },
        Building: {
          'Tower of Conquest': 19,
        },
        Achievement: {
          98009019: 'Clan support 4900x',
          98009301: 'Solitude Training Profound Realm Stage 6 128x',
          98009600: 'Clan Expedition Azure Flame Emperor',
        },
        Effects: {
          'Character HP': 3900,
          'Energy Gain Boost': '18.00%',
          'Max number of Free EXP restores': '+4',
        },
      },
      {
        Step: 20,
        Power: 1701,
        UpgradeTime: 2980800,
        Cost: {
          Copper: 5625000,
          Darksteel: 1687500,
        },
        Building: {
          'Tower of Conquest': 20,
        },
        Achievement: {
          98009302: 'Solitude Training Profound Realm Stage 8 16x',
          98009601: 'Clan Expedition Azure Flame Emperor 3x',
        },
        Effects: {
          'Character HP': 4200,
          'Energy Gain Boost': '20.00%',
          'Max number of Free EXP restores': '+4',
        },
      },
      {
        Step: 21,
        Power: 1866,
        UpgradeTime: 3110400,
        Cost: {
          Copper: 7500000,
          Darksteel: 2250000,
        },
        Building: {
          'Tower of Conquest': 21,
        },
        Achievement: {
          98009303: 'Solitude Training Profound Realm Stage 10 16x',
          98009602: 'Clan Expedition Azure Flame Emperor 6x',
        },
        Effects: {
          'Character HP': 4500,
          'Energy Gain Boost': '20.00%',
          'Max number of Free EXP restores': '+5',
        },
      },
      {
        Step: 22,
        Power: 2035,
        UpgradeTime: 3240000,
        Cost: {
          Copper: 11250000,
          Darksteel: 3375000,
        },
        Building: {
          'Tower of Conquest': 22,
        },
        Achievement: {
          98009216: 'Complete All for Naught',
          98009304: 'Solitude Training Limbo Realm Stage 1 8x',
        },
        Effects: {
          'Character HP': 4800,
          'Energy Gain Boost': '20.00%',
          'Max number of Free EXP restores': '+5',
        },
      },
      {
        Step: 23,
        Power: 2209,
        UpgradeTime: 3369600,
        Cost: {
          Copper: 15000000,
          Darksteel: 4500000,
        },
        Building: {
          'Tower of Conquest': 23,
        },
        Achievement: {
          98009217: 'Complete Reckless Courage',
          98009305: 'Solitude Training Limbo Realm Stage 2 8x',
        },
        Effects: {
          'Character HP': 5100,
          'Energy Gain Boost': '20.00%',
          'Max number of Free EXP restores': '+5',
        },
      },
      {
        Step: 24,
        Power: 2385,
        UpgradeTime: 3499200,
        Cost: {
          Copper: 21000000,
          Darksteel: 6300000,
        },
        Building: {
          'Tower of Conquest': 24,
        },
        Achievement: {
          98009218: 'Complete Grieving the Death of a Friend',
          98009306: 'Solitude Training Limbo Realm Stage 6 32x',
        },
        Effects: {
          'Character HP': 5400,
          'Energy Gain Boost': '20.00%',
          'Max number of Free EXP restores': '+5',
        },
      },
      {
        Step: 25,
        Power: 2750,
        UpgradeTime: 3628800,
        Cost: {
          Copper: 31500000,
          Darksteel: 9450000,
        },
        Building: {
          'Tower of Conquest': 25,
        },
        Achievement: {
          98009307: 'Solitude Training Limbo Realm Stage 8 16x',
          98009603: 'Clan Expedition Soul-absorbing Demon Beast 3x',
        },
        Effects: {
          'Character HP': 5700,
          'Energy Gain Boost': '20.00%',
          'Max number of Free EXP restores': '+5',
        },
      },
      {
        Step: 26,
        Power: 3127,
        UpgradeTime: 3952800,
        Cost: {
          Copper: 45000000,
          Darksteel: 13500000,
        },
        Building: {
          'Tower of Conquest': 26,
        },
        Achievement: {
          98009308: 'Solitude Training God Realm Stage 1 24x',
          98009604: 'Clan Expedition Chakravarti Darkmaur 5x',
        },
        Effects: {
          'Character HP': 6000,
          'Energy Gain Boost': '20.00%',
          'Max number of Free EXP restores': '+5',
        },
      },
      {
        Step: 27,
        Power: 3534,
        UpgradeTime: 4276800,
        Cost: {
          Copper: 63000000,
          Darksteel: 18900000,
        },
        Building: {
          'Tower of Conquest': 27,
        },
        Achievement: {
          98009219: 'Complete Deep Resentments',
          98009309: 'Solitude Training God Realm Stage 5 32x',
        },
        Effects: {
          'Character HP': 6300,
          'Energy Gain Boost': '20.00%',
          'Max number of Free EXP restores': '+5',
        },
      },
      {
        Step: 28,
        Power: 3927,
        UpgradeTime: 4600800,
        Cost: {
          Copper: 86000000,
          Darksteel: 26000000,
        },
        Building: {
          'Tower of Conquest': 28,
        },
        Achievement: {
          98009310: 'Solitude Training God Realm Stage 6 8x',
          98009605: 'Complete Clan Expedition Ice Demon Deity MAJ 5 times 5x',
        },
        Effects: {
          'Character HP': 6600,
          'Energy Gain Boost': '20.00%',
          'Max number of Free EXP restores': '+5',
        },
      },
      {
        Step: 29,
        Power: 4364,
        UpgradeTime: 4924800,
        Cost: {
          Copper: 114000000,
          Darksteel: 34000000,
        },
        Building: {
          'Tower of Conquest': 29,
        },
        Achievement: {
          98009220: 'Complete the Overcorrection Mystery 1 time',
          98009311: 'Solitude Training God Realm Stage 7 8x',
        },
        Effects: {
          'Character HP': 6900,
          'Energy Gain Boost': '20.00%',
          'Max number of Free EXP restores': '+5',
        },
      },
    ],
  },
  Portal: {
    BuildingId: 9000000,
    Steps: [
      {
        Step: 1,
        Power: 63,
        UpgradeTime: 3,
        Cost: {
          Copper: 4500,
        },
        Building: {},
        Achievement: {
          98007201: 'Bicheon Labyrinth 1F Common Mission 15x',
        },
        Effects: {
          'PHYS ATK': 20,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 2,
        Power: 81,
        UpgradeTime: 3,
        Cost: {
          Copper: 9000,
        },
        Building: {
          'Tower of Conquest': 2,
        },
        Achievement: {
          98007202: 'Bicheon Labyrinth 2F Common Mission 15x',
        },
        Effects: {
          'PHYS ATK': 40,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 3,
        Power: 101,
        UpgradeTime: 150,
        Cost: {
          Copper: 13500,
        },
        Building: {
          'Tower of Conquest': 3,
          'Millennial Tree': 2,
          'Training Sanctum': 2,
        },
        Achievement: {
          98007003: 'Use Magic Square 1 time(s)',
          98007203: 'Bicheon Labyrinth 3F Common Mission 10x',
        },
        Effects: {
          'PHYS ATK': 60,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 4,
        Power: 123,
        UpgradeTime: 900,
        Cost: {
          Copper: 18000,
          Darksteel: 5400,
          Energy: 3600,
        },
        Building: {
          'Tower of Conquest': 4,
          'Millennial Tree': 3,
          'Training Sanctum': 3,
        },
        Achievement: {
          98007204: 'Demon Bull Labyrinth 1F Common Mission 16x',
          98007304: 'Combine Spirit Stones 1 times',
        },
        Effects: {
          'PHYS ATK': 80,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 5,
        Power: 147,
        UpgradeTime: 1800,
        Cost: {
          Copper: 27000,
          Darksteel: 8100,
          Energy: 5400,
        },
        Building: {
          'Tower of Conquest': 5,
          'Millennial Tree': 4,
          'Holy Shrine': 4,
        },
        Achievement: {
          98007105: 'Use Secret Peak 1 time(s)',
          98007205: 'Demon Bull Labyrinth 2F Common Mission 10x',
        },
        Effects: {
          'PHYS ATK': 100,
          'Unlock Spirit Slot': '4th Slot',
        },
      },
      {
        Step: 6,
        Power: 173,
        UpgradeTime: 5400,
        Cost: {
          Copper: 36000,
          Darksteel: 10800,
          Energy: 7200,
        },
        Building: {
          'Tower of Conquest': 6,
          'Millennial Tree': 5,
          'Training Sanctum': 5,
        },
        Achievement: {
          98007206: 'Demon Bull Labyrinth 3F Common Mission 10x',
          98007406: 'Obtain 10 Spirit Stones',
        },
        Effects: {
          'PHYS ATK': 120,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 7,
        Power: 201,
        UpgradeTime: 10800,
        Cost: {
          Copper: 54000,
          Darksteel: 16200,
          Energy: 10800,
        },
        Building: {
          'Tower of Conquest': 7,
          'Millennial Tree': 6,
          'Training Sanctum': 6,
        },
        Achievement: {
          98007007: 'Use Magic Square 5 time(s)',
          98007207: 'Snake Pit Labyrinth 1F Common Mission 11x',
        },
        Effects: {
          'PHYS ATK': 140,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 8,
        Power: 231,
        UpgradeTime: 18000,
        Cost: {
          Copper: 72000,
          Darksteel: 21600,
          Energy: 14400,
        },
        Building: {
          'Tower of Conquest': 8,
          'Training Sanctum': 7,
          'Holy Shrine': 7,
        },
        Achievement: {
          98007208: 'Snake Pit Labyrinth 2F Common Mission 10x',
          98007308: 'Combine Spirit Stones 19 times',
        },
        Effects: {
          'PHYS ATK': 160,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 9,
        Power: 262,
        UpgradeTime: 54000,
        Cost: {
          Copper: 99000,
          Darksteel: 29700,
          Energy: 19800,
        },
        Building: {
          'Tower of Conquest': 9,
          'Millennial Tree': 8,
          'Training Sanctum': 8,
        },
        Achievement: {
          98007109: 'Use Secret Peak 10 time(s)',
          98007209: 'Snake Pit Labyrinth 3F Common Mission 10x',
        },
        Effects: {
          'PHYS ATK': 180,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 10,
        Power: 296,
        UpgradeTime: 108000,
        Cost: {
          Copper: 135000,
          Darksteel: 40500,
          Energy: 27000,
        },
        Building: {
          'Tower of Conquest': 10,
          'Millennial Tree': 9,
          'Training Sanctum': 9,
        },
        Achievement: {
          98007210: 'Abandoned Mine Labyrinth 1F Common Mission 10x',
          98007410: 'Obtain 50 Spirit Stones',
        },
        Effects: {
          'PHYS ATK': 200,
          'Unlock Spirit Slot': '5th Slot',
        },
      },
      {
        Step: 11,
        Power: 331,
        UpgradeTime: 216000,
        Cost: {
          Copper: 202500,
          Darksteel: 60750,
          Energy: 40500,
        },
        Building: {
          'Tower of Conquest': 11,
          'Millennial Tree': 10,
          'Holy Shrine': 10,
        },
        Achievement: {
          98001012: 'Reach Character Lv. 80',
          98007011: 'Use Magic Square 20 time(s)',
          98007211: 'Abandoned Mine Labyrinth 2F Common Mission 10x',
        },
        Effects: {
          'PHYS ATK': 220,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 12,
        Power: 369,
        UpgradeTime: 432000,
        Cost: {
          Copper: 270000,
          Darksteel: 81000,
          Energy: 54000,
        },
        Building: {
          'Tower of Conquest': 12,
          'Millennial Tree': 11,
          'Training Sanctum': 11,
        },
        Achievement: {
          98001013: 'Reach Character Lv. 85',
          98007212: 'Abandoned Mine Labyrinth 3F Common Mission 10x',
          98007312: 'Combine Spirit Stones 30 times',
        },
        Effects: {
          'PHYS ATK': 240,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 13,
        Power: 405,
        UpgradeTime: 734400,
        Cost: {
          Copper: 337500,
          Darksteel: 101250,
          Energy: 67500,
        },
        Building: {
          'Tower of Conquest': 13,
          'Millennial Tree': 12,
          'Training Sanctum': 12,
        },
        Achievement: {
          98001014: 'Reach Character Lv. 90',
          98007113: 'Use Secret Peak 40 time(s)',
          98007213: "Heaven's Way Labyrinth 1F Common Mission 10x",
        },
        Effects: {
          'PHYS ATK': 260,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 14,
        Power: 438,
        UpgradeTime: 1101600,
        Cost: {
          Copper: 405000,
          Darksteel: 121500,
          Energy: 81000,
        },
        Building: {
          'Tower of Conquest': 14,
          'Training Sanctum': 13,
          'Holy Shrine': 13,
        },
        Achievement: {
          98001015: 'Reach Character Lv. 95',
          98007214: "Heaven's Way Labyrinth 2F Common Mission 10x",
          98007414: 'Obtain 240 Spirit Stones',
        },
        Effects: {
          'PHYS ATK': 280,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 15,
        Power: 472,
        UpgradeTime: 1555200,
        Cost: {
          Copper: 495000,
          Darksteel: 148500,
          Energy: 99000,
        },
        Building: {
          'Tower of Conquest': 15,
          'Millennial Tree': 14,
          'Training Sanctum': 14,
        },
        Achievement: {
          98001016: 'Reach Character Lv. 100',
          98007015: 'Use Magic Square 75 time(s)',
          98007215: "Heaven's Way Labyrinth 3F Common Mission 10x",
        },
        Effects: {
          'PHYS ATK': 300,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 16,
        Power: 542,
        UpgradeTime: 1641600,
        Cost: {
          Copper: 650000,
          Darksteel: 195000,
          Energy: 130000,
        },
        Building: {
          'Tower of Conquest': 16,
          'Millennial Tree': 15,
          'Training Sanctum': 15,
        },
        Achievement: {
          98001017: 'Reach Character Lv. 105',
          98007216: 'Phantasia Labyrinth 1F Common Mission 11x',
          98007217: 'Phantasia Labyrinth 2F Common Mission 11x',
        },
        Effects: {
          'PHYS ATK': 320,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 17,
        Power: 616,
        UpgradeTime: 1728000,
        Cost: {
          Copper: 750000,
          Darksteel: 225000,
          Energy: 150000,
        },
        Building: {
          'Tower of Conquest': 17,
          'Millennial Tree': 16,
          'Holy Shrine': 16,
        },
        Achievement: {
          98001018: 'Reach Character Lv. 110',
          98007218: 'Phantasia Labyrinth 3F Common Mission 11x',
          98007219: 'Phantasia Labyrinth 4F Common Mission 10x',
        },
        Effects: {
          'PHYS ATK': 340,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 18,
        Power: 692,
        UpgradeTime: 1814400,
        Cost: {
          Copper: 1500000,
          Darksteel: 450000,
          Energy: 300000,
        },
        Building: {
          'Tower of Conquest': 18,
        },
        Achievement: {
          98001019: 'Reach Character Lv. 115',
          98007220: 'Rockcut Labyrinth 1F Common Mission 11x',
          98007221: 'Rockcut Labyrinth 2F Common Mission 11x',
        },
        Effects: {
          'PHYS ATK': 360,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 19,
        Power: 770,
        UpgradeTime: 1900800,
        Cost: {
          Copper: 2500000,
          Darksteel: 750000,
          Energy: 500000,
        },
        Building: {
          'Tower of Conquest': 19,
        },
        Achievement: {
          98001020: 'Reach Character Lv. 120',
          98007222: 'Rockcut Labyrinth 3F Common Mission 11x',
          98007223: 'Rockcut Labyrinth 4F Common Mission 10x',
        },
        Effects: {
          'PHYS ATK': 380,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 20,
        Power: 851,
        UpgradeTime: 1987200,
        Cost: {
          Copper: 3750000,
          Darksteel: 1125000,
          Energy: 750000,
        },
        Building: {
          'Tower of Conquest': 20,
        },
        Achievement: {
          98007224: 'Sabuk Labyrinth 1F Common Mission 11x',
          98007225: 'Sabuk Labyrinth 2F Common Mission 11x',
        },
        Effects: {
          'PHYS ATK': 400,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 21,
        Power: 933,
        UpgradeTime: 2073600,
        Cost: {
          Copper: 5000000,
          Darksteel: 1500000,
          Energy: 1000000,
        },
        Building: {
          'Tower of Conquest': 21,
        },
        Achievement: {
          98007226: 'Sabuk Labyrinth 3F Common Mission 11x',
          98007227: 'Sabuk Labyrinth 4F Common Mission 10x',
        },
        Effects: {
          'PHYS ATK': 420,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 22,
        Power: 1018,
        UpgradeTime: 2160000,
        Cost: {
          Copper: 7500000,
          Darksteel: 2250000,
          Energy: 1500000,
        },
        Building: {
          'Tower of Conquest': 22,
        },
        Achievement: {
          98007228: 'Nine Dragon Labyrinth 1F Common Mission 10x',
          98007229: 'Nine Dragon Labyrinth 2F Common Mission 10x',
        },
        Effects: {
          'PHYS ATK': 440,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 23,
        Power: 1105,
        UpgradeTime: 2246400,
        Cost: {
          Copper: 10000000,
          Darksteel: 3000000,
          Energy: 2000000,
        },
        Building: {
          'Tower of Conquest': 23,
        },
        Achievement: {
          98007230: 'Nine Dragon Labyrinth 3F Common Mission 10x',
          98007231: 'Nine Dragon Labyrinth 4F Common Mission 9x',
        },
        Effects: {
          'PHYS ATK': 460,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 24,
        Power: 1193,
        UpgradeTime: 2332800,
        Cost: {
          Copper: 14000000,
          Darksteel: 4200000,
          Energy: 2800000,
        },
        Building: {
          'Tower of Conquest': 24,
        },
        Achievement: {
          98007501: '[Domination Server] Sabuk Town Request 9x',
          98007601: 'Reach White Tiger Mystique Stage 4 4x',
        },
        Effects: {
          'PHYS ATK': 480,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 25,
        Power: 1375,
        UpgradeTime: 2419200,
        Cost: {
          Copper: 21000000,
          Darksteel: 6300000,
          Energy: 4200000,
        },
        Building: {
          'Tower of Conquest': 25,
        },
        Achievement: {
          98007502: '[Domination Server] Sabuk Castle Request 18x',
          98007602: 'Reach White Tiger Mystique Stage 5 5x',
        },
        Effects: {
          'PHYS ATK': 500,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 26,
        Power: 1569,
        UpgradeTime: 2635200,
        Cost: {
          Copper: 30000000,
          Darksteel: 9000000,
          Energy: 9000000,
        },
        Building: {
          'Tower of Conquest': 26,
        },
        Achievement: {
          98007603: 'Reach White Tiger Mystique Stage 6 6x',
          98007701: '[World 2] Redmoon Mountain Common Mission 9x',
        },
        Effects: {
          'PHYS ATK': 520,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 27,
        Power: 1773,
        UpgradeTime: 2851200,
        Cost: {
          Copper: 42000000,
          Darksteel: 12600000,
          Energy: 12600000,
        },
        Building: {
          'Tower of Conquest': 27,
        },
        Achievement: {
          98007604: 'Reach White Tiger Mystique Stage 7 7x',
          98007702: '[World 5] Great Sabuk Wall Common Mission 9x',
        },
        Effects: {
          'PHYS ATK': 540,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 28,
        Power: 1970,
        UpgradeTime: 3067200,
        Cost: {
          Copper: 57000000,
          Darksteel: 17000000,
          Energy: 17000000,
        },
        Building: {
          'Tower of Conquest': 28,
        },
        Achievement: {
          98007605: 'Reach White Tiger Mystique Stage 8 8x',
          98007703:
            'Complete a [Layer 1 World 1] Unseo Town common mission 7 times 7x',
        },
        Effects: {
          'PHYS ATK': 560,
          'Unlock Spirit Slot': '-',
        },
      },
      {
        Step: 29,
        Power: 2189,
        UpgradeTime: 3283200,
        Cost: {
          Copper: 76000000,
          Darksteel: 23000000,
          Energy: 23000000,
        },
        Building: {
          'Tower of Conquest': 29,
        },
        Achievement: {
          98007606: 'Reach White Tiger Mystique Stage 9 9x',
          98007704:
            'Complete a [Layer 1 World 2] Celestial Blood Valley common mission 7 times 7x',
        },
        Effects: {
          'PHYS ATK': 580,
          'Unlock Spirit Slot': '-',
        },
      },
    ],
  },
  'Sanctuary of Hydra': {
    BuildingId: 10000000,
    Steps: [
      {
        Step: 1,
        Power: 21,
        UpgradeTime: 3,
        Cost: {
          Copper: 1000,
          Darksteel: 1000,
          Energy: 1000,
        },
        Building: {
          Portal: 7,
        },
        Achievement: {
          98001009: 'Reach Character Lv. 60',
          98009209: 'Complete A Noble Cause',
        },
        Effects: {
          'Daily Septaria Gain': 1,
          Accuracy: 2,
          EVA: 2,
        },
      },
      {
        Step: 2,
        Power: 27,
        UpgradeTime: 18000,
        Cost: {
          Copper: 72000,
          Darksteel: 57600,
          Energy: 14400,
        },
        Building: {
          'Tower of Conquest': 8,
          Mine: 8,
          Portal: 8,
        },
        Achievement: {
          98011101: "Complete Cryptic Stone's Whereabouts 1",
        },
        Effects: {
          'Daily Septaria Gain': 2,
          Accuracy: 4,
          EVA: 4,
        },
      },
      {
        Step: 3,
        Power: 34,
        UpgradeTime: 54000,
        Cost: {
          Copper: 99000,
          Darksteel: 79200,
          Energy: 19800,
        },
        Building: {
          'Tower of Conquest': 9,
          Mine: 9,
          Portal: 9,
        },
        Achievement: {
          98011201: 'Complete Hydrakin 1',
        },
        Effects: {
          'Daily Septaria Gain': 5,
          Accuracy: 6,
          EVA: 6,
        },
      },
      {
        Step: 4,
        Power: 41,
        UpgradeTime: 108000,
        Cost: {
          Copper: 135000,
          Darksteel: 108000,
          Energy: 27000,
        },
        Building: {
          'Tower of Conquest': 10,
          Mine: 10,
          Portal: 10,
        },
        Achievement: {
          98011301: "Complete Cryptic Stone's Whereabouts 2",
        },
        Effects: {
          'Daily Septaria Gain': 6,
          Accuracy: 8,
          EVA: 8,
        },
      },
      {
        Step: 5,
        Power: 49,
        UpgradeTime: 216000,
        Cost: {
          Copper: 202500,
          Darksteel: 162000,
          Energy: 40500,
        },
        Building: {
          'Tower of Conquest': 11,
          Mine: 11,
          Portal: 11,
        },
        Achievement: {
          98009212: "Complete Demonic Cult's Lost Tome",
          98011401: "Complete Cryptic Stone's Whereabouts 3",
        },
        Effects: {
          'Daily Septaria Gain': 7,
          Accuracy: 10,
          EVA: 10,
        },
      },
      {
        Step: 6,
        Power: 58,
        UpgradeTime: 432000,
        Cost: {
          Copper: 270000,
          Darksteel: 216000,
          Energy: 54000,
        },
        Building: {
          'Tower of Conquest': 12,
          Mine: 12,
          Portal: 12,
        },
        Achievement: {
          98011501: 'Complete Hydrakin 2',
        },
        Effects: {
          'Daily Septaria Gain': 10,
          Accuracy: 12,
          EVA: 12,
        },
      },
      {
        Step: 7,
        Power: 67,
        UpgradeTime: 734400,
        Cost: {
          Copper: 337500,
          Darksteel: 270000,
          Energy: 67500,
        },
        Building: {
          'Tower of Conquest': 13,
          Mine: 13,
          Portal: 13,
        },
        Achievement: {
          98011001: 'Defeat Bullface Fiend Beast Tamer at Magic Square 5F',
          98011002: 'Defeat Immortal Ogre at Magic Square 5F',
        },
        Effects: {
          'Daily Septaria Gain': 11,
          Accuracy: 14,
          EVA: 14,
        },
      },
      {
        Step: 8,
        Power: 77,
        UpgradeTime: 1101600,
        Cost: {
          Copper: 405000,
          Darksteel: 324000,
          Energy: 81000,
        },
        Building: {
          'Tower of Conquest': 14,
          Mine: 14,
          Portal: 14,
        },
        Achievement: {
          98011003: 'Defeat Red Armor Gorefiend at Secret Peak 5F',
          98011004: 'Defeat Bloody Yeticlops at Secret Peak 5F',
        },
        Effects: {
          'Daily Septaria Gain': 12,
          Accuracy: 16,
          EVA: 16,
        },
      },
      {
        Step: 9,
        Power: 87,
        UpgradeTime: 1555200,
        Cost: {
          Copper: 495000,
          Darksteel: 396000,
          Energy: 99000,
        },
        Building: {
          'Tower of Conquest': 15,
          Mine: 15,
          Portal: 15,
        },
        Achievement: {
          98009214: 'Complete Incomparable Master',
          98011601: 'Complete Hydrakin 3',
        },
        Effects: {
          'Daily Septaria Gain': 15,
          Accuracy: 18,
          EVA: 18,
        },
      },
      {
        Step: 10,
        Power: 99,
        UpgradeTime: 1641600,
        Cost: {
          Copper: 650000,
          Darksteel: 520000,
          Energy: 130000,
        },
        Building: {
          'Tower of Conquest': 16,
          Mine: 16,
          Portal: 16,
        },
        Achievement: {
          98011005: 'Defeat Nefariox King Maggun at Magic Square 6F',
          98011006: 'Defeat Nefariox Lord at Magic Square 6F',
          98011701: 'Complete Orders From Above',
        },
        Effects: {
          'Daily Septaria Gain': 16,
          Accuracy: 20,
          EVA: 20,
        },
      },
      {
        Step: 11,
        Power: 110,
        UpgradeTime: 1728000,
        Cost: {
          Copper: 750000,
          Darksteel: 600000,
          Energy: 150000,
        },
        Building: {
          'Tower of Conquest': 17,
          Mine: 17,
          Portal: 17,
        },
        Achievement: {
          98009215: 'Complete Wedding Vow',
          98011007: 'Defeat Unyielding Dusk Armado at Secret Peak 6F',
          98011008: 'Defeat Beastial Gorefiend Squasher at Secret Peak 6F',
        },
        Effects: {
          'Daily Septaria Gain': 17,
          Accuracy: 22,
          EVA: 22,
        },
      },
      {
        Step: 12,
        Power: 123,
        UpgradeTime: 1814400,
        Cost: {
          Copper: 1500000,
          Darksteel: 1200000,
          Energy: 300000,
        },
        Building: {
          'Tower of Conquest': 18,
          Mine: 18,
          Portal: 18,
        },
        Achievement: {
          98011801: 'Complete Hydra of the Abyss',
        },
        Effects: {
          'Daily Septaria Gain': 20,
          Accuracy: 24,
          EVA: 24,
        },
      },
      {
        Step: 13,
        Power: 135,
        UpgradeTime: 1900800,
        Cost: {
          Copper: 2500000,
          Darksteel: 2000000,
          Energy: 500000,
        },
        Building: {
          'Tower of Conquest': 19,
          Mine: 19,
          Portal: 19,
        },
        Achievement: {
          98011901: 'Complete Weaken the Hydrakin 2',
        },
        Effects: {
          'Daily Septaria Gain': 25,
          Accuracy: 28,
          EVA: 28,
        },
      },
    ],
  },
}

export default ConquestTowersData
