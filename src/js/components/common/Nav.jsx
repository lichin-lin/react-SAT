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
                    <LinkContainer to="/SAT">
                        <NavItem>score</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/chart">
                        <NavItem>chart</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <NavItem>home</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}
