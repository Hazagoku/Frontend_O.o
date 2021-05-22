import React from "react";
import Maker_model from "./Maker_model";
import By_Year from "./By_Year";
import By_Price from "./By_Price";
import VehicleCard from "./VehicleCard";
import By_Km from "./By_Km";
import By_Color from "./By_Color";
import Paginacion from "./Paginacion";

const Home = () =>{

    return(
        <div>
            <div className="Filtros">
                <Maker_model/>
                <By_Year/>
                <By_Price/>
                <By_Km/>
                <By_Color/>
                <VehicleCard/> <VehicleCard/>
                <Paginacion/>
                {/*   
                
                */}
            </div>

            {/*<div className="barra_vertical"/>*/}
        </div>
    );
}

export default Home;