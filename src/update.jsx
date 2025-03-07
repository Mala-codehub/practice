import React,{useEffect,useState} from "react";
import { db } from "./firebase/configuration";
import { collection,getDocs } from "firebase/firestore";
const update=()=>{
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
 /*    const[edit,setEdit]=useState(""); */
    const[user,setUser]=useState([]);
    useEffect(()=>{
        const fetchUser=async()=>{
            try {
                const dataRef=collection(db,"user");
            const snapshot=await getDocs(dataRef);
            const snap=snapshot.docs.map(doc=>({
                id: doc.id,
                ...doc.data()
            })
            )  
            setUser(snap);
            } catch (error) {
                console.log("error is ",error);
            }
            
        };
        fetchUser();
    },[]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name || !age){
            alert("success");
        }else{
            alert("error");
        }
        setName("");
        setAge("");

    };
    return(
        <>
        <div>
            <h1>Student data</h1>
            <form onSubmit={handleSubmit}>
                <div><label>NAME :</label>
                <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)}></input></div>
                <div><label>AGE :</label>
                <input type="number" placeholder="age" onChange={(e)=>setAge(e.target.value)}></input>
                <button type="submit">Submit</button></div>
            </form>
            <ul>
            <div>{user.map((users)=>{
                return( 
                    <li key={users.id}>{users.name}-{users.age}</li>
                );
            })}</div></ul>
            </div></>
    );
};
export default update;