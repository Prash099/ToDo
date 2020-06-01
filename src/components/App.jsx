import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateItem";

function App(props) {
    const [items, setItems] = useState([])

    function addItem(inputText) {
        setItems(prevValue => {
            return [...prevValue, inputText]
        })
    }

    function deleteItem(id) {
        setItems(prevValue => {
            return prevValue.filter((item, index) => {
                return index !== id;
            })
        })
    }


    return (<div>
        <Header />
        <Note onAdd={addItem} />
        <div>
            <ul>
                {items.map((todoItem, index) => (
                    <CreateNote
                        key={index}
                        id={index}
                        text={todoItem}
                        onChecked={deleteItem}
                    />
                ))}
            </ul>
        </div>
        <Footer />
    </div>)
}
export default App;