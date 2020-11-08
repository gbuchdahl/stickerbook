import React from 'react';

const ClassroomList = (props) => {

    const { classrooms, setCurrent, currentClassroom } = props;


    return (
        <div className='columns is-multiline'>
            {classrooms.map((cr) => {
                let classNames = 'box';
                if (currentClassroom !== '') {
                    classNames = currentClassroom === cr.classCode ? 'box has-background-success' : 'box has-background-white-ter'
                }

                return <a className='column is-one-third is-one-fifth-desktop' onClick={() => setCurrent(cr.classCode)}>
                    <div className={classNames}>
                        <p className='has-text-weight-bold is-size-5'>{cr.classInfo.teacher}</p>
                        <p>{cr.classInfo.school}</p>
                    </div>
                </a>
            }

            )}
        </div>)

}

export default ClassroomList;