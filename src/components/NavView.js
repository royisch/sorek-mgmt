import { render } from 'react-dom'
import React from 'react'
import { connect, Provider } from 'react-redux'
import classnames from 'classnames'
import {Navbar, Nav, NavItem, Badge} from 'react-bootstrap'
import {Link} from 'react-router'

var navbar = {};

var Navi = React.createClass({

  render() {
    return (
      <Navbar inverse fluid staticTop>
        <Navbar.Brand>Sorek Mgmt</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav navbar>
            <NavItem key={1} href="/">Home</NavItem>
            <NavItem key={2} href="#/">Basket<Badge>7</Badge></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

// render NavBar
render(
  <Navi {...navbar} />,
  document.getElementById("navbar")
);
