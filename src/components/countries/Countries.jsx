import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";


const Countries = () => {
    const [country, setcountry] = useState([]);
    const [visitedcountey,setvisitedcountry] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setcountry(data))
    },[])

    const handlemark = countery =>{
        
        const newvisited = [...visitedcountey,countery]
        setvisitedcountry(newvisited)
    }
    return (
        <>
        <div>
            <h2>visited country</h2>
            <ul>
                {
                    visitedcountey.map((county,idx) =><li key={idx}>{county.name.common}</li>)
                    
                    
                }
            </ul>
        </div>
        <div>
            <h3>countries:{country.length}</h3>
            {
                country.map((count,idx)=> <Country key={idx} object={count} handlemark={handlemark}></Country>)
            }
        </div>
        </>   
    );
};

export default Countries;