export interface TimerProps {
    time: number
    shouldTick: boolean
    tick: () => void
    rollTimerBackFunction: (by: number) => void
    pushTimerForwardFunction: (by: number) => void
    toggleTimerFunction: () => void
}

export interface AppState {
    time: number
    timerShouldTick: boolean
    sounds: {soundBankTitle: string, enabled: boolean, sounds: {name: string, sound: HTMLAudioElement, selected: boolean}[]}[]
    roshan: {isDead: boolean, timeOfDeath: null | number}
    lane: Lane,
    team: Team
    itemGoals: {item: string, time: number}[]
    lastHitGoals: {lastHits: number, time: number}[]
    pullSounds: {soundBankTitle: string, enabled: boolean, sounds: {name: string, sound: HTMLAudioElement, selected: boolean}[]}[]
    notificationFeed: {notificationHeading: string, subtext: string, time: number}[]
}

export type Lane = "SafeLane" | "OffLane" | "Mid"

export type Team = "Dire" | "Radiant"

export enum SoundType {
    NormalSound, 
    PullSound
}