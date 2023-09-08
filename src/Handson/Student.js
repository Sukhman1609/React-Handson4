import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Student = () => {
    const [Data]=useState([
        {
            Name:"EA23",
            Age:20,
            Course: "MERN",
            Batch:"March",
            Change:<><Link to=''>Edit</Link></>
        },
        {
            Name:"EA23",
            Age:20,
            Course: "MERN",
            Batch:"March",
            Change:<><Link to=''>Edit</Link></>
        },{
            Name:"EA23",
            Age:20,
            Course: "MERN",
            Batch:"March",
            Change:<><Link to=''>Edit</Link></>
        },{
            Name:"EA23",
            Age:20,
            Course: "MERN",
            Batch:"March",
            Change:<><Link to=''>Edit</Link></>
        },
        {
            Name:"EA23",
            Age:20,
            Course: "MERN",
            Batch:"March",
            Change:<><Link to=''>Edit</Link></>
        },
        {
            Name:"EA23",
            Age:20,
            Course: "MERN",
            Batch:"March",
            Change:<><Link to=''>Edit</Link></>
        },
        {
            Name:"EA23",
            Age:20,
            Course: "MERN",
            Batch:"March",
            Change:<><Link to=''>Edit</Link></>
        },{
            Name:"EA23",
            Age:20,
            Course: "MERN",
            Batch:"March",
            Change:<><Link to=''>Edit</Link></>
        },
    ])
  return (
    <div>
        <div className='button'>
      <h1>Student Details</h1>
      <button className='new'>Add New Student</button></div>
            <table border="1px" cellPadding={'10px'}>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
{Data.map((item,index)=>{
        return(
            <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Course}</td>
                <td>{item.Batch}</td>
                <td>{item.Change}</td>
            </tr>
         )
      })}
            </table>
       
    </div>
  )
}

export default Student
