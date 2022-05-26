import React from 'react';

import './Home.css';
import Carousal from '../Carousal'
import Header from '../Header.js'
import Links from '../Links.js'
import Head from '../Head.js'
import Grid from '../Grid';
import Footer from '../Footer';
import AboutUS from '../AboutUs/AboutUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../Login/Login'

function Home() {
    return (

        <div className="template">

            < Header />
            <Carousal />
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}>

                    </Route>
                    <Route path="/this" element={< Links />}>

                    </Route>
                    <Route path="/that" element={<Grid />}>

                    </Route>
                </Routes>
            </BrowserRouter> */}

            {/* <Login /> */}
            < Links />
            <Head />
            <Grid />
            {/* <AboutUS /> */}
            {/* AboutUS not responsive */}
            <Footer />
            {/* <button type="button" className="btn btn-secondary">Home</button> */}
        </div>
    );
}

export default Home;
