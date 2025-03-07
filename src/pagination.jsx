import React,{useState,useEffect} from "react";
const Pagination=()=>{
    const[start,setstart]=useState(2);
    const[end,setend]=useState(15); 
    const[data,setdata]=useState([]);
    useEffect(()=>{
            const fun=async()=>{
                try {
                    const response=await fetch("https://jsonplaceholder.typicode.com/posts");
                    const result=await response.json();
                    setdata(result);
                } catch (error) {
                    console.log("error");
                }
               
            };
            fun();
    },[]);
    const page=(pag)=>{setstart(pag)};
    const current =start*end;
    const first=current-end;
    const res=data.slice(first,current);
    const total=Math.ceil(data.length/end);
    return(
        <>
        <ul>
        {res.map((index)=>(
            <ul key={index.id}>{index.id}-{index.title}
            </ul> ))}
        </ul>  
        <button onClick={()=>page(1)}>first</button>
        <button disabled={start===1} onClick={()=>page(start-1)}>Previous</button>
        {new Array(total).fill(0).map((_,index)=>{
            return(<button onClick={()=>page(index+1)} key={index+1}>{index+1}</button>);
        })} 
        <button disabled={start=== total} onClick={()=>page(start+1)}>Next</button>
        <button onClick={()=>page(total)}>last</button>
        </>
    );
};
export default Pagination;