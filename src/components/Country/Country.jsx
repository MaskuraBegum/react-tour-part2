import { useState } from 'react';
import './country.css'

const Country = ({object,handlemark}) => {
    const {name,flags} = object;
    const [visited, setvisited]= useState(false);

const handleclick =()=>{
    setvisited(!visited)
}
    
    return (
        <div className='box'>
            <h4>name:{name.common}</h4>
            <img src={flags.png} alt="" />
            <button onClick={() => handlemark(object)}>mark visited</button>
            <button onClick={handleclick}>{visited? 'visited': 'going'}</button>
            {visited?'i visited the country':'i want to go there'}
        </div>
    );
};

export default Country;