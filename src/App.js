
import "./App.css";
import Header from "./myComponents/header";
import Image from "./myComponents/images";
import Event from './myComponents/getEvents'
import About from "./myComponents/about";
import Contact from "./myComponents/contact";
import Cards from "./myComponents/cards";
import React from 'react';
import Footer from "./myComponents/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FetchApi from './myComponents/fetchApi'
import Update from './myComponents/updateData'
import World from "./myComponents/world"
import Chart from './myComponents/chart'
import Scroll from './myComponents/scrollToTop'
import NoPage from './myComponents/'
import MessengerCustomerChat from 'react-messenger-customer-chat';

// import maps from "./myComponents/googlemaps";

function App() {
  return (
    <>
      <MessengerCustomerChat
        pageId="111241211239691"
        appId="331146308503808"
      />
      <Router>
        <Scroll />
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
          <Route exact path="/events">
            < Event />

          </Route>

          <Route exact path="/update">
            < Update />

          </Route>





        </Switch>


        <Footer />



      </Router>
    </>
  );
}

export default App;






