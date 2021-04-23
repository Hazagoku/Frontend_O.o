import React from 'react';
import '../assets/css/By_Color.css';

const By_Color = () =>{
    
    return(
        <ul class="colores">
            <div class ="Nombre Filtro">
                <h1>Color</h1>
            </div>
            <div>
                <li> <a href="#/colores" class = "Amarillo"> Amarillo </a> </li>
                <li> <a href="#/colores" class= "Azul"> Azul </a> </li>
                <li> <a href="#/colores" class= "Beige"> Beige  </a> </li>
            </div>
            <div>
                <li> <a href="#/colores" class= "Blanco"> Blanco  </a> </li>
                <li> <a href="#/colores" class= "Cafã"> Cafã </a> </li>
                <li> <a href="#/colores" class= "Café"> Café </a> </li>
            </div>
            <div>
                <li> <a href="#/colores" class= "Dorado"> Dorado </a> </li>
                <li> <a href="#/colores" class= "Gris"> Gris </a> </li>
                <li> <a href="#/colores" class= "Morado"> Morado </a> </li>
            </div>
            <div>
                <li> <a href="#/colores" class= "Naranja"> Naranja </a> </li>
                <li> <a href="#/colores" class= "Negro"> Negro </a> </li>
                <li> <a href="#/colores" class= "Otro"> Otro </a> </li>
            </div>
            <div>
                <li> <a href="#/colores" class= "Plateado"> Plateado </a> </li>
                <li> <a href="#/colores" class= "Rojo"> Rojo </a> </li>
                <li> <a href="#/colores" class= "Verde"> Verde </a> </li>
            </div>
        </ul>
    );
}

export default By_Color;