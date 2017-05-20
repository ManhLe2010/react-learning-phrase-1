import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Link from 'next/link';

/**
 * Simple example of Header using Reacstrap
 * More documents at https://reactstrap.github.io/
 */
class Header extends Component {
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
          <Link href="/"><NavbarBrand>Reactstrap Navbar</NavbarBrand></Link>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="" navbar>
              <NavItem>
                <Link href="/"><NavLink>Home</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link href="/about"><NavLink>About</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link href="/users"><NavLink>Users</NavLink></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
