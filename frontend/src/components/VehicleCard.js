import React from 'react';
import '../assets/css/VehicleCard.css';
import icono from "../assets/images/icon_fav.png"

const VehicleCard = () =>{

    var precio = "234,999";
    var marca = "Nissan";
    var modelo = "Sentra Sense";
    var year = 2019;
    var transmision = "Manual";
    var ciudad = "Puebla";
    var mensualidad = "3,851"

    return(
        <div className="contenedor">
            <div className="iconfav">
                <img src={icono} alt = "icono de favorito"/>
            </div>
            <div className="precio">
                {"$" + precio}
            </div>
            <div className="marca-modelo">
                {marca + " " + modelo}
            </div>
            <div className="anio-trans">
                {year + " | " + transmision}
            </div>
            <div className="ciudad">
                {ciudad}
            </div>
            <div className="mensualidad">
                {"Desde $" + mensualidad + " al mes"}
            </div>
        </div>
    );
}

export default VehicleCard;