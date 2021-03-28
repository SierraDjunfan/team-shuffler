export function secondsToTimerFormat(seconds: number) {
    if (seconds <0) {
        const asPositive = Math.abs(seconds)
        const minutes = Math.floor(asPositive / 60)
        const secs = asPositive - minutes * 60
        const preMin = minutes < 10 ? "0" : ""
        const preSec = secs < 10 ? "0" : ""
        return preMin + minutes + ":" + preSec + secs
    } else {
        const minutes = Math.floor(seconds / 60)
        const secs = seconds - minutes * 60
        const preMin = minutes < 10 ? "0" : ""
        const preSec = secs < 10 ? "0" : ""
        return preMin + minutes + ":" + preSec + secs
    }
}