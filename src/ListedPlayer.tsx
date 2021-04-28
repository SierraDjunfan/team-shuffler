interface ListedPlayerProps {
    name: string
    index: number
    playerDeletedButtonWasPressedFunction: (playerIndex: number) => void
}

export const ListedPlayer = (props: ListedPlayerProps) => {
    return (
        <div className="listed-player">
        <button className="delete-button" onClick={() => props.playerDeletedButtonWasPressedFunction(props.index)}>X</button>
        <h1>{props.name}</h1>
        </div>
    )
}