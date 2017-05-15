import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Link from 'next/link';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    return (
      <div>
      <Navbar color="faded" light toggleable>
        <NavbarToggler right onClick={this.toggle} />
        <Link href="/"><NavbarBrand>reactstrap</NavbarBrand></Link>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="" navbar>
            <NavItem>
              <Link href="/"><NavLink>Home</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link href="/about"><NavLink>About</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link href="/donate"><NavLink>Donate</NavLink></Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default Header;
