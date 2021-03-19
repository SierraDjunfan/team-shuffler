import { SoundType } from "Interfaces"

interface CustomizationProps {
    team: string
    lane: string
    allSoundBanks: {soundBankTitle: string, enabled: boolean, sounds: {name: string, sound: HTMLAudioElement, selected: Boolean}[]}[]
    previewButtonPressed: (soundBank: string, soundType: SoundType) => void
    soundOptionChanged: (soundBank: string, changedTo: string, soundType: SoundType) => void
    soundEnableToggled: (soundBank: string, soundType: SoundType, isChecked: boolean) => void
    allPullSoundBanks: {soundBankTitle: string, enabled: boolean, sounds: {name: string, sound: HTMLAudioElement, selected: Boolean}[]}[]
}

export const Customization = (props: CustomizationProps) => 
    <div id="main-sound-customization">
        {props.allSoundBanks.map(b => <SoundOption soundType={SoundType.NormalSound} soundBankEnabled={b.enabled} soundEnableToggled={props.soundEnableToggled} soundBankTitle={b.soundBankTitle} soundLabels={b.sounds.map(s => s.name)} previewButtonPressed={props.previewButtonPressed} soundOptionChanged={props.soundOptionChanged}></SoundOption>)}
        
        {props.team === "Radiant" && props.lane === "SafeLane" && 
        props.allPullSoundBanks.filter( b => ["Radiant SafeLane Medium Camp Pull", "Radiant SafeLane Medium Camp Pull B", "Radiant SafeLane Small Camp Pull", "Radiant SafeLane Small Camp Pull B"].includes(b.soundBankTitle))
        .map( s => <SoundOption soundType={SoundType.PullSound} soundBankEnabled={s.enabled} soundEnableToggled={props.soundEnableToggled} soundBankTitle={s.soundBankTitle} soundLabels={ s.sounds.map( e => e.name)} previewButtonPressed={props.previewButtonPressed} soundOptionChanged={props.soundOptionChanged}></SoundOption>)
        }

        {props.team === "Radiant" && props.lane === "OffLane" &&
        props.allPullSoundBanks.filter( b => ["Radiant OffLane Medium Camp Pull", "Radiant OffLane Medium Camp Pull B"].includes(b.soundBankTitle))
        .map( s => <SoundOption soundType={SoundType.PullSound} soundBankEnabled={s.enabled} soundEnableToggled={props.soundEnableToggled} soundBankTitle={s.soundBankTitle} soundLabels={ s.sounds.map( e => e.name)} previewButtonPressed={props.previewButtonPressed} soundOptionChanged={props.soundOptionChanged}></SoundOption>)
        }

        {props.team === "Dire" && props.lane === "SafeLane" &&
        props.allPullSoundBanks.filter( b => ["Dire SafeLane Small Camp Pull", "Dire SafeLane Small Camp Pull B", "Dire SafeLane Medium Camp Pull", "Dire SafeLane Medium Camp Pull B"].includes(b.soundBankTitle))
        .map( s => <SoundOption soundType={SoundType.PullSound} soundBankEnabled={s.enabled} soundEnableToggled={props.soundEnableToggled} soundBankTitle={s.soundBankTitle} soundLabels={ s.sounds.map( e => e.name)} previewButtonPressed={props.previewButtonPressed} soundOptionChanged={props.soundOptionChanged}></SoundOption>)
        }

        {props.team === "Dire" && props.lane === "OffLane" &&
        props.allPullSoundBanks.filter( b => ["Dire OffLane Medium Camp Pull", "Dire OffLane Medium Camp Pull B"].includes(b.soundBankTitle))
        .map( s => <SoundOption soundType={SoundType.PullSound} soundBankEnabled={s.enabled} soundEnableToggled={props.soundEnableToggled} soundBankTitle={s.soundBankTitle} soundLabels={ s.sounds.map( e => e.name)} previewButtonPressed={props.previewButtonPressed} soundOptionChanged={props.soundOptionChanged}></SoundOption>)
        }
        <hr></hr>
    </div>

interface SoundOptionProps {
    soundBankTitle: string
    soundBankEnabled: boolean
    soundLabels: string[]
    previewButtonPressed: (soundBank: string, soundType: SoundType) => void
    soundOptionChanged: (soundBank: string, changedTo: string, soundType: SoundType) => void
    soundEnableToggled: (soundBank: string, soundType: SoundType, isChecked: boolean) => void
    soundType: SoundType
}

export const SoundOption = (props: SoundOptionProps) => {
    return (
        <div className="sound-option">
            <label className="checkbox-container">
            <input className="check" type="checkbox" onChange={e => props.soundEnableToggled(props.soundBankTitle, props.soundType, e.target.checked)} checked={props.soundBankEnabled}/>
            <span className="check-mark"></span>
            </label>
            <button className="preview-button" onClick={ () => props.previewButtonPressed(props.soundBankTitle, props.soundType)} ></button>
            <select className="drop-down" onChange={ e => (props.soundOptionChanged(props.soundBankTitle, e.target.options[e.target.options.selectedIndex].value, props.soundType))} id={props.soundBankTitle}>
                {props.soundLabels.map( o => <option value={o}>{o}</option>)}
            </select>
            <label htmlFor={props.soundBankTitle}>{props.soundBankTitle}</label>
        </div>
    )
}