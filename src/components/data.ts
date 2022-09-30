
const teams = [
  {
    name: 'JDG',
    region: 'LPL',
    group: 'B',
    color: 'rgb(218, 232, 252, 0.9)'
  },
  {
    name: 'TES',
    region: 'LPL',
    group: 'C',
  },
  {
    name: 'EDG',
    region: 'LPL',
    group: 'A',
  },
  {
    name: 'GEN.G',
    region: 'LCK',
    group: 'D',
  },
  {
    name: 'T1',
    region: 'LCK',
    group: 'C',
  },
  {
    name: 'DWG',
    region: 'LCK',
    group: 'B',
  },
  {
    name: 'ROG',
    region: 'LEC',
    group: 'A',
  },
  {
    name: 'G2',
    region: 'LEC',
    group: 'B',
  },
  {
    name: 'C9',
    region: 'LCS',
    group: 'A',
  },
  {
    name: '100T',
    region: 'LCS',
    group: 'D',
  },
  {
    name: 'CFO',
    region: 'PCS',
    group: 'D',
  },
  {
    name: 'MES',
    region: 'VCS',
    group: 'C',
  },
  {
    name: 'RNG',
    region: 'LPL'
  },
  {
    name: 'DRX',
    region: 'LCK'
  },
  {
    name: 'FNC',
    region: 'LEC'
  },
  {
    name: 'MAD',
    region: 'LEC'
  },
  {
    name: 'BYG',
    region: 'PCS'
  },
  {
    name: 'EG',
    region: 'LCS'
  },
  {
    name: 'SBG',
    region: 'VCS'
  },
  {
    name: 'DNG',
    region: 'LJL'
  },
  {
    name: 'CHF',
    region: 'LCO'
  },
  {
    name: 'IW',
    region: 'TCL'
  },
  {
    name: 'ISG',
    region: 'LLA'
  },
  {
    name: 'LLL',
    region: 'CBLOL'
  }
]


export const teamList = teams.map((team, index) => (
  {
    x: 60 + 120 * Math.floor(index / 12),
    y: 30 + (index % 12) * 40,
    type: 'team-node',
    text: team.name,
    properties: {
      region: team.region
    }
  }
));


