export const allSounds = {
    bountySounds: {
        soundBankTitle: "Bounty Rune Spawned",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('bounty-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('bounty.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },

    neutralSounds: {
        soundBankTitle: "New Neutral Items Spawned",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('neutrals-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('neutral.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
    aghsShardSounds: {
        soundBankTitle: "Aghanim's Shard Available",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('aghanim-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('aghanim.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
    roshanMaybeSounds: {
        soundBankTitle: "Earliest Roshan Spawn Time",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('roshanMaybe-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('roshanMaybe.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
    roshanDefinitelySounds: {
        soundBankTitle: "Latest Roshan Spawn Time",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('roshanDefinitely-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('roshanDefinitely.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}    
        ]
    },
    lastHitSounds: {
        soundBankTitle: "Last Hit Goal",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('cs-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('cs.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
    itemSounds: {
        soundBankTitle: "Item Goal",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('item-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('item.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
    powerRuneSounds: {
        soundBankTitle: "Power Rune Spawned",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('powerRunes-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('bounty.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
    siegeWaveSounds: {
        soundBankTitle: "Siege Creep has spawned",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('siege-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('bounty.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
    stackTimeSounds: {
        soundBankTitle: "Time to stack",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('stack-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('bounty.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },

    outpostSounds: {
        soundBankTitle: "Outpost Time",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('outpost-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('bounty.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
    tomeSounds: {
        soundBankTitle: "Tome is ready",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('tome-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('bounty.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },

    aegisSounds: {
        soundBankTitle: "Aegis has expired",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('aegis-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('bounty.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
}

export const pullSounds = {
    direSafeLaneSmallCampPull: {
        soundBankTitle: "Dire SafeLane Small Camp Pull",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('smallAt15-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('bounty.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
    direSafeLaneSmallCampPullB: {
        soundBankTitle: "Dire SafeLane Small Camp Pull B",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('smallAt45-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('bounty.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
    direSafeLaneMediumCampPull: {
        soundBankTitle: "Dire SafeLane Medium Camp Pull",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('mediumAt26-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('bounty.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
    direSafeLaneMediumCampPullB: {
        soundBankTitle: "Dire SafeLane Medium Camp Pull B",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('mediumAt56-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('bounty.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
    direOffLaneMediumCampPull: {
        soundBankTitle: "Dire OffLane Medium Camp Pull",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('mediumAt1719-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('bounty.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
    direOffLaneMediumCampPullB: {
        soundBankTitle: "Dire OffLane Medium Camp Pull B",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('mediumAt4749-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('bounty.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
    RadiantSafeLaneMediumCampPull: {
        soundBankTitle: "Radiant SafeLane Medium Camp Pull",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('mediumAt26-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('bounty.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
    RadiantSafeLaneMediumCampPullB: {
        soundBankTitle: "Radiant SafeLane Medium Camp Pull B",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('mediumAt56-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('bounty.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
    RadiantSafeLaneSmallCampPull: {
        soundBankTitle: "Radiant SafeLane Small Camp Pull",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('smallAt15-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('bounty.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
    RadiantSafeLaneSmallCampPullB: {
        soundBankTitle: "Radiant SafeLane Small Camp Pull B",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('smallAt45-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('bounty.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
    RadiantOffLaneMediumCampPull: {
        soundBankTitle: "Radiant OffLane Medium Camp Pull",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('mediumAt19-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('bounty.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    },
    RadiantOffLaneMediumCampPullB: {
        soundBankTitle: "Radiant OffLane Medium Camp Pull B",
        enabled: true,
        sounds: [
            { name: 'Robot', sound: new Audio('mediumAt49-tts.mp3'), selected: true},
            { name: 'Spoken Word', sound: new Audio('bounty.mp3'), selected: false},
            { name: 'Generic', sound: new Audio('generic.mp3'), selected: false}
        ]
    }
}

export const allPullSoundBanks = [
    pullSounds.RadiantOffLaneMediumCampPull, 
    pullSounds.RadiantOffLaneMediumCampPullB, 
    pullSounds.RadiantSafeLaneMediumCampPull,
     pullSounds.RadiantSafeLaneMediumCampPullB, 
     pullSounds.RadiantSafeLaneSmallCampPull, 
     pullSounds.RadiantSafeLaneSmallCampPullB, 
     pullSounds.direOffLaneMediumCampPull, 
     pullSounds.direOffLaneMediumCampPullB, 
     pullSounds.direSafeLaneMediumCampPull, 
     pullSounds.direSafeLaneMediumCampPullB,
     pullSounds.direSafeLaneSmallCampPull, 
     pullSounds.direSafeLaneSmallCampPullB
]

export type SoundBankName = 
"Bounty Rune Spawned" 
| "New Neutral Items Spawned" 
| "Aghanim's Shard Available" 
| "Earliest Roshan Spawn Time" 
| "Latest Roshan Spawn Time" 
| "Last Hit Goal"
| "Item Goal"
| "Power Rune Spawned"
| "Siege Creep has spawned"
| "Time to stack"
| "Time to pull"
| "Outpost Time"
| "Tome is ready"
| "Aegis has expired"
| "Dire SafeLane Small Camp Pull"
| "Dire SafeLane Small Camp Pull B"
| "Dire SafeLane Medium Camp Pull"
| "Dire SafeLane Medium Camp Pull B"
| "Dire OffLane Medium Camp Pull"
| "Dire OffLane Medium Camp Pull B"
| "Radiant SafeLane Medium Camp Pull"
| "Radiant SafeLane Medium Camp Pull B"
| "Radiant SafeLane Small Camp Pull"
| "Radiant SafeLane Small Camp Pull B"
| "Radiant OffLane Medium Camp Pull"
| "Radiant OffLane Medium Camp Pull B"

export type allSoundsKeys = keyof typeof allSounds

export const allSoundBanks = [
    allSounds.aghsShardSounds, 
    allSounds.bountySounds, 
    allSounds.itemSounds, 
    allSounds.lastHitSounds, 
    allSounds.neutralSounds, 
    allSounds.roshanDefinitelySounds, 
    allSounds.roshanMaybeSounds, 
    allSounds.powerRuneSounds, 
    allSounds.siegeWaveSounds,
    allSounds.stackTimeSounds,
    allSounds.outpostSounds,
    allSounds.tomeSounds,
    allSounds.aegisSounds
]