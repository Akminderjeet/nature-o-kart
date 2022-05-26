import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './Header.css';
import axios from 'axios';
function Header() {
    function handle() {
        const url = "http://localhost:5000/logout";
        const func = async () => {
            await axios.get(url, {
                withCredentials: true
            }).then((response) => {
                console.log("asdfsdf");
                console.log(response);

            })
        }
        func()
    }

    return (<div className="row">
        <div className="col-md-2 name" > Nature-o-Cart</div>
        <div className="col-md-4" >
            <div className='tabs'>
                {/* <button type="button" class="btn "></button> */}
                <Link to="/" class="btn">Home</Link>
                <Link to="/about" class="btn">AboutUS</Link>


                <Link to="/contact" class="btn">Contact Us</Link>
                <Link to="/buyer" class="btn">Products</Link>
                <Link to="/contact" class="btn">Help</Link>

            </div>

        </div>
        <div className='col-md-2'>

        </div>
        <div className='col-md-4'>
            <div className='tabs'>
                <Link to="/history" class="btn">Cart</Link>
                <Link to="/seller" class="btn">Sell Products</Link>
                <Link to="/front" onClick={handle} class="btn">Logout</Link>

            </div>
        </div>


    </div>);

}
export default Header;