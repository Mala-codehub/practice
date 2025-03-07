import React,{useEffect, useState} from "react";
import { IoMdSearch } from "react-icons/io";
import "./weatherstyle.css";
import cloud from "./assets/img/cloudy.png";
import Sun from "./assets/img/sun.png";
import strom from "./assets/img/storm.png";
import snow from "./assets/img/snow.png";
import Wind from "./assets/img/icons8-wind-50.png";
import Humin from "./assets/img/weather.png";

const weather=()=>{
    const[city,setCity]=useState("");
    const[temp,settemp]=useState(0);
    const[main,setmain]=useState("Sunny");
    const[humin,sethumin]=useState(0);
    const[speed,setspeed]=useState(0);
    const [loading, setLoading] = useState(false);
    
    const weatherimage={
        Sunny: Sun,
        Snow: snow,
        Clouds: cloud,
        Rain: strom,
    };
    const imgsrc=weatherimage[main] || Sun;
    useEffect(()=>{
        const fetchdo=async()=>{    
            if(city){
                setLoading(true);
                const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7f3c221cd1500fb35a011a1753df6345`);
            const result=await res.json();
            setLoading(false);
            if(result.cod==200)
            {
                setmain(result.weather[0].main);
                sethumin(result.main.humidity);
                setspeed(result.wind.speed);
                settemp(result.main.temp);
            }
            else{
                console.log("city not found");
            }
        }
        };
        fetchdo();
    },[city]);

    const hdsearch=(e)=>{
        e.preventDefault();
        if(city.trim()){
            setCity(city);
        }
    }

    return(
        <>
        <div>
            <form className="container" onSubmit={hdsearch}>
                <div className="flex">
                <input type="text" placeholder="City name.." value={city} className="text" onChange={(e)=>setCity(e.target.value)}></input>
                <div><IoMdSearch /></div></div>
                <div className="img-1"><img src={imgsrc} alt="image" className="cld"></img></div>
                <div className="mid-ele">
                    <p>{temp} °c</p>
                    <p>{main}</p>
                    <p>{city}</p>
                </div>
                <div className="last-ele">
                    <div><img src={Humin} className="hum"></img>
                        <p>{humin} %</p></div>
                    <div><img src={Wind}></img><p>{speed} m/s</p></div>
                </div>
            </form>
        </div>
        </>
    );
};
export default weather;