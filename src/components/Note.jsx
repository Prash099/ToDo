import React, { useState } from "react";


function Note(props) {

    const [inputText, setInputText] = useState("")

    function handleClick(e) {
        setInputText(e.target.value);
        e.preventDefault();
    }

    return (
        <div className="note">
            <form className="form">
                <input onChange={handleClick} type="text" placeholder="What's going on" value={inputText} />
                <button onClick={(e) => {
                    props.onAdd(inputText);
                    setInputText("");
                    e.preventDefault();
                }} type="submit" >ADD</button>
            </form>
        </div>

    )
}
export default Note;