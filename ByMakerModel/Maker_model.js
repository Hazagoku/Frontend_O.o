import React, {useState, Fragment} from "react";
import CheckBoxMM from "./CheckBox_MM";

const Maker_model = () =>{

    const arrayMaker = [{value:"Nissan"}, {value:"Mitsubishi"}, {value:"Ford"}, {value:"Nissan2"}]
    const arrayModel = ["March", "Sentra", "A1", "A1 Sportback", "A1 No c"]
    const arrayModel2 = [{value:"March"}, {value:"Sentra"}, {value:"A1"}, {value:"A1 Sportback"}, {value:"A1 No c"}]

    const handleInputChange = (event) =>{
        console.log(event.target.value)
    }

    return(
        <Fragment>
            <form>
                <h2> Forma manual </h2>
                <h3> Maker </h3>
                <div>
                    <input type="checkbox" onChange= {handleInputChange}/> Nissan <br/>
                    <input type="checkbox" onChange= {handleInputChange}/> Mitsubishi<br/>
                    <input type="checkbox" onChange= {handleInputChange}/> Ford<br/>
                    <input type="checkbox" onChange= {handleInputChange}/> Nissan2<br/>
                </div>
                <h3> Model </h3>
                <div>
                    <input type= "text" onChange={handleInputChange}/> <br/>
                    <input type= "checkbox" onChange= {handleInputChange}/> {arrayModel[0]} <br/>
                    <input type= "checkbox" onChange= {handleInputChange}/> {arrayModel[1]}< br/>
                    <input type= "checkbox" onChange= {handleInputChange}/> {arrayModel[2]} <br/>
                    <input type= "checkbox" onChange= {handleInputChange}/> {arrayModel[3]} <br/>
                    <input type= "checkbox" onChange= {handleInputChange}/> {arrayModel[4]} <br/>
                </div>

                <h2> Forma iterativa </h2>
                <div>
                    <h3> Maker </h3>
                    {
                        arrayMaker.map((maker) =>{
                            return(<CheckBoxMM {...maker}/> )
                        })
                    }
                </div>
                <div>
                    <h3> Model </h3>
                    <input type= "text" onChange={handleInputChange}/> <br/>
                    {
                        arrayModel2.map((model) =>{
                            return(<CheckBoxMM {...model}/> )
                        })
                    }
                </div>
            </form>
           
        </Fragment>
    );
}

export default Maker_model;

//Cambiar por onClick cuando se vaya a ejecutar algo
//Para los puntos del modo dinamico, quitar con
/*li{
    list-style: none;
}*/