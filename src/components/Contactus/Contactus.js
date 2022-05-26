import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './Contactus.css';

function Contactus() {
    const [contact, setcontact] = useState({
        name: '', email: '', contact: '', message: ''
    })
    function handle() {
        const url = 'http://localhost:5000/contactsave';
        axios.post(url, contact);
    }


    return (
        <div class="container-contact">
            <div class="contact-box">
                <div class="left"></div>
                <div class="right">
                    <h2>Contact Us</h2>
                    <input type="text" class="field" placeholder="Your Name" onChange={(e) => setcontact({ ...contact, name: e.target.value })} />
                    <input type="text" class="field" placeholder="Your Email" onChange={(e) => setcontact({ ...contact, email: e.target.value })} />
                    <input type="text" class="field" placeholder="Phone" onChange={(e) => setcontact({ ...contact, contact: e.target.value })} />
                    <textarea placeholder="Message" class="field" onChange={(e) => setcontact({ ...contact, message: e.target.name })}></textarea>
                    <button class="btn-contact" onClick={handle}>Send</button>
                </div>
            </div>
        </div>
    );

}
export default Contactus;