import React, {useState} from "react";
import Class from "../Class/Class";
import ClassGraphQL from "../Class/ClassGraphQL";
import "./Home.css"

function Home(props){
    const[value,setValue] = useState('');
    const [favoriteClasses, setClasses] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!favoriteClasses.includes(value)){
            setClasses(favoriteClasses.concat(value));
            setValue('');
        }
        console.log(favoriteClasses);
    }


    return(
        <div>
            <h1>Hello World!</h1>
            <form onSubmit={handleSubmit}>
                <label>Add favorite Class</label>
                <input type ="text" value = {value} onChange={handleChange}></input>
                <button type="submit">Add Class!</button>
            </form>

            <div className="my-classes">
                {favoriteClasses.map((favClasses) =>

                    <Class name={favClasses} key={favClasses}></Class>

                )}
            </div>
            <div className="my-classes">
                {favoriteClasses.map((favClasses) =>

                    <ClassGraphQL name={favClasses} key={favClasses}></ClassGraphQL>

                )}
            </div>

        </div>
    )
    
     
}

export default Home;