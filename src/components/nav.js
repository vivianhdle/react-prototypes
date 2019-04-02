import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';

export default props=>(
    <ul className="nav nav-tabs mt-3">
        <li className="nav-item">
            <NavLink activeClassName="active selected" exact className="nav-link" to="/">Welcome</NavLink>
        </li>
        <li className="nav-item">
            <NavLink activeClassName="active selected" className="nav-link" to="/macarons">Our Macarons</NavLink>
        </li>
        <li className="nav-item">
            <NavLink activeClassName="active selected" className="nav-link" to="/giftandparties">Gift & Parties</NavLink>
        </li>
        <li className="nav-item">
            <NavLink activeClassName="active selected" className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
    </ul>
)