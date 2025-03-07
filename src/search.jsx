import React,{useState} from "react";
import { Data } from "./data.js";
import Sort1 from "./sort.jsx";
const Search =() =>{
  const [search,setSearch]= useState("");
  return( 
    <>
    <input type="text"
    
    placeholder="search by a name..."
    
    onChange={(e)=>setSearch(e.target.value)}></input>
     <table border="3"
     >
      <thead>TABLE OF INFO</thead>
      <tr><th>ID</th>
      <th>NAME</th>
      <th>AGE</th>
      <th>PHONE</th></tr>
      <tbody>
        {Data.filter((item)=>{
          return search === "" || item.first_name.toLowerCase().includes(search.toLowerCase());
        }).map((item,index)=>
        <tr key={index}><td>{item.id}</td>
        <td>{item.first_name}</td>
        <td>{item.age}</td>
        <td>{item.phone}</td></tr>)}
      </tbody>
      <hr></hr>
      {Data.filter((item)=>{
      return item.age >20 && item.age<40 ;}).map((item,index)=>
        <tr key={index}><td>{item.id}</td>
        <td>{item.first_name}</td>
        <td>{item.age}</td>
        <td>{item.phone}</td></tr>)}
     </table>
    </>
  );
};
export default Search;
