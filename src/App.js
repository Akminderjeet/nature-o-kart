import React from 'react';

// import './App.css';
// import Carousal from './components/Carousal.js'
// import Header from './components/Header.js'
// import Links from './components/Links.js'
// import Head from './components/Head.js'
// import Grid from './components/Grid';
// import Footer from './components/Footer';
// import AboutUS from './components/AboutUs/AboutUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from './components/Login/Login'
import Home from './components/Home-buyer/Home.js'
import Appy from './Appy'
import Products from './components/Products/Products.js';
import Orders from './components/Orders/Orders'
import Myorders from './components/Myorders/Myorders.js';
import AboutUs from './components/AboutUs/AboutUs.js';
// import Sellerhome from './components/Client/src/Sellerhome.js'
import Header from './components/Header.js';
import Frontpage from './components/Frontpage/Frontpage.js';
import Contactus from './components/Contactus/Contactus.js';
function App() {
    return (

        <div className="template">


            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Home />}>

                    </Route>
                    <Route path="/seller" element={< Appy />}>

                    </Route>
                    <Route path="/buyer" element={<Products />}>

                    </Route>
                    <Route path="/request" element={<Orders />}>

                    </Route>
                    <Route path="/history" element={<Myorders />}>

                    </Route>
                    <Route path="/about" element={<AboutUs />}>

                    </Route>
                    <Route path="/front" element={<Frontpage />}>

                    </Route>
                    <Route path="/contact" element={<Contactus />}>

                    </Route>

                </Routes>
            </BrowserRouter>


            {/* < Links /> */}
            {/* <Head /> */}
            {/* <Grid /> */}
            {/* <AboutUS /> */}
            {/* <Footer /> */}
            {/* <button type="button" className="btn btn-secondary">Home</button> */}
        </div>
    );
}

export default App;
