import React,{useState,useEffect} from 'react';
import '../assets/css/Range.css';

const By_Price = () => {

    const [value, onChange] = useState(74000);

    useEffect(()=>{
        const elem = document.querySelector(".buble");
        if (elem){
            elem.style.left = `${Number(value / 10000)}px`;
        }
    })

    useEffect(()=> {
        const noc = document.getElementById("slidebar");
        if (noc){
            var value = (noc.value-noc.min)/(noc.max-noc.min)*100
            noc.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
        }
    })
    
    return(
        <div className="slider-parent">
            <h3> Precio </h3>
            <input type="range" min="74000" max="1900000" value={value} className="slidebar" id="slidebar"
            onChange={({ target: {value: radius} }) => {onChange(radius);
            }}/>
            <div className="buble">
                ${value}
            </div>
        </div>
    );
}

export default By_Price;
