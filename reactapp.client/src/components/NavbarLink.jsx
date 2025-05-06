import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';

const NavbarLink = ({ to, activeLink, children }) => {
    return (
        <Nav.Link as={NavLink} to={to} className={activeLink === to ? 'active' : ''}>
            {children}
        </Nav.Link>
    );
};

NavbarLink.propTypes = {
    to: PropTypes.string.isRequired,
    activeLink: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default NavbarLink;
