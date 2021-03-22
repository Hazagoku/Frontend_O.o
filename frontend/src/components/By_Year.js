import React, {useState, Fragment} from "react";
import CheckBoxMM from "./CheckBox_MM";

const By_Year = () =>{

    const array_years = [{value:"2010"}, {value:"2011"}, {value:"2012"}, {value:"2013"},
                    {value:"2014"}, {value:"2015"}, {value:"2016"}, {value:"2017"},
                    {value:"2018"}, {value:"2019"}, {value:"2020"}]

    return(
        <Fragment>
            <form>
                <h1> Filter By Year </h1>
                <div>
                    {
                        array_years.map((year) =>{
                            return(<CheckBoxMM {...year}/> )
                        })
                    }
                </div>
            </form>
           
        </Fragment>
    );
}

export default By_Year;
