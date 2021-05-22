import React,{useState} from "react";
import "../assets/css/By_Year.css"

const By_Year = () =>{

    const Years = ["2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011","2010"];
    const [year, setYear] = useState(false);

    return(
        <div className="container">
            <h3> Año </h3>
            <ul className="all_years">
                {
                Years.map((year, index) =>{
                    return(
                        <li className="year_list"><input type="checkbox" className="year" id={"year"+index} value={year}
                        onChange={(e) => {
                            if(e.target.checked){
                                setYear(e.target.value); 
                            }else{
                                    setYear(false); 
                            }
                        }}/><label for={"year"+index} className="year">{year}</label><br/></li>
                    )
                })
                }
            </ul>
            <p>Año: {year}</p>
        </div>
    );
}

export default By_Year;
