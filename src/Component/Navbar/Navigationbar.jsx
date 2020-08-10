import React, { useState } from 'react';
import './navigationbar.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navigationbar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className='Navigationbarcss'>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto ">E-Portal</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/profile/">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/logout/">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
