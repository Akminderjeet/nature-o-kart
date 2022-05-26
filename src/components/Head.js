import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css'
import './head.css';
import { Link } from 'react-router-dom';

function Head() {
    return (
        <div className='head mb-5 fle-coll'>
            <h3>This Month's Picks</h3>
            <div className='fle-roww'>
                {/* <h6 className='item btn'>Bags</h6> */}
                <Link to="/buyer" class="btn item">Bags</Link>
                <Link to="/buyer" class="btn item">Vegetables
                </Link>
                <Link to="/buyer" class="btn item">Fruits</Link>
                <Link to="/history" class="btn item">Cart</Link>



            </div>
        </div>
    );

}
export default Head;