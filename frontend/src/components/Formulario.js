import React, {Fragment, useState} from 'react';
import "../assets/css/Formulario.css";

const Formulario = () => {

    const [imputs, setImputs] = useState({
        transmision: ' ',//automatico, standar hibirdo
        type: '',
        traccion: ' ',
        hpower: 0,
        Motor: ' ',
        modelo: ' ',
        fuel: ' ',
        anio: 0,
        marca: ' ',
        status: ' ',
        ciudad: ' ',
        locacion: ' ',
        km: 0,
        color: ' ',
        precio: 0,
        user_id: 0,
        car_infid: 0,
    })


    const handleInputChange = (event) => {
        console.log(event.target.value)
        setImputs({
            ...imputs,
            [event.target.name] : event.target.value
        })
    }

    const SubImputs = (event) => {
        event.preventDefault();
    }


    function postData() {
            const data = new FormData();
            data.append("user_id",imputs.user_id);
            data.append("ciudad",imputs.ciudad);
            data.append("locacion",imputs.locacion);
            data.append("km",imputs.km);
            data.append("color",imputs.color);
            data.append("precio",imputs.precio);
            data.append("car_infid",imputs.car_infid);
            data.append("marca",imputs.marca);
            data.append("modelo",imputs.modelo);
            data.append("anio",imputs.anio);
            data.append("trans",imputs.transmision);
            data.append("type",imputs.type);
            data.append("traccion",imputs.traccion);
            data.append("hpower",imputs.hpower);
            data.append("Motor",imputs.Motor);
            data.append("fuel",imputs.fuel);
            fetch( "http://127.0.0.1:8000/cars/r",{
            method: "post",
            mode: "no-cors",
            body: data
            })
        console.log("Auto agregado")
    }

    return (
        <div className="contenedor_form">
            <h2 className="titulo_form">Formulario de venta de auto</h2>
            <from  className="row" onSubmit={SubImputs}>

                <div className= "col">
                    <label className="label_form">Id del usuario</label>
                    <input type="number" name="user_id" className="text_form" onChange={handleInputChange}/>
                </div>
                
                <div className= "col">
                    <label for="marca" className="label_form">Marca de Auto</label>
                    <select name="marca" id="marca" className="text_form" onChange={handleInputChange}>
                        <option value="Nissan">Nissan</option>
                        <option value="General Motors">General Motors</option>
                        <option value="Volkswagen">Volkswagen</option>
                        <option value="Dodge">Dodge</option>
                        <option value="Mazda">Mazda</option>
                        <option value="Infiniti">Infiniti</option>
                        <option value="Smart">Smart</option>
                        <option value="Mitsubishi">Mitsubishi</option>
                        <option value="Audi">Audi</option>
                        <option value="Ford">Ford</option>
                    </select>   
                </div>

                <div className= "col">
                    <label for="modelo" className="label_form">Modelo del auto</label>
                    <select name="modelo" id="modelo" className="text_form" onChange={handleInputChange}>
                        <option value="Volvo">Volvo</option>
                        <option value="Saab">Saab</option>
                        <option value="Charger R/T">Charger R/T</option>
                        <option value="Sentra Sense">Sentra Sense</option>
                        <option value="Lobo Crew Cab XLT">Lobo Crew Cab XLT</option>
                        <option value="CX-5 | Grand Touring">CX-5 | Grand Touring</option>
                        <option value="Fortwo Coupé">Fortwo Coupé</option>
                        <option value="Model S 85 D">Model S 85 D</option>
                        <option value="Jetta A6 Trendline">Jetta A6 Trendline</option>
                        <option value="Q50 Perfection">Q50 Perfection</option>
                    </select>
                </div>

                <div className= "col">
                    <label for="transmision" className="label_form">Transmisión</label>
                    <select name="transmision" id="transmision" className="text_form" onChange={handleInputChange}>
                        <option value="Manual">Manual</option>
                        <option value="Automática">Automática</option>
                    </select>
                </div>

                <div className= "col">
                    <label for="Tipo de auto" className="label_form">Tipo de auto</label>
                    <select name="type" id="type" className="text_form" onChange={handleInputChange}>
                        <option value="Sedán">Sedán</option>
                        <option value="Coupé">Coupé</option>
                        <option value="SUV">SUV</option>
                        <option value="Wagon">Wagon</option>
                        <option value="Coupé">Coupé</option>
                    </select>   
                </div>

                <div className= "col">
                    <label for="traccion" className="label_form">Tracción</label>
                    <select name="traccion" id="traccion" className="text_form" onChange={handleInputChange}>
                        <option value="4x2">4x2</option>
                        <option value="4x4">4x4</option>
                    </select>
                </div>

                
                <div className= "col">
                    <label className="label_form">Poder</label>
                    <input type="number" name="hpower" className="text_form" onChange={handleInputChange}/>
                </div>

                <div className= "col">
                    <label for="Motor" className="label_form">Motor</label>
                    <select name="Motor" id="Motor" className="text_form" onChange={handleInputChange}>
                        <option value="1.6L 14">1.6L 14</option>
                        <option value="5.7L V8">5.7L V8</option>
                        <option value="Eléctrico">Eléctrico</option>
                        <option value="1L I3">1L I3</option>
                        <option value="2L TURBO">2L TURBO</option>
                    </select>
                </div>

                <div className= "col">
                    <label for="fuel" className="label_form">Gasolina que usa</label>
                    <select name="fuel" id="fuel" className="text_form" onChange={handleInputChange}>
                        <option value="Diesel">Diesel</option>
                        <option value="Gasolina">Gasolina</option>
                        <option value="Eléctrico">Eléctrico</option>
                    </select>
                </div>

                
                <div className= "col">
                    <label className="label_form">Año del auto</label>
                    <input type="number" className="text_form" name="anio" onChange={handleInputChange}/>
                </div>

                
                <div className= "col">
                    <label className="label_form">Ciudad</label>
                    <input type="text" className="text_form" name="ciudad" onChange={handleInputChange}/>
                </div>

                <div className= "col">
                <label for="locacion" className="label_form">Ubicacion del auto</label>
                    <select name="locacion" id="locacion" className="text_form" onChange={handleInputChange}>
                        <option value="KAVAK Puebla">KAVAK Puebla</option>
                        <option value="KAVAK Puerta la Victoria">KAVAK Puerta la Victoria</option>
                        <option value="KAVAK Midtown Guadalajara">KAVAK Midtown Guadalajara</option>
                        <option value="Kavak Cancun">Kavak Cancun</option>
                        <option value="KAVAK Monterrey">KAVAK Monterrey</option>
                    </select>
                </div>

                
                <div className= "col">
                    <label className="label_form">Kilometraje</label>
                    <input type="number" className="text_form" name="km" onChange={handleInputChange}/>
                </div>

                
                <div className= "col">
                    <label className="label_form">Color del auto</label>
                    <input type="text" className="text_form"name="color" onChange={handleInputChange}/>
                </div>

                <div className= "col">
                    <label className="label_form">Precio del auto</label>
                    <input type="number" className="text_form" name="precio" onChange={handleInputChange}/>
                </div>
                <div>
                    <button className= "button_form" onClick = { () => postData() } > Enviar </button>
                </div>
       
            </from>

        </div>
    );
}

export default Formulario;
