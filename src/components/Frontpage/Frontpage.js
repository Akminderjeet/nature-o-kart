import React from "react";
import './Frontpage.css'

function Frontpage() {

    return (
        <div className="container-fluid front-page row">
            <div className="col-md-8"></div>
            <div className="col-md-4 front fle-col-front">
                <button className="a" onClick={() => { window.location.href = "http://localhost:5000/auth/google"; }}> Login With Google</button></div>

        </div>

    )

}


export default Frontpage;