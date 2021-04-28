import { isPropertySignature } from "typescript"

interface AddPlayerSectionProps {
    textInput: string
    addPlayerButtonFunction: (name: string) => void
    onTextInputChangedFunction: (text: string) => void
}

export const AppPlayerSection = (props: AddPlayerSectionProps) => {

    return (
        <div id="add-player-section">
            <input onChange={ e => props.onTextInputChangedFunction(e.target.value!)} value={props.textInput}></input>
            <button id="add-button" onClick={() => props.addPlayerButtonFunction(props.textInput)}>Add</button>
        </div>
    )
}