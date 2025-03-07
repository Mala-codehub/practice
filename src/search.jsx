import React,{useState} from "react";
import './style.css';
/* import Pagination from "./pagination"; */
import { Data } from "./data";
const Search =() =>{
  const[order,setOrder]=useState("[]");
  return( 
    <>
    <div className="in"><input type='text' placeholder="Search by a name...." onChange={(e)=>setOrder(e.target.value)}></input></div>
    <table className="tb">
      <thead>Student Table
      <tr><th>Id</th> 
      <th>Name</th>
      <th>Phone</th></tr></thead>
      <tbody>{
        Data.filter((item)=>{
        return( order === "" || item.first_name.toLowerCase().includes(order.toLowerCase()));}
      ).map((items,index)=>(<tr key={index}><td>{items.id}</td>
      <td>{items.first_name}</td>
          <td>{items.phone}
          </td></tr>))}
       
      </tbody>
    </table>
   {/*  <Pagination /> */}
    </>
  );
};
export default Search;