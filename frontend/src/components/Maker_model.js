import React, {useState, Fragment} from "react";

const Maker_model = () =>{

    return(
    <Fragment>
        <h2> Marca y modelo</h2>
        <h3> Marca </h3>
        <div>
            {% for brand in marcas %}
            <input type= "checkbox" value="{{ brand }}" name="marca"/> {{brand}} <br/>
            {% endfor %}
        </div>
        <h3> Modelo </h3>

        <div>
            {% for model in modelo %}
            <input type="checkbox" value="{{ model }}" name="modelo" /> {{model}} <br/>
            {% endfor %}
        </div> 
    </Fragment>
    );
}

export default Maker_model;