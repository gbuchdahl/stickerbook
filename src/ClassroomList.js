import React from 'react';

const ClassroomList = (props) => {

    const { classrooms, setCurrent, currentClassroom } = props;


    return (
        <div className='columns is-multiline'>
            {classrooms.map((cr) =>
                <a className='column is-one-third is-one-fifth-desktop' onClick={() => setCurrent(cr.classCode)}>
                    <div className={currentClassroom === cr.classCode ? 'box has-background-success' : 'box'}>
                        <p className='has-text-weight-bold is-size-5'>{cr.classInfo.teacher}</p>
                        <p>{cr.classInfo.school}</p>
                    </div>
                </a>
            )}
        </div>)

}

export default ClassroomList;