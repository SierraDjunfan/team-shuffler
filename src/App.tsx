import { AppPlayerSection } from 'AddPlayerSection'
import { ListedPlayer } from 'ListedPlayer'
import { useState } from 'react'
import { shuffle } from 'shuffle'
import './App.scss'

interface AppState {
    players: string[]
    playerInput: string
    teamOne: string[]
    teamTwo: string[]
    quickAddPlayers: string[]
    teamOneName: string
    teamTwoName: string
}

const initialState: AppState = {
    players: [],
    playerInput: "",
    teamOne: [],
    teamTwo: [],
    quickAddPlayers: ["Sara", "Austin", "Chase", "Hunter", "Michael", "Josh", "James", "Stout", "Reuben", "Katie"],
    teamOneName: "",
    teamTwoName: ""
}

export const App = () => {

    const [state, setState] = useState(initialState)

    const addPlayer = (name: string) => {
        if (name !== null && name != "") {
            const newArray = [...state.players, name]
            setState( s => ({...s, players: newArray, playerInput: ""}))
        }  
    }

    const playerTextChanged = (text: string) => {
        setState( s => ({...s, playerInput: text}))
    }
    
    const shuffleButtonWasPressed = () => {
        const shuffledArray = shuffle(state.players)

        const midIndex = Math.floor(shuffledArray.length / 2)

        const firstHalf = shuffledArray.slice(0, midIndex)
        const secondHalf = shuffledArray.slice(midIndex, shuffledArray.length)

        const teamOneName = randomlyGeneratedTeamName("")
        const teamTwoName = randomlyGeneratedTeamName(teamOneName)

        setState( s => ({...s, teamOneName: teamOneName, teamTwoName: teamTwoName, teamOne: firstHalf, teamTwo: secondHalf}))
    }

    const randomlyGeneratedTeamName = (otherTeamName: string) => {
        const allTeamNames = ["Cool Guys", "Sexy Boys", "Dota RULEZ", "Epic Fortnite Team", "Return to Monkke", "Fr4gs 4 Dayz", "Basic White Boys", "Prison Lads", "Girls from Girltown", "We Love Feet", "TEAM SECRET", "The Strong People", "420 Fellas", "Chase's Army", "NO MORE SETT", "The Godly Men", "The Godly Women", "Navy Seals", "Imposters", "Jungle Only- No Lane", "E-Boys", "Simpy Simpers", "Presidents of the United League Of Legends"].filter(n => n != otherTeamName)
        const randomName = shuffle(allTeamNames)[0]
        return randomName
    }

    const playerDeleteButtonWasPressed = (playerIndex: number) => {
        const newPlayers = state.players.filter( (p, i) => (i !== playerIndex))
        setState( s => ({...state, players: newPlayers}))
    }

    const copyButtonWasPressed = () => {
        const textToCopy = ` TEAM ONE (${state.teamOneName})\n ----------\n${state.teamOne.map(p =>` ${p}`)}\n\n TEAM TWO (${state.teamTwoName})\n ----------\n${state.teamTwo.map(p =>` ${p}`)}`
        
        navigator.clipboard.writeText(textToCopy).then(function() {
            //INDICATE TEXT COPIED
          }, function() {
            //CLIPBOARD NOT ALLOWED MESSAGE
          });
    }

    const clearAllButtonWasPressed = () => {
        setState( s => ({...state, players: [], teamOne: [], teamTwo: []}))
    }

    return (
        <div>
            <div id="side-bar">
            <h1>QUICK ADD</h1>
            <div id="quick-add-section">
            {state.quickAddPlayers.sort().map(p => <button className="quick-add-button" onClick={() => addPlayer(p)}>{p}</button>)}
            </div>
            <hr></hr>
            <AppPlayerSection onTextInputChangedFunction={playerTextChanged} textInput={state.playerInput} addPlayerButtonFunction={addPlayer}></AppPlayerSection>
            <hr></hr>
            {state.players.map((p, i) => (<ListedPlayer playerDeletedButtonWasPressedFunction={playerDeleteButtonWasPressed} name={p} index={i}></ListedPlayer>))}
            </div>
            <div id="mid-page-section">
            <button className="shuffle-button" onClick={() => shuffleButtonWasPressed()}>Shuffle</button>
            <div></div>
            <button className="action-button" onClick={() => copyButtonWasPressed()}>COPY</button>
            <button className="action-button" onClick={() => clearAllButtonWasPressed()}>CLEAR ALL</button>
            <h1>{`TEAM ONE (${state.teamOneName})`}</h1>
            {state.teamOne.map(p => <p>{p}</p>)}
            <h1>{`TEAM TWO (${state.teamTwoName})`}</h1>
            {state.teamTwo.map(p => <p>{p}</p>)}
            </div>
        </div>
    )
}