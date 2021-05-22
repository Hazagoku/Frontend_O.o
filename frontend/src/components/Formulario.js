import React, {Fragment, useState} from 'react';

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
        <Fragment>
            <h1>Formulario de auto</h1>
            <from  className="row" onSubmit={SubImputs}>
                <label>Id del usuario</label>
                <div className= "col">
                    <input type="number" 
                    name="user_id"
                    onChange={handleInputChange}/>
                </div>
                <br></br>
                <br></br>
                <label>Marca de Auto</label>
                <div className= "col">


                <label for="marca" ></label>
                    <select name="marca" id="marca" multiple onChange={handleInputChange}>
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
                <br></br>
                <br></br>
                <label>Modelo del auto</label>
                <div className= "col">
                    <label for="modelo" ></label>
                    <select name="modelo" id="modelo" multiple onChange={handleInputChange}>
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
                <br></br>
                <br></br>

                <label>Transmission</label>
                <div className= "col">

                <label for="transmision" ></label>
                    <select name="transmision" id="transmision" multiple onChange={handleInputChange}>
                        <option value="Manual">Manual</option>
                        <option value="Automática">Automática</option>
                    </select>

                </div>

                <br></br>
                <br></br>

                <label>Tipo de auto</label>
                <div className= "col">

                <label for="Tipo de auto" ></label>
                    <select name="type" id="type" multiple onChange={handleInputChange}>
                        <option value="Sedán">Sedán</option>
                        <option value="Coupé">Coupé</option>
                        <option value="SUV">SUV</option>
                        <option value="Wagon">Wagon</option>
                        <option value="Coupé">Coupé</option>
                    </select>
                    
                </div>

                <br></br>
                <br></br>

                
                <label>Traccion</label>
                <div className= "col">

                <label for="traccion" ></label>
                    <select name="traccion" id="traccion" multiple onChange={handleInputChange}>
                        <option value="4x2">4x2</option>
                        <option value="4x4">4x4</option>
                    </select>
                    
                </div>

                <br></br>
                <br></br>
                <label>Poder</label>
                <div className= "col">
                    <input type="number" 
                    //placeholder="Modelo de auto" 
                    name="hpower"
                    onChange={handleInputChange}/>
                </div>

                <br></br>
                <br></br>

                <label>Motor</label>
                <div className= "col">
                <label for="Motor" ></label>
                    <select name="Motor" id="Motor" multiple onChange={handleInputChange}>
                        <option value="1.6L 14">1.6L 14</option>
                        <option value="5.7L V8">5.7L V8</option>
                        <option value="Eléctrico">Eléctrico</option>
                        <option value="1L I3">1L I3</option>
                        <option value="2L TURBO">2L TURBO</option>

                    </select>
                </div>

                <br></br>
                <br></br>

                <label>Gasolina que usa</label>
                <div className= "col">
                <label for="fuel" ></label>
                    <select name="fuel" id="fuel" multiple onChange={handleInputChange}>
                        <option value="Diesel">Diesel</option>
                        <option value="Gasolina">Gasolina</option>
                        <option value="Eléctrico">Eléctrico</option>
                    </select>
                </div>

                <br></br>
                <br></br>
                <label>Año del auto</label>
                <div className= "col">
                    <input type="number" 
                    //placeholder="Modelo de auto" 
                    name="anio"
                    onChange={handleInputChange}/>
                </div>

                <br></br>
                <br></br>
                <label>Ciudad</label>
                <div className= "col">
                    <input type="text" 
                    //placeholder="Modelo de auto" 
                    name="ciudad"
                    onChange={handleInputChange}/>
                </div>

                <br></br>
                <br></br>

                <label>Ubicacion del auto</label>
                <div className= "col">
                <label for="locacion" ></label>
                    <select name="locacion" id="locacion" multiple onChange={handleInputChange}>
                        <option value="KAVAK Puebla">KAVAK Puebla</option>
                        <option value="KAVAK Puerta la Victoria">KAVAK Puerta la Victoria</option>
                        <option value="KAVAK Midtown Guadalajara">KAVAK Midtown Guadalajara</option>
                        <option value="Kavak Cancun">Kavak Cancun</option>
                        <option value="KAVAK Monterrey">KAVAK Monterrey</option>
                    </select>
                </div>

                <br></br>
                <br></br>
                <label>Kilometraje</label>
                <div className= "col">
                    <input type="number" 
                    //placeholder="Modelo de auto" 
                    name="km"
                    onChange={handleInputChange}/>
                </div>

                <br></br>
                <br></br>
                <label>Color del auto</label>
                <div className= "col">
                    <input type="text" 
                    //placeholder="Modelo de auto" 
                    name="color"
                    onChange={handleInputChange}/>
                </div>

                <br></br>
                <br></br>
                <label>Precio del auto</label>
                <div className= "col">
                    <input type="number" 
                    //placeholder="Modelo de auto" 
                    name="precio"
                    onChange={handleInputChange}/>
                </div>
                <div>
                    <button onClick = { () => postData() } > Enviar </button>
                </div>
       
            </from>

        </Fragment>
    );
}

export default Formulario;