import React, {Fragment, useState} from 'react';

const Formulario = () => {

    const [imputs, setImputs] = useState({
        transmision: ' ',//automatico, standar hibirdo
        type: '',
        traccion: ' ',
        hpower: ' ',
        motor: ' ',
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
            fetch( "http://127.0.0.1:8000/cars/r",{
            method: "post",
            mode: "no-cors",
            body: data
            })
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
                        <option value="1">Nissan</option>
                        <option value="2">General Motors</option>
                        <option value="3">Volkswagen</option>
                        <option value="4">Toyota</option>
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
                        <option value="Opel">Opel</option>
                        <option value="Bocho">Bocho</option>
                    </select>
                </div>
                <br></br>
                <br></br>
                <label>Transmission</label>
                <div className= "col">
                    <input type="text" 
                    //placeholder="Modelo de auto" 
                    name="transmision"
                    onChange={handleInputChange}/>
                </div>

                <br></br>
                <br></br>
                <label>Tipo de auto</label>
                <div className= "col">
                    <input type="text" 
                    //placeholder="Modelo de auto" 
                    name="type"
                    onChange={handleInputChange}/>
                </div>

                <br></br>
                <br></br>
                <label>Traccion</label>
                <div className= "col">
                    <input type="text" 
                    //placeholder="Modelo de auto" 
                    name="traccion"
                    onChange={handleInputChange}/>
                </div>

                <br></br>
                <br></br>
                <label>Poder</label>
                <div className= "col">
                    <input type="text" 
                    //placeholder="Modelo de auto" 
                    name="hpower"
                    onChange={handleInputChange}/>
                </div>

                <br></br>
                <br></br>
                <label>Motor</label>
                <div className= "col">
                    <input type="text" 
                    //placeholder="Modelo de auto" 
                    name="motor"
                    onChange={handleInputChange}/>
                </div>

                <br></br>
                <br></br>
                <label>Gasolina que usa</label>
                <div className= "col">
                    <input type="text" 
                    //placeholder="Modelo de auto" 
                    name="fuel"
                    onChange={handleInputChange}/>
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
                <label>Estado</label>
                <div className= "col">
                    <input type="text" 
                    //placeholder="Modelo de auto" 
                    name="status"
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
                    <input type="text" 
                    //placeholder="Modelo de auto" 
                    name="locacion"
                    onChange={handleInputChange}/>
                </div>

                <label>Id de informacion del auto</label>
                <div className= "col">
                    <input type="number" 
                    name="car_infid"
                    onChange={handleInputChange}/>
                </div>
                <br></br>
                <br></br>

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
                    <button onClick = { () => postData() } > Presioname porfa </button>
                </div>
       
            </from>

        </Fragment>
    );
}

export default Formulario;