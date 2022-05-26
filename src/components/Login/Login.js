import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './Login.css';

function Login() {


    function seller() {
        //  const url = "https://api.publicapis.org/entries";
        window.location.href = "http://localhost:5000/auth/google";
        // const { func } = axios.get(url);
        //console.log(func);
    }
    function buyer() {

        const url = "http://localhost:5000/check";
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


    return (
        <div className='fle-coll'>
            <div> <button type="button" class="btn-login btn-outline-secondary" onClick={seller}>Buyer</button></div>
            <div> <button type="button" class="btn-login btn-outline-secondary" onClick={buyer}>Seller</button></div>



        </div>
    );

}
export default Login;