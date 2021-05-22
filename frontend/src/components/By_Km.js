import React,{useState,useEffect} from 'react';
import '../assets/css/Range.css';

const By_Km = () => {

    const [value, onChange] = useState(125000);

    useEffect(()=>{
        const elem = document.querySelector(".buble2");
        if (elem){
            elem.style.left = `${Number(value / 700)}px`;
        }
    })

    useEffect(()=> {
        const noc = document.getElementById("slidebar2");
        if (noc){
            var value = (noc.value-noc.min)/(noc.max-noc.min)*100
            noc.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
        }
    })
    
    return(
        <div className="slider-parent">
            <h3> Kilometraje </h3>
            <input type="range" min="0" max="125000" value={value} className="slidebar" id="slidebar2"
            onChange={({ target: {value: radius} }) => {onChange(radius);
            }}/>
            <div className="buble2">
                {value} km
            </div>
        </div>
    );
}

export default By_Km;