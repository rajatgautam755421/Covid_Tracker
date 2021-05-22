import React, { useState, useEffect } from 'react'

const Worldmap = () => {
    const [value, setValue] = useState([]);


    const APIdata = async () => {
        const apiData = await fetch("https://coronavirus-19-api.herokuapp.com/countries");
        setValue(await apiData.json());
    };
    useEffect(() => {
        APIdata();
    }, []);
    return (
        <div>
            <div className="container mt-4">
                <div className="row ">

                    {value.slice(0, 1).map((newValue, oldValues) => {

                        return (

                            <div className="col-md-12">
                                <div className="uk-card uk-card-hover uk-card-primary .uk-card-small uk-card-body uk-width-1-1@m ">

                                    <h2 className="text-center">{newValue.country}</h2>
                                    <h6 className="text-center">Total Cases  -  {newValue.cases}</h6>
                                    <h6 className="text-center">Today Cases  -  {newValue.todayCases}</h6>
                                    <h6 className="text-center"> Total Deaths  -  {newValue.deaths}</h6>
                                    <h6 className="text-center">Today Recovered  -  {newValue.recovered}</h6>
                                    <h6 className="text-center">Active Cases  -  {newValue.todayDeaths}</h6>
                                    <h6 className="text-center">Critical Cases  -  {newValue.critical}</h6>
                                    <h6 className="text-center">Cases In One Million  -  {newValue.casesPerOneMillion}</h6>



                                </div>

                            </div>





                        );

                    })}





                </div>
            </div>



        </div>
    )
}

export default Worldmap
