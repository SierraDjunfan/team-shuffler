import { allPullSoundBanks, allSoundBanks} from "./AllSounds";
import { AppState } from "./Interfaces";

export const initialAppState: AppState = {
    time: 0,
    timerShouldTick: false,
    sounds: allSoundBanks,
    pullSounds: allPullSoundBanks,
    roshan: {isDead: false, timeOfDeath: null},
    lane: "SafeLane",
    team: "Radiant",
    itemGoals: [],
    lastHitGoals: [],
    notificationFeed: []
}