export const groupData = {
  nodes: [
    {
      id: 'groupA_1',
      x: 400,
      y: 40,
      type: 'team-node',
      text: 'C9',
      properties: {
        region: 'LCS',
      }
    },
    {
      id: 'groupA_2',
      x: 400,
      y: 80,
      type: 'team-node',
      text: 'T1',
      properties: {
        region: 'LCK',
      }
    },
    {
      id: 'groupA_3',
      x: 400,
      y: 120,
      type: 'team-node',
      text: 'EDG',
      properties: {
        region: 'LPL',
      }
    },
    {
      id: 'groupA_4',
      x: 400,
      y: 160,
      type: 'team-node',
      text: 'TBD',
    },

    {
      id: 'groupB_1',
      x: 400,
      y: 220,
      type: 'team-node',
      text: 'JDG',
      properties: {
        region: 'LPL',
      }
    },
    {
      id: 'groupB_2',
      x: 400,
      y: 260,
      type: 'team-node',
      text: 'G2',
      properties: {
        region: 'LEC',
      }
    },
    {
      id: 'groupB_3',
      x: 400,
      y: 300,
      type: 'team-node',
      text: 'DWG',
      properties: {
        region: 'LCK',
      }
    },
    {
      id: 'groupB_4',
      x: 400,
      y: 340,
      type: 'team-node',
      text: 'TBD',
    },

    {
      id: 'groupC_1',
      x: 400,
      y: 400,
      type: 'team-node',
      text: 'ROG',
      properties: {
        region: 'LEC',
      }
    },
    {
      id: 'groupC_2',
      x: 400,
      y: 440,
      type: 'team-node',
      text: 'TES',
      properties: {
        region: 'LPL',
      }
    },
    {
      id: 'groupC_3',
      x: 400,
      y: 480,
      type: 'team-node',
      text: 'MES',
      properties: {
        region: 'VCS',
      }
    },
    {
      id: 'groupC_4',
      x: 400,
      y: 520,
      type: 'team-node',
      text: 'TBD',
    },

    {
      id: 'groupD_1',
      x: 400,
      y: 580,
      type: 'team-node',
      text: 'GEN.G',
      properties: {
        region: 'LCK',
      }
    },
    {
      id: 'groupD_2',
      x: 400,
      y: 620,
      type: 'team-node',
      text: 'CFO',
      properties: {
        region: 'PCS',
      }
    },
    {
      id: 'groupD_3',
      x: 400,
      y: 660,
      type: 'team-node',
      text: '100T',
      properties: {
        region: 'LCS',
      }
    },
    {
      id: 'groupD_4',
      x: 400,
      y: 700,
      type: 'team-node',
      text: 'TBD',
    },
    // 8强
    {
      id: 'groupA1_1',
      x: 600,
      y: 100,
      type: 'team-node',
      text: 'TBD',
    },
    {
      id: 'groupA1_2',
      x: 600,
      y: 160,
      type: 'team-node',
      text: 'TBD',
    },

    {
      id: 'groupB1_1',
      x: 600,
      y: 280,
      type: 'team-node',
      text: 'TBD',
    },
    {
      id: 'groupB1_2',
      x: 600,
      y: 340,
      type: 'team-node',
      text: 'TBD',
    },

    {
      id: 'groupC1_1',
      x: 600,
      y: 460,
      type: 'team-node',
      text: 'TBD',
    },
    {
      id: 'groupC1_2',
      x: 600,
      y: 520,
      type: 'team-node',
      text: 'TBD',
    },

    {
      id: 'groupD1_1',
      x: 600,
      y: 640,
      type: 'team-node',
      text: 'TBD',
    },
    {
      id: 'groupD1_2',
      x: 600,
      y: 700,
      type: 'team-node',
      text: 'TBD',
    },
    // 四强
    {
      id: 'groupA2_1',
      x: 800,
      y: 200,
      type: 'team-node',
      text: 'TBD',
    },
    {
      id: 'groupA2_2',
      x: 800,
      y: 260,
      type: 'team-node',
      text: 'TBD',
    },
    {
      id: 'groupA2_3',
      x: 800,
      y: 500,
      type: 'team-node',
      text: 'TBD',
    },
    {
      id: 'groupA2_4',
      x: 800,
      y: 560,
      type: 'team-node',
      text: 'TBD',
    },
    // 决赛
    {
      id: 'groupA3_3',
      x: 1000,
      y: 340,
      type: 'team-node',
      text: 'TBD',
    },
    {
      id: 'groupA3_4',
      x: 1000,
      y: 400,
      type: 'team-node',
      text: 'TBD',
    },
    // 冠军
    {
      id: 'groupA4_1',
      x: 1200,
      y: 370,
      type: 'team-node',
      text: 'TBD',
    },
    // 队伍
    ...teamList
  ],
  edges: [
    {
      "type": "better-line",
      "sourceNodeId": "groupA_1",
      "targetNodeId": "groupA1_1",
      "startPoint": {
        "x": 450,
        "y": 40
      },
      "endPoint": {
        "x": 550,
        "y": 100
      },
      "pointsList": [
        {
          "x": 450,
          "y": 40
        },
        {
          "x": 500,
          "y": 40
        },
        {
          "x": 500,
          "y": 100
        },
        {
          "x": 550,
          "y": 100
        }
      ]
    },
    {
      "type": "better-line",
      "sourceNodeId": "groupA_2",
      "targetNodeId": "groupA1_1",
      "startPoint": {
        "x": 450,
        "y": 80
      },
      "endPoint": {
        "x": 550,
        "y": 100
      },
      "pointsList": [
        {
          "x": 450,
          "y": 80
        },
        {
          "x": 500,
          "y": 80
        },
        {
          "x": 500,
          "y": 100
        },
        {
          "x": 550,
          "y": 100
        }
      ]
    },
    {
      "type": "better-line",
      "sourceNodeId": "groupA_3",
      "targetNodeId": "groupA1_1",
      "startPoint": {
        "x": 450,
        "y": 120
      },
      "endPoint": {
        "x": 550,
        "y": 100
      },
      "properties": {},
      "pointsList": [
        {
          "x": 450,
          "y": 120
        },
        {
          "x": 500,
          "y": 120
        },
        {
          "x": 500,
          "y": 100
        },
        {
          "x": 550,
          "y": 100
        }
      ]
    },
    {
      "type": "better-line",
      "sourceNodeId": "groupA_4",
      "targetNodeId": "groupA1_1",
      "startPoint": {
        "x": 450,
        "y": 160
      },
      "endPoint": {
        "x": 550,
        "y": 100
      },
      "pointsList": [
        {
          "x": 450,
          "y": 160
        },
        {
          "x": 500,
          "y": 160
        },
        {
          "x": 500,
          "y": 100
        },
        {
          "x": 550,
          "y": 100
        }
      ]
    },
    {
      "type": "better-line",
      "sourceNodeId": "groupB_1",
      "targetNodeId": "groupB1_1",
      "startPoint": {
        "x": 450,
        "y": 220
      },
      "endPoint": {
        "x": 550,
        "y": 280
      },
      "properties": {},
      "pointsList": [
        {
          "x": 450,
          "y": 220
        },
        {
          "x": 500,
          "y": 220
        },
        {
          "x": 500,
          "y": 280
        },
        {
          "x": 550,
          "y": 280
        }
      ]
    },
    {
      "type": "better-line",
      "sourceNodeId": "groupB_2",
      "targetNodeId": "groupB1_1",
      "startPoint": {
        "x": 450,
        "y": 260
      },
      "endPoint": {
        "x": 550,
        "y": 280
      },
      "pointsList": [
        {
          "x": 450,
          "y": 260
        },
        {
          "x": 500,
          "y": 260
        },
        {
          "x": 500,
          "y": 280
        },
        {
          "x": 550,
          "y": 280
        }
      ]
    },
    {
      "type": "better-line",
      "sourceNodeId": "groupB_3",
      "targetNodeId": "groupB1_1",
      "startPoint": {
        "x": 450,
        "y": 300
      },
      "endPoint": {
        "x": 550,
        "y": 280
      },
      "pointsList": [
        {
          "x": 450,
          "y": 300
        },
        {
          "x": 500,
          "y": 300
        },
        {
          "x": 500,
          "y": 280
        },
        {
          "x": 550,
          "y": 280
        }
      ]
    },
    {
      "type": "better-line",
      "sourceNodeId": "groupB_4",
      "targetNodeId": "groupB1_1",
      "startPoint": {
        "x": 450,
        "y": 340
      },
      "endPoint": {
        "x": 550,
        "y": 280
      },
      "pointsList": [
        {
          "x": 450,
          "y": 340
        },
        {
          "x": 500,
          "y": 340
        },
        {
          "x": 500,
          "y": 280
        },
        {
          "x": 550,
          "y": 280
        }
      ]
    },
    {
      "type": "better-line",
      "sourceNodeId": "groupC_1",
      "targetNodeId": "groupC1_1",
      "startPoint": {
        "x": 450,
        "y": 400
      },
      "endPoint": {
        "x": 550,
        "y": 460
      },
      "properties": {},
      "pointsList": [
        {
          "x": 450,
          "y": 400
        },
        {
          "x": 500,
          "y": 400
        },
        {
          "x": 500,
          "y": 460
        },
        {
          "x": 550,
          "y": 460
        }
      ]
    },
    {
      "type": "better-line",
      "sourceNodeId": "groupC_2",
      "targetNodeId": "groupC1_1",
      "startPoint": {
        "x": 450,
        "y": 440
      },
      "endPoint": {
        "x": 550,
        "y": 460
      },
      "pointsList": [
        {
          "x": 450,
          "y": 440
        },
        {
          "x": 500,
          "y": 440
        },
        {
          "x": 500,
          "y": 460
        },
        {
          "x": 550,
          "y": 460
        }
      ]
    },
    {
      "type": "better-line",
      "sourceNodeId": "groupC_3",
      "targetNodeId": "groupC1_1",
      "startPoint": {
        "x": 450,
        "y": 480
      },
      "endPoint": {
        "x": 550,
        "y": 460
      },
      "properties": {},
      "pointsList": [
        {
          "x": 450,
          "y": 480
        },
        {
          "x": 500,
          "y": 480
        },
        {
          "x": 500,
          "y": 460
        },
        {
          "x": 550,
          "y": 460
        }
      ]
    },
    {
      "type": "better-line",
      "sourceNodeId": "groupC_4",
      "targetNodeId": "groupC1_1",
      "startPoint": {
        "x": 450,
        "y": 520
      },
      "endPoint": {
        "x": 550,
        "y": 460
      },
      "properties": {},
      "pointsList": [
        {
          "x": 450,
          "y": 520
        },
        {
          "x": 500,
          "y": 520
        },
        {
          "x": 500,
          "y": 460
        },
        {
          "x": 550,
          "y": 460
        }
      ]
    },
    {
      "id": "5230b0ec-5271-4fa7-955e-f00bbf4b5939",
      "type": "better-line",
      "sourceNodeId": "groupD_1",
      "targetNodeId": "groupD1_1",
      "startPoint": {
        "x": 450,
        "y": 580
      },
      "endPoint": {
        "x": 550,
        "y": 640
      },
      "properties": {},
      "pointsList": [
        {
          "x": 450,
          "y": 580
        },
        {
          "x": 500,
          "y": 580
        },
        {
          "x": 500,
          "y": 640
        },
        {
          "x": 550,
          "y": 640
        }
      ]
    },
    {
      "id": "9e9397d8-a86a-46cd-a4f5-afdaeabb27c7",
      "type": "better-line",
      "sourceNodeId": "groupD_2",
      "targetNodeId": "groupD1_1",
      "startPoint": {
        "x": 450,
        "y": 620
      },
      "endPoint": {
        "x": 550,
        "y": 640
      },
      "properties": {},
      "pointsList": [
        {
          "x": 450,
          "y": 620
        },
        {
          "x": 500,
          "y": 620
        },
        {
          "x": 500,
          "y": 640
        },
        {
          "x": 550,
          "y": 640
        }
      ]
    },
    {
      "id": "1d4f8e12-edf3-4bf3-b30e-6fcc11515193",
      "type": "better-line",
      "sourceNodeId": "groupD_3",
      "targetNodeId": "groupD1_1",
      "startPoint": {
        "x": 450,
        "y": 660
      },
      "endPoint": {
        "x": 550,
        "y": 640
      },
      "properties": {},
      "pointsList": [
        {
          "x": 450,
          "y": 660
        },
        {
          "x": 500,
          "y": 660
        },
        {
          "x": 500,
          "y": 640
        },
        {
          "x": 550,
          "y": 640
        }
      ]
    },
    {
      "id": "89547de0-25a1-4ce1-9f63-e388306e0a1b",
      "type": "better-line",
      "sourceNodeId": "groupD_4",
      "targetNodeId": "groupD1_1",
      "startPoint": {
        "x": 450,
        "y": 700
      },
      "endPoint": {
        "x": 550,
        "y": 640
      },
      "properties": {},
      "pointsList": [
        {
          "x": 450,
          "y": 700
        },
        {
          "x": 500,
          "y": 700
        },
        {
          "x": 500,
          "y": 640
        },
        {
          "x": 550,
          "y": 640
        }
      ]
    },
    {
      "id": "5a42d095-8efb-4af8-963c-53abbc85ce8a",
      "type": "better-line",
      "sourceNodeId": "groupD1_1",
      "targetNodeId": "groupA2_4",
      "startPoint": {
        "x": 650,
        "y": 640
      },
      "endPoint": {
        "x": 750,
        "y": 560
      },
      "properties": {},
      "pointsList": [
        {
          "x": 650,
          "y": 640
        },
        {
          "x": 700,
          "y": 640
        },
        {
          "x": 700,
          "y": 560
        },
        {
          "x": 750,
          "y": 560
        }
      ]
    },
    {
      "id": "af3b3eb4-5c4f-4b7f-a687-3a125ac6751d",
      "type": "better-line",
      "sourceNodeId": "groupD1_2",
      "targetNodeId": "groupA2_4",
      "startPoint": {
        "x": 650,
        "y": 700
      },
      "endPoint": {
        "x": 750,
        "y": 560
      },
      "properties": {},
      "pointsList": [
        {
          "x": 650,
          "y": 700
        },
        {
          "x": 700,
          "y": 700
        },
        {
          "x": 700,
          "y": 560
        },
        {
          "x": 750,
          "y": 560
        }
      ]
    },
    {
      "id": "aa7152ca-75a2-4e91-96d9-2d0509292386",
      "type": "better-line",
      "sourceNodeId": "groupC1_2",
      "targetNodeId": "groupA2_3",
      "startPoint": {
        "x": 650,
        "y": 520
      },
      "endPoint": {
        "x": 750,
        "y": 500
      },
      "properties": {},
      "pointsList": [
        {
          "x": 650,
          "y": 520
        },
        {
          "x": 700,
          "y": 520
        },
        {
          "x": 700,
          "y": 500
        },
        {
          "x": 750,
          "y": 500
        }
      ]
    },
    {
      "id": "31fd67a9-a5de-4549-810c-22c1e4c75883",
      "type": "better-line",
      "sourceNodeId": "groupC1_1",
      "targetNodeId": "groupA2_3",
      "startPoint": {
        "x": 650,
        "y": 460
      },
      "endPoint": {
        "x": 750,
        "y": 500
      },
      "properties": {},
      "pointsList": [
        {
          "x": 650,
          "y": 460
        },
        {
          "x": 700,
          "y": 460
        },
        {
          "x": 700,
          "y": 500
        },
        {
          "x": 750,
          "y": 500
        }
      ]
    },
    {
      "id": "0c6a5dd9-2ac1-4642-adea-0459761468cf",
      "type": "better-line",
      "sourceNodeId": "groupB1_2",
      "targetNodeId": "groupA2_2",
      "startPoint": {
        "x": 650,
        "y": 340
      },
      "endPoint": {
        "x": 750,
        "y": 260
      },
      "properties": {},
      "pointsList": [
        {
          "x": 650,
          "y": 340
        },
        {
          "x": 700,
          "y": 340
        },
        {
          "x": 700,
          "y": 260
        },
        {
          "x": 750,
          "y": 260
        }
      ]
    },
    {
      "id": "82a269d8-633a-423c-bab0-a27ddec7b51e",
      "type": "better-line",
      "sourceNodeId": "groupB1_1",
      "targetNodeId": "groupA2_2",
      "startPoint": {
        "x": 650,
        "y": 280
      },
      "endPoint": {
        "x": 750,
        "y": 260
      },
      "properties": {},
      "pointsList": [
        {
          "x": 650,
          "y": 280
        },
        {
          "x": 700,
          "y": 280
        },
        {
          "x": 700,
          "y": 260
        },
        {
          "x": 750,
          "y": 260
        }
      ]
    },
    {
      "id": "af8d820b-8631-4c71-855d-e4bb9111b396",
      "type": "better-line",
      "sourceNodeId": "groupA1_2",
      "targetNodeId": "groupA2_1",
      "startPoint": {
        "x": 650,
        "y": 160
      },
      "endPoint": {
        "x": 750,
        "y": 200
      },
      "properties": {},
      "pointsList": [
        {
          "x": 650,
          "y": 160
        },
        {
          "x": 700,
          "y": 160
        },
        {
          "x": 700,
          "y": 200
        },
        {
          "x": 750,
          "y": 200
        }
      ]
    },
    {
      "id": "d74636ae-5e3f-4663-bc63-576ad14a57e0",
      "type": "better-line",
      "sourceNodeId": "groupA1_1",
      "targetNodeId": "groupA2_1",
      "startPoint": {
        "x": 650,
        "y": 100
      },
      "endPoint": {
        "x": 750,
        "y": 200
      },
      "properties": {},
      "pointsList": [
        {
          "x": 650,
          "y": 100
        },
        {
          "x": 700,
          "y": 100
        },
        {
          "x": 700,
          "y": 200
        },
        {
          "x": 750,
          "y": 200
        }
      ]
    },
    {
      "id": "aefc154a-ceae-4c7a-bc86-de1df47abb1e",
      "type": "better-line",
      "sourceNodeId": "groupA2_2",
      "targetNodeId": "groupA3_3",
      "startPoint": {
        "x": 850,
        "y": 260
      },
      "endPoint": {
        "x": 950,
        "y": 340
      },
      "properties": {},
      "pointsList": [
        {
          "x": 850,
          "y": 260
        },
        {
          "x": 900,
          "y": 260
        },
        {
          "x": 900,
          "y": 340
        },
        {
          "x": 950,
          "y": 340
        }
      ]
    },
    {
      "id": "915b79d0-5a4f-4b6b-a0f4-25c6696e1e4f",
      "type": "better-line",
      "sourceNodeId": "groupA2_1",
      "targetNodeId": "groupA3_3",
      "startPoint": {
        "x": 850,
        "y": 200
      },
      "endPoint": {
        "x": 950,
        "y": 340
      },
      "properties": {},
      "pointsList": [
        {
          "x": 850,
          "y": 200
        },
        {
          "x": 900,
          "y": 200
        },
        {
          "x": 900,
          "y": 340
        },
        {
          "x": 950,
          "y": 340
        }
      ]
    },
    {
      "id": "60a2a390-1ec0-4364-a4ba-a7d0e7210ea4",
      "type": "better-line",
      "sourceNodeId": "groupA2_3",
      "targetNodeId": "groupA3_4",
      "startPoint": {
        "x": 850,
        "y": 500
      },
      "endPoint": {
        "x": 950,
        "y": 400
      },
      "properties": {},
      "pointsList": [
        {
          "x": 850,
          "y": 500
        },
        {
          "x": 900,
          "y": 500
        },
        {
          "x": 900,
          "y": 400
        },
        {
          "x": 950,
          "y": 400
        }
      ]
    },
    {
      "id": "14e527af-7dff-49a9-ba50-90cd225b033d",
      "type": "better-line",
      "sourceNodeId": "groupA2_4",
      "targetNodeId": "groupA3_4",
      "startPoint": {
        "x": 850,
        "y": 560
      },
      "endPoint": {
        "x": 950,
        "y": 400
      },
      "properties": {},
      "pointsList": [
        {
          "x": 850,
          "y": 560
        },
        {
          "x": 900,
          "y": 560
        },
        {
          "x": 900,
          "y": 400
        },
        {
          "x": 950,
          "y": 400
        }
      ]
    },
    {
      "id": "5828896a-f80d-4995-b3b7-fa21be4e82cf",
      "type": "better-line",
      "sourceNodeId": "groupA3_3",
      "targetNodeId": "groupA4_1",
      "startPoint": {
        "x": 1050,
        "y": 340
      },
      "endPoint": {
        "x": 1150,
        "y": 370
      },
      "properties": {},
      "pointsList": [
        {
          "x": 1050,
          "y": 340
        },
        {
          "x": 1100,
          "y": 340
        },
        {
          "x": 1100,
          "y": 370
        },
        {
          "x": 1150,
          "y": 370
        }
      ]
    },
    {
      "id": "a9198a4d-5e85-4478-80fd-ad4f379be275",
      "type": "better-line",
      "sourceNodeId": "groupA3_4",
      "targetNodeId": "groupA4_1",
      "startPoint": {
        "x": 1050,
        "y": 400
      },
      "endPoint": {
        "x": 1150,
        "y": 370
      },
      "properties": {},
      "pointsList": [
        {
          "x": 1050,
          "y": 400
        },
        {
          "x": 1100,
          "y": 400
        },
        {
          "x": 1100,
          "y": 370
        },
        {
          "x": 1150,
          "y": 370
        }
      ]
    }
  ]
}

