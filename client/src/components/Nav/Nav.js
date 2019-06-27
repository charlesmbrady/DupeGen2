import React, { useEffect, useState } from "react";
import './style.css';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

function Navi() {

    useEffect(() => {
        console.log("hello Nav bar");
    }, []);


    return (
        <div>
            <Navbar className="my-nav" color="light" light expand="md">
                <a href="/" className="navbar-brand">DupeGen</a>

            </Navbar>
        </div>

    );

}

export default Navi;
