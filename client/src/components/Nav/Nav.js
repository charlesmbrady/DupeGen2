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
    const [toggle, setToggle] = useState(false);

    const toggler = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        console.log("hello Nav bar");
    }, []);


    return (
        <div>
            <Navbar color="light" light expand="md">
                <Link to="/" className="navbar-brand">Charles Brady</Link>
                <NavbarToggler onClick={toggler} />
                <Collapse isOpen={toggle} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://www.github.com" target="_blank">GitHub</NavLink>
                        </NavItem>
                        <NavItem>
                            <Link to="/about" className="nav-link">About</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/portfolio" className="nav-link">Portfolio</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/resources" className="nav-link">Resources</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>

    );

}

export default Navi;
