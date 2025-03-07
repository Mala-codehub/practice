import React, { useState } from "react";
import { Data } from "./data.js";
import { useNavigate } from "react-router-dom";
import Search from "./search.jsx";
import Update from "./update.jsx";
const Sort1 = () => {
  const navi=useNavigate();

  const [order, setOrder] = useState("ASC");
  const [sortedData, setSortedData] = useState(Data);

  const sorting = () => {
    let sorted = [...sortedData];
    if (order === "ASC") {
      sorted.sort((a, b) => (a.first_name > b.first_name ? 1 : -1)); 
      setOrder("DSC");
    } else {
      sorted.sort((a, b) => (a.first_name < b.first_name ? 1 : -1)); 
      setOrder("ASC");
    }
    setSortedData(sorted);
  };

  return (
    <>
    
      <table
        border="3"
      >
        <thead>
          <tr>
          <th>ID</th>
            <th onClick={sorting}>NAME</th>
            <th>AGE</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.age}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr></hr>

      <Search />
       

      <hr></hr>

      <Update />
      <button onClick={()=>navi("/")}>Back</button>
    </>
  );
};

export default Sort1;
