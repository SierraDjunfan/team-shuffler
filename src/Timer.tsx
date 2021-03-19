import { TimerProps } from "./Interfaces";
import { useInterval } from "./useInterval";
import { secondsToTimerFormat } from "./secondsToTimerFormat";
import './Timer.scss';

export const Timer = (props: TimerProps) => {

    useInterval(props.tick, props.shouldTick ? 1000 : null)

    return (
    <div id="timer-container">
        <div id="timer-controls">
            <button onClick={() => props.rollTimerBackFunction(30)}>&#8249;&#171;</button>
            <button onClick={() => props.rollTimerBackFunction(15)}>&#171;</button>
            <button onClick={() => props.rollTimerBackFunction(1)}>&#8249;</button>
            <div id="timer">{secondsToTimerFormat(props.time)}</div>
            <button onClick={() => props.pushTimerForwardFunction(1)}>&#8250;</button>
            <button onClick={() => props.pushTimerForwardFunction(15)}>&#187;</button>
            <button onClick={() => props.pushTimerForwardFunction(30)}>&#8250;&#187;</button>
        </div>
        <div id="pause-button">
            <button className={props.shouldTick ? "timer-pause" : "timer-play"} id="toggle-timer-button" onClick={() => props.toggleTimerFunction()}></button>
        </div>
    </div>
    )
}

