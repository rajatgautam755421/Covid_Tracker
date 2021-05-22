
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

// import maps from "./myComponents/googlemaps";

function App() {




  const onDelete = () => {
    console.log("Deleted");
  };
  let todos = [
    {
      sno: 1,
      title: "Go to market",
      desc: "Please go to the market",
    },
    {
      sno: 2,
      title: "Do Homework",
      desc: "Please do  the homework",
    },
    {
      sno: 1,
      title: "Coding",
      desc: "Please Code",
    },
    {
      sno: 1,
      title: "Go to pharmacy",
      desc: "Please go to pharmacy",
    },
  ];
  return (
    <>




      <Router>
        <Header searchBar={false} />


        {/* */}

        <Switch>
          <Route
            exact
            path="/"

          >  <Image />  <Todos todos={todos} onDelete={onDelete} /> </Route>
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
            <FetchApi />

          </Route>


        </Switch>


        <Footer />



      </Router>
    </>
  );
}

export default App;
