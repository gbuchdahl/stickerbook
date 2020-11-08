import React, { useState, useEffect } from 'react';
import axios from 'axios'
import _ from 'lodash'
import ClassroomList from './ClassroomList';
import Classroom from './Classroom'

function App() {

  let [classrooms, setClassrooms] = useState([])
  let [isAuthenticated, setIsAuthenticated] = useState(false)
  let [currentClassroom, setCurrentClassroom] = useState("")

  useEffect(() => {
    fetchData();
  }, [classrooms])

  async function fetchData() {
    const res = await axios('/classrooms');
    if (!_.isEqual(res.data, classrooms)) {
      setClassrooms(res.data);
    }
  }

  // const getClassroomLinks = (classrooms) => {
  //   return classrooms.map((cr) => <p onClick={setCurrentClassroom(cr.classCode)}>{cr.classInfo.teacher}</p>)
  // }

  const authenticate = async () => {
    if (!isAuthenticated) {
      const res = await axios('/admin');
      if (res.data.auth) {
        setIsAuthenticated(true);
      }
    } else {
      setIsAuthenticated(false);
    }
  }

  const getClassInfo = (code) => {
    const cr = classrooms.find((cr) => cr.classCode === code);
    if (cr) {
      return cr.classInfo;
    }
  }

  return (
    <div className="section">
      <div className='container'>
        <div className='columns is-align-content-center is-flex-direction-row is-justify-content-space-between'>
          <h1 className='title is-size-1'>Code Haven Sticker Sheet</h1>
          <p onClick={() => authenticate()} className='button'>{isAuthenticated ? 'Log Out' : 'Admin'}</p>
        </div>
        <ClassroomList className='pt-4' setCurrent={setCurrentClassroom} classrooms={classrooms} currentClassroom={currentClassroom} />
        <Classroom authenticated={isAuthenticated} classCode={currentClassroom} getClassInfo={getClassInfo}></Classroom>
      </div>
    </div>
  );
}

export default App;
