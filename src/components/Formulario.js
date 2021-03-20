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
        year: ' ',
        marca: ' ',
        status: ' ',
        city: ' ',
        location: ' ',
        km: ' ',
        color: ' ',
        price: ' ',
    })


    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setImputs({
            ...imputs,
            [event.target.name] : event.target.value
        })
    }

    const SubImputs = (event) => {
        event.preventDefault();
    }


    return (
        <Fragment>
            <h1>Formulario de auto</h1>
            <form className="row" onSubmit={SubImputs}>
                <label>Marca de Auto</label>
                <div className= "col">
                    <input type="text" 
                    //placeholder="Marca de auto" 
                    name="marca" 
                    onChange={handleInputChange}/> 
                </div>
                <br></br>
                <br></br>
                <label>Modelo del auto</label>
                <div className= "col">
                    <input type="text" 
                    //placeholder="Modelo de auto" 
                    name="modelo"
                    onChange={handleInputChange}/>
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
                    name="year"
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
                    name="city"
                    onChange={handleInputChange}/>
                </div>

                <br></br>
                <br></br>
                <label>Ubicacion del auto</label>
                <div className= "col">
                    <input type="text" 
                    //placeholder="Modelo de auto" 
                    name="location"
                    onChange={handleInputChange}/>
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
                    name="price"
                    onChange={handleInputChange}/>
                </div>

                <div className= "col">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </Fragment>
    );
}

export default Formulario;