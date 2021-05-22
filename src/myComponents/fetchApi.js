import React, { useState, useEffect } from "react";

const FetchApi = () => {
    const [value, setValue] = useState([]);
    const [search, setSearch] = useState('');
    const APIdata = async () => {
        const apiData = await fetch("https://covid19.mathdro.id/api/confirmed");

        setValue(await apiData.json());
    };

    useEffect(() => {
        APIdata();
    }, []);

    const filteredValues = value.filter((country) => {
        return country.countryRegion.toLowerCase().includes(search.toLowerCase());
    });
    return (
        <div>
            <nav className="navbar navbar-light bg-light container">
                <form className="form r">
                    <input
                        classNameName="form-control justify-content-cente "
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </form>
            </nav>
            <div className="container mt-4">
                <div className="row">
                    {filteredValues.map((newValue, oldValues) => {
                        return (
                            <div className="col- sm-10 col-md-3 my-4 ">
                                Country <h2>{newValue.countryRegion}</h2>
                                Provience <h4>{newValue.provinceState}</h4>
                               Confirmed Cases <h4>{newValue.confirmed}</h4>
                             Total  Recovered  <h4>{newValue.recovered}</h4>
                             Total  Deaths  <h4>{newValue.deaths}</h4>

                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FetchApi;
