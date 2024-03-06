import React, { useState, useEffect } from 'react';
import "./style.css";

const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");
    if (lists) {
        return JSON.parse(lists);

    } else {
        return [];
    }
};


const Todo = () => {


    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItem, setIsEditlem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);

    const addItem = () => {
        if (!inputdata) {
            alert("plz fill the data");

        } else if (inputdata && toggleButton) {
            setItems(
                items.map((curElem) => {
                    if (curElem.id === isEditItem) {
                        return { ...curElem, name: inputdata };
                    }
                    return curElem;
                })
            );

            setInputData("");
            setIsEditlem(null);
            setToggleButton(false   );
        } else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            }
            setItems([...items, myNewInputData]);
            setInputData("");
        }
    };

    const ediitem = (index) => {
        const item_todo_edited = items.find((curElem) => {
            return curElem.id === index;
        });

        setInputData(item_todo_edited.name);
        setIsEditlem(index);
        setToggleButton(true);
    };

    const deleteItem = (index) => {
        const updatedItems = items.filter((curElem) => {
            return curElem.id !== index;
        });
        setItems(updatedItems);
    };

    const removeAll = () => {
        setItems([]);
    };

    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items))
    }, [items]);

    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>ADd Your List Here</figcaption>
                    </figure>
                    <div className='additems'>
                        <input type="text" placeholder="✍ Add Item"
                            className="form-control"
                            value={inputdata}
                            onChange={(event) => setInputData(event.target.value)}
                        />
                        {toggleButton ? (
                            <i className="far fa-edit add-btn" onClick={addItem}></i>
                        ) : (
                            <i className="fa fa-plus add-btn" onClick={addItem}></i>)}

                    </div>
                    <div className='showItems'>
                        {items.map((curElem, index) => {
                            return (
                                <div className="eachItem" key={curElem.id}>
                                    <h3>{curElem.name}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-edit add-btn"
                                            onClick={() => ediitem(curElem.id)}></i>
                                        <i className="far fa-trash-alt add-btn"
                                            onClick={() => deleteItem(curElem.id)}></i>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text="Remove All"
                            onClick={removeAll}>
                            <samp>CHECK LIST</samp>
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Todo;
