import React, {Component} from 'react';
import '../assets/css/VehicleCard.css';
import icono from "../assets/images/icon_fav.png";
import icono2 from "../assets/images/icon_fav2.png";

var precio = "234,999";
var marca = "Nissan";
var modelo = "Sentra Sense";
var year = 2019;
var transmision = "Manual";
var ciudad = "Puebla";
var mensualidad = "3,851"


class VehicleCard extends Component{
	render(){
        return (
            <div class="contenedor">
                <div class="iconfav">
                    <img src={icono} alt = "xd"/>
                </div>
                <div class="precio">
                    {"$" + precio}
                </div>
                <div class="marca-modelo">
                  	{marca + " " + modelo}
                </div>
                <div class="anio-trans">
                    {year + " | " + transmision}
                </div>
                <div class="ciudad">
                	{ciudad}
              	</div>
                <div class="mensualidad">
                    {"Desde $" + mensualidad + " al mes"}
                </div>
            </div>
        );
	}
}

export default VehicleCard;