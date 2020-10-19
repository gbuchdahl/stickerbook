import React, { useState, useEffect } from 'react';

function App() {

  let [classrooms, setClassrooms] = useState([])

  useEffect(() => {
    async function fetchData() {
      let res = await fetch('/classrooms').then((response) =>
        response.json()
      );
      setClassrooms(res)
    }
    fetchData()
    console.log(classrooms)
  }, [])

  const getClassroomLinks = (classrooms) => {
    return classrooms.map((cr) => <p>{cr.classInfo.teacher}</p>)
  }

  return (
    <div className="App container">
      <h1 className='title is-size-1'>Code Haven Sticker Sheet</h1>
      {classrooms.length > 0 && getClassroomLinks(classrooms)}
    </div>
  );
}

export default App;
