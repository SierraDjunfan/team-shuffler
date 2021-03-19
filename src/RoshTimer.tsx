import { secondsToTimerFormat } from "secondsToTimerFormat"

interface AegisTimerProps {
    roshanResetButtonPressed: () => void
    roshanDiedButtonWasPressed: () => void
    roshanTimerTime: number
}


export const AegisTimer = (props: AegisTimerProps) => {
    return (
        <div>
            <h1>Roshan Timer</h1>
            <button onClick={() => props.roshanResetButtonPressed()}>Reset</button>
            <button onClick={() => props.roshanDiedButtonWasPressed()}>Roshan Died</button>
            <p>{secondsToTimerFormat(props.roshanTimerTime)}</p>
        </div>
    )
}