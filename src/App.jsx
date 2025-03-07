import React from "react";
import "./App.css";
import Weather from "./weather.jsx";
import Todo from "./todo.jsx";
import Sort1 from "./sort.jsx";
import { BrowserRouter,Routes,Route,useNavigate } from "react-router-dom";
const App=()=>{
  const navi=useNavigate();

  const handlenav=(path)=>{
    navi(path);
  };

  return(
    <>
    <div className="refer">
      <button onClick={()=>handlenav("/Sort")}>React Table</button>
      <button onClick={()=>{handlenav("/Todo")}}>Todo</button>
      <button onClick={()=>{handlenav("/Weather")}}>Weather</button>
    </div>
    <Routes>
      <Route path="/Sort" element={<Sort1 />}></Route>
      <Route path="/Todo" element={<Todo />}></Route>
      <Route path="/Weather" element={<Weather />}></Route>
    </Routes>
    </>
  );
};
export default App;
