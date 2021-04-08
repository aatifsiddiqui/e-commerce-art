import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from "../logo.png"
import styled from 'styled-components'
import { ButtonContainer } from './Button'
export default class  extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer className="ButtonContainer">
                        <span className="mr-2">
                        <i className="fas fa-cart-plus"></i>
                        </span>
                         my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1rem;
    text-transform:capitalize;
}
`
