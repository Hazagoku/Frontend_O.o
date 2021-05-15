import React, {useState, Fragment} from "react";
import CheckBoxMM from "./CheckBox_MM";

const Por_Kilo = () =>{
    
    state = {
        value: ''
    };
    
    getValue = (event) => {
        cosole.log(event.target.value)
        this.setState({ value = event.target.value});
    }

    TakeSub = () => {
        event.preventDefault();
        const valu_kilo = this.state.value;
    }

    return(
        <Fragment>
            <form>
                <h1> Filtro por  </h1>
                <div>
                <input type="number" onChange= {this.getValue}/>
                <button onClick = {this.TakeSub}>Submit</button>
                </div>
                <div>
                    {
                        valu_kilo.map((kilometraje) =>{
                            return(<CheckBoxMM {...kilometraje}/> )
                        })
                    }
                </div>
            </form>
           
        </Fragment>
    );
}

export default Por_Kilo;