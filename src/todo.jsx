import React, { useEffect, useState } from "react";
import "./todostyle.css";
import { useNavigate } from "react-router-dom";
const Todo = () => {
    const navi=useNavigate();
    const [list, setList] = useState([]);
    const [newvalue, setNewvalue] = useState("");

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("todo"));
        if (tasks) {
            setList(tasks);
        }
    }, []);

   
    useEffect(() => {
        if (list.length > 0) {
            localStorage.setItem("todo", JSON.stringify(list));
        } else {
            localStorage.removeItem("todo"); 
        }
    }, [list]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newvalue.trim() !== "") {
            setList([...list, newvalue]);
            setNewvalue("");
        }
    };

    const handleDelete = (id) => {
        setList((prev) => prev.filter((_, i) => i !== id));
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} className="container">
                    <h1>TODO List</h1>
                    <div className="form-ele">
                        <input
                            type="text"
                            placeholder="Notes..."
                            value={newvalue}
                            onChange={(e) => setNewvalue(e.target.value)}
                        />
                        <button type="submit">ADD</button>
                    </div>
                    <ul>
                        {list.map((item, index) => (
                            <li key={index} className="inside">
                                {item}
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </form>
            </div>
            <button onClick={()=>navi("/")}>Back</button>
        </>
    );
};

export default Todo;
