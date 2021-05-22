import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";

const Chart = () => {
  const [value, setValue] = useState([]);

  const APIdata = async () => {
    const apiData = await fetch(
      "https://coronavirus-19-api.herokuapp.com/countries"
    );

    setValue(await apiData.json());
  };

  useEffect(() => {
    APIdata();
  }, []);
  return (
    <>
      <div className="container mt-5">
        <h3 className="mx-4 text-center">World COVID Summary In BAR Chart</h3>
        {value.slice(0, 1).map((newValue) => {
          return (
            <Bar
              data={{
                labels: [
                  "Total Cases",
                  "Total Deaths",
                  "Total Recovered",
                  "Active Cases",
                  "Critical Cases",
                  "Cases Per One Million",
                ],
                datasets: [
                  {
                    label: "COVID Details",
                    data: [
                      `${newValue.cases}`,
                      `${newValue.deaths}`,
                      `${newValue.recovered}`,
                      `${newValue.active}`,
                      `${newValue.critical}`,
                      `${newValue.casesPerOneMillion}`,
                    ],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              width={100}
              height={50}
            />
          );
        })}
      </div>

      {/* LineChart */}

      <div className="container mt-5">
        <h3 className="text-center">World COVID Summary In LINE Chart</h3>
        <div className="row">
          <div className="col-md-12">
            {value.slice(0, 1).map((newValue) => {
              return (
                <Line
                  data={{
                    labels: [
                      "Total Cases",
                      "Total Deaths",
                      "Total Recovered",
                      "Active Cases",
                      "Critical Cases",
                      "Cases Per One Million",
                    ],
                    datasets: [
                      {
                        label: "COVID DETAILS",
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: "rgba(75,192,192,1)",
                        borderColor: "rgba(0,0,0,1)",
                        borderWidth: 2,
                        data: [
                          `${newValue.cases}`,
                          `${newValue.deaths}`,
                          `${newValue.recovered}`,
                          `${newValue.active}`,
                          `${newValue.critical}`,
                          `${newValue.casesPerOneMillion}`,
                        ],
                      },
                    ],
                  }}
                  width={100}
                  height={50}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
