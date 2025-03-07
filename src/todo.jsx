import React, { useEffect, useState } from "react";
import "./todostyle.css";

const Todo = () => {
    const [list, setList] = useState([]);
    const [newvalue, setNewvalue] = useState("");

    // Load tasks from localStorage on initial render
    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("todo"));
        if (tasks) {
            setList(tasks); // Set tasks if available in localStorage
        }
    }, []);

    // Persist the list to localStorage whenever it changes
    useEffect(() => {
        if (list.length > 0) {
            localStorage.setItem("todo", JSON.stringify(list));
        } else {
            localStorage.removeItem("todo"); // Optionally remove from storage if list is empty
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
        </>
    );
};

export default Todo;
