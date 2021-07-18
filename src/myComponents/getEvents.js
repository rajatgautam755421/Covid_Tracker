import React, { useState, useEffect } from 'react'
const GetEvents = () => {
    const [value, setValue] = useState([]);
    const APIdata = async () => {
        try {
            const apiData = await fetch("http://localhost:5000/showevents");
            console.log(apiData);
            setValue(await apiData.json());
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        APIdata();
    }, []);
    return (
        <div>
            <div className="container">
                {
                    value.map((newValue) => {
                        return (
                            <>
                                <h3>   {newValue.nameOfEvent}</h3>
                                <h5>   {newValue.descOfEvent}</h5>
                            </>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default GetEvents
