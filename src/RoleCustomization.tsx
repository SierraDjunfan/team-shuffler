import { Lane, Team } from "Interfaces"

interface RoleCustomizationProps {
    lane: Lane
    team: Team
    setLaneFunction: (newLane: Lane) => void
    setTeamFunction: (newTeam: Team) => void
}

export const RoleCustomization = (props: RoleCustomizationProps) => {

    return (
        <div id="role-selection">
            <div className="radio-select">

            <label className="radio-container">Radiant
            <input checked={props.team === "Radiant"} onChange={ () => props.setTeamFunction("Radiant" as Team)} className="radio-button" type="radio" name="teamSelect" value="Radiant"></input>
            <span className="inner-radio"></span>
            </label>

            <label className="radio-container">Dire
            <input checked={props.team === "Dire"} onChange={ () => props.setTeamFunction("Dire" as Team)} className="radio-button" type="radio" name="teamSelect" value="Dire"></input>
            <span className="inner-radio"></span>
            </label>
            </div>

            <div className="radio-select">

            <label className="radio-container">Safe-Lane
            <input checked={props.lane === "SafeLane"} onChange={ () => props.setLaneFunction("SafeLane" as Lane)} className="radio-button" type="radio" name="laneSelect" value="SafeLane"></input>
            <span className="inner-radio"></span>
            </label>

            <label className="radio-container">Off-Lane
            <input checked={props.lane === "OffLane"} onChange={ () => props.setLaneFunction("OffLane" as Lane)} className="radio-button" type="radio" name="laneSelect" value="OffLane"></input>
            <span className="inner-radio"></span>
            </label>

            <label className="radio-container">Mid
            <input checked={props.lane === "Mid"} onChange={ () => props.setLaneFunction("Mid" as Lane)} className="radio-button" type="radio" name="laneSelect" value="Mid"></input>
            <span className="inner-radio"></span>
            </label>
            </div>
        </div>
    )
}