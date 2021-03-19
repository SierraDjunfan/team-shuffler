import { allItemNames } from "AllDotaItems";
import { pullSounds } from "AllSounds";
import { Lane, Team } from "Interfaces";
import { useState } from "react"
import { secondsToTimerFormat } from "secondsToTimerFormat"
import { isConstructorDeclaration } from "typescript";
import './GoalCustomization.scss';

interface GoalCustomizationProps {
    itemGoals: {item: string, time: number}[]
    lastHitGoals: {lastHits: number, time: number}[]
    itemGoalDeleteButtonWasPressed: (index: number) => void
    addItemGoalButtonWasPressed: (item: string, time: number) => void
    lastHitGoalDeleteButtonWasPressed: (index: number) => void
    addLastHitGoalButtonWasPressed: (lastHitGoal: number, time: number) => void
}

const allDotaItems = allItemNames.sort()

export const GoalCustomization = (props: GoalCustomizationProps) => {

    const [goalCustomizationState, setGoalCustomizationState] = useState({selectedItem: allDotaItems[0], itemMinuteValue: "00", itemSecondValue: "00", lastHitTarget: "60", lastHitMinuteValue: "10", lastHitSecondValue: "00"})

    function getNumberOfSecondsFromCurrentStateForItems() {
        return Number((Number(goalCustomizationState.itemMinuteValue) * 60) + Number(goalCustomizationState.itemSecondValue))
    }

    function getNumberOfSecondsFromCurrentStateForLastHits() {
        return Number((Number(goalCustomizationState.lastHitMinuteValue) * 60) + Number(goalCustomizationState.lastHitSecondValue))
    }

    function valueIsNotAValidShortNumber(value: string) {
        const characters = value.split('')
        return characters.length > 4 || characters.filter( c => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(c)).length !== characters.length
    }

    function valueIsNotAValidShortNumberSeconds(value: string) {
        const characters = value.split('')
        return characters.length > 2 || characters.filter( c => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(c)).length !== characters.length
    }

    return (
        <div>
            <h2>ITEM GOAL</h2>
            <div className="item-goal-select">
            <select className="drop-down" onChange={ e => (setGoalCustomizationState( state => ({...state, selectedItem: e.target.options[e.target.options.selectedIndex].value})))}>
                {allDotaItems.map( i => <option>{i}</option>)}
            </select>
            <label>by</label>
            <input className="text" onChange={ e => valueIsNotAValidShortNumber(e.target.value) ? null : (setGoalCustomizationState( state => ({...state, itemMinuteValue: e.target.value})))} value={goalCustomizationState.itemMinuteValue}></input>
            <label>:</label>
            <input className="text" onChange={ e => valueIsNotAValidShortNumberSeconds(e.target.value) ? null : (setGoalCustomizationState( state => ({...state, itemSecondValue: e.target.value})))} value={goalCustomizationState.itemSecondValue}></input>
            <button className="add-button" onClick={() => props.addItemGoalButtonWasPressed(goalCustomizationState.selectedItem, getNumberOfSecondsFromCurrentStateForItems())}></button>
            </div>

            {props.itemGoals.map( (g, index) => <ItemGoal itemGoalDeleteButtonWasPressed={props.itemGoalDeleteButtonWasPressed} item={g.item} time={g.time} index={index}></ItemGoal>)}    

            <hr></hr>
            <h2>LAST HIT GOAL</h2>
            <div className="item-goal-select">
            <input className="text" onChange={ e => valueIsNotAValidShortNumber(e.target.value) ? null : (setGoalCustomizationState( state => ({...state, lastHitTarget: e.target.value})))} value={goalCustomizationState.lastHitTarget}></input>
            <label>last hits by</label>
            <input className="text" onChange={ e => valueIsNotAValidShortNumber(e.target.value) ? null : (setGoalCustomizationState( state => ({...state, lastHitMinuteValue: e.target.value})))} value={goalCustomizationState.lastHitMinuteValue}></input>
            <label>:</label>
            <input className="text"  onChange={ e => valueIsNotAValidShortNumberSeconds(e.target.value) ? null : (setGoalCustomizationState( state => ({...state, lastHitSecondValue: e.target.value})))} value={goalCustomizationState.lastHitSecondValue}></input>
            <button className="add-button" onClick={() => props.addLastHitGoalButtonWasPressed(Number(goalCustomizationState.lastHitTarget), getNumberOfSecondsFromCurrentStateForLastHits())}></button> 
            </div>
            {props.lastHitGoals.map( (g, i) => <LastHitGoal lastHitGoalDeleteButtonWasPressed={props.lastHitGoalDeleteButtonWasPressed} numberOfLastHits={g.lastHits} time={g.time} index={i}></LastHitGoal>)}
        </div>
    )
}

interface ItemGoalProps {
    item: string
    time: number
    index: number
    itemGoalDeleteButtonWasPressed: (index: number) => void
}

export const ItemGoal = (props: ItemGoalProps) => {
    return (
        <div id="item-goal">
            <p className="goal">Buy {props.item} by {secondsToTimerFormat(props.time)}</p>
            <button className="delete-button" onClick={() => props.itemGoalDeleteButtonWasPressed(props.index)}>X</button>
        </div>
    )
}

interface LastHitGoalProps {
    numberOfLastHits: number
    time: number
    index: number
    lastHitGoalDeleteButtonWasPressed: (index: number) => void
}

export const LastHitGoal = (props: LastHitGoalProps) => {
    return (
        <div id="last-hit-goal">
            <p className="goal">Get {props.numberOfLastHits} last hits by {secondsToTimerFormat(props.time)}</p>
            <button className="delete-button" onClick={() => props.lastHitGoalDeleteButtonWasPressed(props.index)}>X</button>
        </div>
    )
}

//null and void