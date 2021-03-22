
import React from 'react'

const CheckBox = props => {

    const handleInputChange = (event) =>{
        console.log(event.target.value)
    }
    return (
        <li>
            <input type="checkbox" onChange= {handleInputChange} value={props.value} /> {props.value}
        </li>
    )
}

export default CheckBox