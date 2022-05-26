import React from 'react';
import ReactDOM from 'react-dom';

import './Carousal.css';
import Car1 from './Car1';
import Car2 from './Car2';
import Car3 from './Car3';
function Carousal() {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <Car1></Car1>
                </div>
                <div class="carousel-item">
                    <Car2></Car2>
                </div>
                <div class="carousel-item">
                    <Car3></Car3>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );

}
export default Carousal;