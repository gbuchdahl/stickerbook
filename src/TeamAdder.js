import React, { useState } from 'react';
import axios from 'axios';

const TeamAdder = (props) => {
    let [teamName, setTeamName] = useState("")
    let [mentorName, setMentorName] = useState("")

    const handleSubmit = async () => {
        if (!teamName || !mentorName) {
            return
        }
        const { numTeams, classCode, fetcher } = props;

        await axios({
            method: "POST", url: "/teams/add", data: {
                teamName, mentorName, teamId: `${classCode}${numTeams}-${Math.floor(Math.random()) * 1e3}`, classCode
            }
        })
        setMentorName("")
        setTeamName("")
        fetcher()
    }

    return (
        <div className='box is-flex-shrink'>
            <div class="field">
                <label className="label">Team Name</label>
                <div className="control">
                    <input class="input" type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} placeholder="The Fabulous Scratchers" />
                </div>
            </div>
            <div class="field">
                <label className="label">Mentor Name</label>
                <div className="control">
                    <input class="input" type="text" value={mentorName} onChange={(e) => setMentorName(e.target.value)} placeholder="Jimmy A. Scratchyhands" />
                </div>
            </div>
            <div>
                <div className="field is-grouped">
                    <div className="control">
                        <button onClick={handleSubmit} className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                        <button onClick={() => { setMentorName(""); setTeamName(""); props.close() }} className="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamAdder