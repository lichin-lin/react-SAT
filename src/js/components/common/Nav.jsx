import React, { Component } from 'react'
import {
    Navbar,
    NavItem,
    Nav
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
export default class extends Component {
    render () {
        return (
        <Navbar fixedTop collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <LinkContainer to="/">
                        <a href="#">SAT.tw</a>
                    </LinkContainer>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <LinkContainer to="/setting">
                        <NavItem>setting</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/SAT">
                        <NavItem>SAT</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/chart">
                        <NavItem>chart</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/firebase">
                        <NavItem>firebase</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}
