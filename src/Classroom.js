import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import axios from 'axios';
import TeamAdder from './TeamAdder'
import Stickers from './Stickers'


const Classroom = (props) => {
    const { classCode, getClassInfo, authenticated } = props;

    let [teams, setTeams] = useState([]);
    let [showAddTeam, setShowAddTeam] = useState(false)

    useEffect(() => {
        setShowAddTeam(false);
        fetchData();
    }, [classCode, teams])

    async function fetchData() {
        const res = await axios(`teams/${classCode}`);
        if (!_.isEqual(res.data, teams)) {
            setTeams(res.data);
        }
    }

    if (!classCode) {
        return ""
    }

    const classInfo = getClassInfo(classCode);

    const updateStickers = async (teamId, amount) => {
        await axios({
            url: `/teams/update/${teamId}`, method: 'POST', data: {
                teamId, amount
            }
        })
        fetchData()
    }

    const deleteTeam = async (teamId) => {
        await axios({
            url: '/teams/delete', method: 'POST', data: {
                teamId
            }
        })
        fetchData()
    }


    return (
        <div>
            <h3 className='is-size-3 pb-4'>Teams for {classInfo.teacher}'s class</h3>
            {teams && teams.map((t) =>
                <div className='box'>
                    <div className='ml-0 columns is-flex-direction-row is-justify-content-space-between'>
                        <p className='has-text-weight-bold is-size-5'>{t.teamName}</p>
                        {authenticated && <button onClick={() => deleteTeam(t.teamId)} className='button is-danger'>x</button>}
                    </div>
                    <p>Mentor: {t.mentor}</p>
                    <div className='mt-5'>
                        <Stickers number={t.stickers}></Stickers>
                    </div>
                    <div>
                        {authenticated && <div className='button my-4 mr-2' onClick={() => updateStickers(t.teamId, 1)}>
                            <p>Add a sticker</p>
                        </div>}
                        {authenticated && <div className='button my-4' onClick={() => updateStickers(t.teamId, -1)}>
                            <p>Remove a sticker</p>
                        </div>}
                    </div>
                </div>)
            }
            {authenticated && !showAddTeam && <button onClick={() => setShowAddTeam(true)} className='button is-success my-4'>Add Team</button>}
            {showAddTeam && <TeamAdder close={() => setShowAddTeam(false)} fetcher={() => setTeams([])} numTeams={(teams.length + 1).toString()} classCode={classCode} />}
        </div>
    )
}

export default Classroom

