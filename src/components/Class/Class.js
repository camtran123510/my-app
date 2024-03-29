import "./Class.css"
import React, {useState, useEffect} from 'react';

function Class (props){

    const [classInfo, setClassInfo]= useState({});

    const url = "https://api.peterportal.org/rest/v0/courses/"
    useEffect(() => {

        const fetchData = async () => {
            const response =  await fetch(url + props.name);
            const data =  await response.json();
            console.log(data);
            setClassInfo(data);

        }
        fetchData();
    })
    let info;
    if(classInfo.id)
    {
        info = <div className="information">
            <p id = "title">{classInfo.title}</p>
            <p id = "department">{classInfo.department}</p>
            <p id = "description"> {classInfo.description}</p>
        </div>
    }else{
        info = <p>Class not found</p>
    }

    return(
        <div id="class">
            {props.name}
            <div>
            {info}
            </div>
        </div>
    )
}

export default Class;