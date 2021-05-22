import React, {useState, Fragment, useEffect} from "react";
import "../assets/css/Maker_model.css"

const Maker_model = () =>{

    const Maker = [
        {name: "Acura", models: ["ILX", "MDX", "RDX", "RLX"]},
        {name: "Alfa Romeo", models: ["ILX", "MDX", "RDX", "RLX", "JS"]}, 
        {name: "Audi", models: ["ILX", "MDX", "RDX", "RLX"]}, 
        {name: "Baic", models: ["ILX", "MDX", "RDX"]}]

    const MakerName = ["Acura", "Alfa Romeo", "Audi", "Baic"]

    const [maker, setMaker] = useState(false);
    const [model, setModel] = useState(false);

    const [searchTerm, setSearchTerm] = React.useState("");
    const handleChange = (e) => {setSearchTerm(e.target.value);};

    const results = !searchTerm
    ? MakerName
    : MakerName.filter(makers =>
        makers.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

    return(
    <div className="container">
        <h3> Marca y modelo</h3>
            <h4>Marca</h4>
            <input type= "text" className="search_maker" placeholder="Search" value={searchTerm} onChange={handleChange}/>
            <ul className="list_makers">
            {results.map((item, index) => (
            <li className="makers"><input type="checkbox" className="maker_model" id={"maker"+index} value={item}
            onChange={(e) => {
                if(e.target.checked){
                    setMaker(e.target.value); 
                }else{
                    setMaker(false); 
                }
            }}/><label for={"maker"+index} className="maker_model">{item}</label><br/></li>
            ))}

            {/*Arreglo para generar los checkbox de la marca de autos
            {Maker.map((makers, index) => {
                return(
                    <li key={index}><input type= "checkbox" value={makers.name}
                    onChange={(e) => {
                        if(e.target.checked){
                            setMaker(e.target.value); 
                        }else{
                            setMaker(false); 
                        }
                    }}/> {makers.name} <br/></li>
                )
            })  
            }*/}
            </ul>

            <h4>Modelo</h4>
            {/*Arreglo para generar los checkbox de los modelos de marca*/}
            <ul className="list_makers">
            {maker && Maker.find(a => a.name === maker).models.map((model, index) => {
                return(
                    <li className="makers" key={index}><input type= "checkbox" className="maker_model2" id={"model"+index} value={model} 
                    onChange={(e) => {
                        if(e.target.checked){
                            setModel(e.target.value); 
                        }else{
                            setModel(false); 
                        }
                    }}/><label for={"model"+index} className="maker_model2">{model}</label><br/></li>
                )
            })
            }
            </ul>
            <p>Marca: {maker} Modelo: {model}</p>

    </div>
    );
}

export default Maker_model;
