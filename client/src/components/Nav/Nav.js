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
                <a href="https://github.com/charlesmbrady/DupeGen2" target="_blank" className="navbar-brand">DupeGen</a>
                <NavbarToggler onClick={toggler} />
                {/* <Collapse isOpen={toggle} navbar> */}
                    {/* <Nav className="ml-auto" navbar> */}
                        
                        {/* <NavItem> */}
                            {/* TODO: make this open a modal with about info */}
                            {/* <Link to="/about" className="nav-link">About</Link> */}
                        {/* </NavItem> */}
                    {/* </Nav> */}
                {/* </Collapse> */}
            </Navbar>
        </div>

    );

}

export default Navi;
