import { Feed } from 'Feed'
import { GoalCustomization } from 'GoalCustomization'
import { Lane, SoundType, Team } from 'Interfaces'
import React, { useState } from 'react'
import { RoleCustomization } from 'RoleCustomization'
import { AegisTimer } from 'RoshTimer'
import { SoundBankName } from './AllSounds'
import './App.scss'
import { Customization } from './Customization'
import { initialAppState } from './InitialAppState'
import { neutralLabelDictionary } from './NeutralLabelDictionary'
import { Timer } from './Timer'

//TO IMPLEMENT
//FEED

//SOUND QUEUING
//ROSH COUNT
//INTERCEPT ENEMY PULLS
//ROLE PRESETS
//SAVABLE CONFIG
//SAVE STATE ON BROWSER CLOSE
//TTS LIBRARY

export const App = () => {

    const [state, setState] = useState(initialAppState)

    const isBountyRuneTime = (time: number) => (time / 60) % 5 === 0
    const isSiegeCreepTime = (time: number) => (time / 60) % 5 === 0
    const isAghsShardTime = (time: number) => time === 1200
    const isNeutralItemTime = (time: number) => neutralLabelDictionary[time] !== undefined
    const isPowerRuneTime = (time: number) => (time > 0 && (time / 60) % 2 === 0)
    const isTomeTime = (time: number) => (time > 0 && (time / 60) % 10 === 0)
    const isOutpostTime = (time: number) => (time > 0 && (time / 60) % 10 === 0)
    const isStackTime = (time: number) => (time > 60) && (time - (Math.floor(time / 60)) * 60) === 45
    const isRoshanEarliestTime = (time: number) => state.roshan.isDead && state.roshan.timeOfDeath! + 480 === time
    const isRoshanLatestTime = (time: number) => state.roshan.isDead && state.roshan.timeOfDeath! + 660 === time
    const aegisHasExpired = (time: number) => state.roshan.isDead && state.roshan.timeOfDeath! + 300 === time
    const isItemTime = (time: number) => state.itemGoals.filter(g => g.time === time).length > 0
    const isLastHitGoalTime = (time: number) => state.lastHitGoals.filter(g => g.time === time).length > 0

    function addNotification(notificationHeading: string, subtext: string) {
        const newNotification = {notificationHeading: notificationHeading, subtext: subtext, time: state.time}
        setState(state => ({...state, notificationFeed: [...state.notificationFeed, newNotification]}))
    }

    function tick() {

        const newTime = state.time + 1

        if (newTime > 60 && newTime < 720) {

            if (state.team === "Radiant" && state.lane === "SafeLane") {

                if ((newTime - (Math.floor(newTime / 60)) * 60) === (26 - 15)) {
                    playSoundBankSoundIfEnabled("Radiant SafeLane Medium Camp Pull", SoundType.PullSound)
                    addNotification("Pull Medium Camp", "Pull at 26 seconds.")
                }

                if ((newTime - (Math.floor(newTime / 60)) * 60) === (56 - 15)) {
                    playSoundBankSoundIfEnabled("Radiant SafeLane Medium Camp Pull B", SoundType.PullSound)
                    addNotification("Pull Medium Camp", "Pull at 56 seconds.")
                }

                if ((newTime - (Math.floor(newTime / 60)) * 60) === (15 - 14)) {
                    playSoundBankSoundIfEnabled("Radiant SafeLane Small Camp Pull", SoundType.PullSound)
                    addNotification("Pull Small Camp", "Pull at 15 seconds.")
                }

                if ((newTime - (Math.floor(newTime / 60)) * 60) === (45 - 15)) {
                    playSoundBankSoundIfEnabled("Radiant SafeLane Small Camp Pull B", SoundType.PullSound)
                    addNotification("Pull Small Camp", "Pull at 45 seconds.")
                }
            }

            if (state.team === "Radiant" && state.lane === "OffLane") {

                if ((newTime - (Math.floor(newTime / 60)) * 60) === (19 - 15)) {
                    playSoundBankSoundIfEnabled("Radiant OffLane Medium Camp Pull", SoundType.PullSound)
                    addNotification("Pull Medium Camp", "Pull at 19 seconds.")
                }

                if ((newTime - (Math.floor(newTime / 60)) * 60) === (49 - 15)) {
                    playSoundBankSoundIfEnabled("Radiant OffLane Medium Camp Pull B", SoundType.PullSound)
                    addNotification("Pull Medium Camp", "Pull at 49 seconds.")
                }
            }

            if (state.team === "Dire" && state.lane === "SafeLane") {

                if ((newTime - (Math.floor(newTime / 60)) * 60) === (15 - 14)) {
                    playSoundBankSoundIfEnabled("Dire SafeLane Small Camp Pull", SoundType.PullSound)
                    addNotification("Pull Small Camp", "Pull at 15 seconds.")
                }

                if ((newTime - (Math.floor(newTime / 60)) * 60) === (45 - 15)) {
                    playSoundBankSoundIfEnabled("Dire SafeLane Small Camp Pull B", SoundType.PullSound)
                    addNotification("Pull Small Camp", "Pull at 45 seconds.")
                }

                if ((newTime - (Math.floor(newTime / 60)) * 60) === (26 - 14)) {
                    playSoundBankSoundIfEnabled("Dire SafeLane Medium Camp Pull", SoundType.PullSound)
                    addNotification("Pull Medium Camp", "Pull at 26 seconds.")
                }

                if ((newTime - (Math.floor(newTime / 60)) * 60) === (56 - 15)) {
                    playSoundBankSoundIfEnabled("Dire SafeLane Medium Camp Pull B", SoundType.PullSound)
                    addNotification("Pull Medium Camp", "Pull at 56 seconds.")
                }
            }

            if (state.team === "Dire" && state.lane === "OffLane") {

                if ((newTime - (Math.floor(newTime / 60)) * 60) === (17 - 15)) {
                    playSoundBankSoundIfEnabled("Dire OffLane Medium Camp Pull", SoundType.PullSound)
                    addNotification("Pull Medium Camp", "Pull at 17 seconds.")
                }

                if ((newTime - (Math.floor(newTime / 60)) * 60) === (47 - 15)) {
                    playSoundBankSoundIfEnabled("Dire OffLane Medium Camp Pull B", SoundType.PullSound)
                    addNotification("Pull Medium Camp", "Pull at 47 seconds.")
                }
            }
        }

        if (isItemTime(newTime)) {
            playSoundBankSoundIfEnabled("Item Goal", SoundType.NormalSound)
            addNotification("Item Timing Reached", "Did you buy X yet?")
        }

        if (isLastHitGoalTime(newTime)) {
            playSoundBankSoundIfEnabled("Last Hit Goal", SoundType.NormalSound)
            addNotification("Item Timing Reached.", "Have you purchased ??? YET?")
        }

        if (isRoshanEarliestTime(newTime)) {
            playSoundBankSoundIfEnabled("Earliest Roshan Spawn Time", SoundType.NormalSound)
            addNotification("Roshan will spawn in the next 3 minutes.", "")
        }

        if (isRoshanLatestTime(newTime)) {
            playSoundBankSoundIfEnabled("Latest Roshan Spawn Time", SoundType.NormalSound)
            setState(state => ({ ...state, roshan: { isDead: false, timeOfDeath: null } }))
            addNotification("Roshan has definitely spawned.", "")
        }

        if (aegisHasExpired(newTime)) {
            playSoundBankSoundIfEnabled("Aegis has expired", SoundType.NormalSound)
            addNotification("Aegis has expired", "")
        }

        if (isOutpostTime(newTime + 60)) {
            playSoundBankSoundIfEnabled("Outpost Time", SoundType.NormalSound)
            addNotification("Capture the Outpost in 1 minute.", "Outpost will give lots of cool shit.")
        }

        if (isStackTime(newTime)) {
            playSoundBankSoundIfEnabled("Time to stack", SoundType.NormalSound)
            addNotification("Be prepared for stack time.", "Stack camps between XX:53-XX:56 seconds")
        }

        if (isPowerRuneTime(newTime + 25)) {
            playSoundBankSoundIfEnabled("Power Rune Spawned", SoundType.NormalSound)
            addNotification("A power rune has spawned", "")
        }

        if (isSiegeCreepTime(newTime) && state.time !== 0) {
            playSoundBankSoundIfEnabled("Siege Creep has spawned", SoundType.NormalSound)
            addNotification("A siege creep has spawned", "")
        }

        if (isBountyRuneTime(newTime + 20) && state.time !== 0) {
            playSoundBankSoundIfEnabled("Bounty Rune Spawned", SoundType.NormalSound)
            addNotification("Bounty Rune will spawn in 20 seconds", "It gives lots of gold lol")
        }

        if (isAghsShardTime(newTime)) {
            playSoundBankSoundIfEnabled("Aghanim's Shard Available", SoundType.NormalSound)
            addNotification("Aghanim's Shard can now be purchased.", "")
        }

        if (isNeutralItemTime(newTime)) {
            playSoundBankSoundIfEnabled("New Neutral Items Spawned", SoundType.NormalSound)
            addNotification("New neutral items are ready to find.", "You may find blah blah.")
        }

        if (isTomeTime(newTime)) {
            playSoundBankSoundIfEnabled("Tome is ready", SoundType.NormalSound)
            addNotification("New tome is ready to purchase.", "You get X XP YAY")
        }

        setState(state => ({ ...state, time: newTime }))
    }

    function playSoundBankSoundIfEnabled(soundBank: SoundBankName, soundType: SoundType) {

        const soundBankArr = soundType === SoundType.NormalSound ? state.sounds : state.pullSounds

        if (soundBankArr.find(b => b.soundBankTitle === soundBank)!.enabled === true) {
            soundBankArr.find(s => s.soundBankTitle === soundBank)!.sounds.find(e => e.selected === true)!.sound.play()
        }
    }

    function toggleTimer() {
        const currentState = state.timerShouldTick
        setState(state => ({ ...state, timerShouldTick: !currentState }))
    }

    function rollTimerBack(by: number) {
        const newTime = state.time - by
        if (newTime < 0) {
            setState(state => ({ ...state, time: 0 }))
        } else {
            setState(state => ({ ...state, time: newTime }))
        }
    }

    function pushTimerForward(by: number) {
        const newTime = state.time + by
        setState(state => ({ ...state, time: newTime }))
    }

    function previewButtonPressed(soundBank: string, soundType: SoundType) {

        const soundArr = soundType === SoundType.NormalSound ? state.sounds : state.pullSounds
        soundArr.find(s => s.soundBankTitle === soundBank)!.sounds.find(s => s.selected === true)!.sound.play()
    }

    function soundOptionChanged(soundBank: string, changedTo: string, soundType: SoundType) {

        const soundArr = soundType === SoundType.NormalSound ? state.sounds : state.pullSounds

        const bank = soundArr.find(s => s.soundBankTitle === soundBank)!
        const updatedSoundBank = { ...bank, sounds: bank.sounds.map(s => s.name === changedTo ? { ...s, selected: true } : { ...s, selected: false }) }

        if (soundType === SoundType.NormalSound) {
            setState(state => ({ ...state, sounds: state.sounds.map(b => b.soundBankTitle === soundBank ? updatedSoundBank : b) }))
        } else {
            setState(state => ({ ...state, pullSounds: state.pullSounds.map(b => b.soundBankTitle === soundBank ? updatedSoundBank : b) }))
        }
    }

    function soundEnabledToggled(soundBank: string, soundType: SoundType, isChecked: boolean) {
        console.log(arguments)
        const soundArr = soundType === SoundType.NormalSound ? state.sounds : state.pullSounds
        const bank = soundArr.find(s => s.soundBankTitle === soundBank)!
        const updatedSoundBank = { ...bank, enabled: isChecked }
        console.log(bank, updatedSoundBank, state)
        if (soundType === SoundType.NormalSound) {
            setState(state => ({ ...state, sounds: state.sounds.map(b => b.soundBankTitle === soundBank ? updatedSoundBank : b) }))
        } else {
            setState(state => ({ ...state, pullSounds: state.pullSounds.map(b => b.soundBankTitle === soundBank ? updatedSoundBank : b) }))
        }
    }

    function getRoshanTimerTime() {
        if (!state.roshan.isDead) {
            return 0
        } else {
            return state.time - state.roshan.timeOfDeath!
        }
    }

    function roshanResetButtonPressed() {
        const newRoshanState = { isDead: false, timeOfDeath: null }
        setState(state => ({ ...state, roshan: newRoshanState }))
    }

    function roshanDiedButtonWasPressed() {
        const newRoshanState = { isDead: true, timeOfDeath: state.time }
        setState(state => ({ ...state, roshan: newRoshanState }))
    }

    function itemGoalDeleteButtonWasPressed(index: number) {
        const newItemGoals = state.itemGoals.filter((_, i) => i !== index)
        setState(state => ({ ...state, itemGoals: newItemGoals }))
    }

    function addItemGoalButtonWasPressed(item: string, time: number) {
        const newItemGoalsArray = [...state.itemGoals, { item: item, time: time }]
        setState(state => ({ ...state, itemGoals: newItemGoalsArray }))
    }

    function lastHitGoalDeleteButtonWasPressed(index: number) {
        const newLastHitGoals = state.lastHitGoals.filter((_, i) => i !== index)
        setState(state => ({ ...state, lastHitGoals: newLastHitGoals }))
    }

    function addLastHitGoalButtonWasPressed(lastHitGoal: number, time: number) {
        const newlastHitGoalsArray = [...state.lastHitGoals, { lastHits: lastHitGoal, time: time }]
        setState(state => ({ ...state, lastHitGoals: newlastHitGoalsArray }))
    }

    function changeLane(to: Lane) {
        setState(state => ({ ...state, lane: to }))
    }

    function changeTeam(to: Team) {
        setState(state => ({ ...state, team: to }))
    }

    return (
        <div>
            <Timer
                time={state.time}
                shouldTick={state.timerShouldTick}
                tick={tick}
                rollTimerBackFunction={rollTimerBack}
                pushTimerForwardFunction={pushTimerForward}
                toggleTimerFunction={toggleTimer}
            />
            <Feed notificationFeed={state.notificationFeed}></Feed>
            <div id="side-bar">
            <h1 id="settings-heading">Settings</h1>
            <RoleCustomization lane={state.lane} team={state.team} setLaneFunction={changeLane} setTeamFunction={changeTeam}></RoleCustomization>
            <hr id="top-line"></hr>
            <Customization allPullSoundBanks={state.pullSounds} team={state.team} lane={state.lane} allSoundBanks={state.sounds} previewButtonPressed={previewButtonPressed} soundOptionChanged={soundOptionChanged} soundEnableToggled={soundEnabledToggled}></Customization>
            <GoalCustomization lastHitGoalDeleteButtonWasPressed={lastHitGoalDeleteButtonWasPressed} addLastHitGoalButtonWasPressed={addLastHitGoalButtonWasPressed} addItemGoalButtonWasPressed={addItemGoalButtonWasPressed} itemGoalDeleteButtonWasPressed={itemGoalDeleteButtonWasPressed} itemGoals={state.itemGoals} lastHitGoals={state.lastHitGoals}></GoalCustomization>
            <AegisTimer roshanResetButtonPressed={roshanResetButtonPressed} roshanDiedButtonWasPressed={roshanDiedButtonWasPressed} roshanTimerTime={getRoshanTimerTime()}></AegisTimer>
            </div>        
        </div>
    )
}





















// Object.keys(array)


