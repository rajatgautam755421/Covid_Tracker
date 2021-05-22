import React, { useState, useEffect } from "react";


const FetchApi = () => {
    const [value, setValue] = useState([]);

    const [search, setSearch] = useState('');
    const APIdata = async () => {
        const apiData = await fetch("https://coronavirus-19-api.herokuapp.com/countries");


        setValue(await apiData.json());

    };



    useEffect(() => {

        APIdata();


    }, []);

    const filteredValues = value.filter((country1) => {
        return country1.country.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div>

            <div className="input-group container mt-4">
                <div className="form-outline w-100">
                    <h3> Search For Country</h3>
                    <input type="search" id="form1" className="form-control " onChange={(e) => setSearch(e.target.value)} />

                </div>

            </div>

            {/* onChange={(e) => setSearch(e.target.value)} */}
            <div className="container mt-4">
                <div className="row">

                    {filteredValues.map((newValue, oldValues) => {

                        return (
                            <div className="col- 10 col-md-4 my-4 text-center">
                                <div className="uk-card uk-card-hover uk-card-default .uk-card-small uk-card-body uk-width-2-1@m uk-height-2-1@m">

                                    <h2 className="text-left">{newValue.country}</h2>
                                    <h6 className="text-left">Total Cases  -  {newValue.cases}</h6>
                                    <h6 className="text-left">Today Cases  -  {newValue.todayCases}</h6>
                                    <h6 className="text-left"> Total Deaths  -  {newValue.deaths}</h6>
                                    <h6 className="text-left">Today Recovered  -  {newValue.recovered}</h6>
                                    <h6 className="text-left">Active Cases  -  {newValue.todayDeaths}</h6>
                                    <h6 className="text-left">Critical Cases  -  {newValue.critical}</h6>
                                    <h6 className="text-left">Cases In One Million  -  {newValue.casesPerOneMillion}</h6>
                                </div>
                                {/* Country <h2>{newValue.countryRegion}</h2>
                                Provience <h4>{newValue.provinceState}</h4>
                               Confirmed Cases <h4>{newValue.confirmed}</h4>
                             Total  Recovered  <h4>{newValue.recovered}</h4>
                             Total  Deaths  <h4>{newValue.deaths}</h4> */}

                            </div>

                        );

                    })}





                </div>
            </div>
        </div>
    );
};

export default FetchApi;
