
import "./App.css";
import Header from "./myComponents/header";
import Image from "./myComponents/images";
import Todos from "./myComponents/todos";
import About from "./myComponents/about";
import Contact from "./myComponents/contact";
import Cards from "./myComponents/cards";
import React, { useEffect, useState } from 'react';
import Footer from "./myComponents/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FetchApi from './myComponents/fetchApi'
import FetchChart from './myComponents/chart'
import World from "./myComponents/world"
import Chart from './myComponents/chart'

// import maps from "./myComponents/googlemaps";

function App() {



  return (
    <>




      <Router>
        <Header searchBar={false} />


        {/* */}

        <Switch>
          <Route
            exact
            path="/"

          >  <Image />  </Route>
          <Route exact path="/cards">
            <div className="container my-3">
              <div className="row">
                <div className="col-md-4 ">

                  <Cards img1={"https://source.unsplash.com/400x200/?django,python"} />
                </div>
                <div className="col-md-4 ">
                  <Cards img1={"https://source.unsplash.com/400x200/?node,javascript"} />

                </div>
                <div className="col-md-4">

                  <Cards img1={"https://source.unsplash.com/400x200/?c++,c#"} />
                </div>
              </div>

            </div>
            <div className="container my-3">
              <div className="row">
                <div className="col-md-4 ">

                  <Cards img1={"https://source.unsplash.com/400x200/?coding,c#"} />
                </div>
                <div className="col-md-4 ">
                  <Cards img1={"https://source.unsplash.com/400x200/?vuejs,reactjs"} />

                </div>
                <div className="col-md-4">

                  <Cards img1={"https://source.unsplash.com/400x200/?javascript,nextjs"} />
                </div>
              </div>

            </div>

          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />

          </Route>
          <Route exact path="/api">
            < World />
            <FetchApi />

          </Route>

          <Route exact path="/chart">
            < Chart />

          </Route>




        </Switch>


        <Footer />



      </Router>
    </>
  );
}

export default App;
