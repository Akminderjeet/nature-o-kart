import React from 'react';
import ReactDOM from 'react-dom';

import './AboutUs.css';
import './Capture.JPG'
function AboutUs() {
    return (
        <div class="section">
            <div class="container">
                <div class="content-section">
                    <div class="title">
                        <h1>Dr. Gurpreet Kaur</h1>
                    </div>
                    <div class="content">
                        <h3>Faculty in Electronics</h3>
                        <p></p>
                        <div class="button">
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div class="social">
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                        <a href=""><i class="fab fa-twitter"></i></a>
                        <a href=""><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="image-section">
                    <img src=" https://media.geeksforgeeks.org/wp-content/uploads/geeksforgeeks-13.png" />
                </div>
            </div>
            <div className="container mt-5">
                <div class="content-section">
                    <div class="title">
                        <h1>Akminderjeet Singh</h1>
                    </div>
                    <div class="content">
                        <h3>CSE,2020-2024   IIITU</h3>
                        <p></p>
                        <div class="button">
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div class="social">
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                        <a href=""><i class="fab fa-twitter"></i></a>
                        <a href=""><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="image-section">
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/geeksforgeeks-13.png" />
                </div>
            </div>


        </div>

    );

}
export default AboutUs;