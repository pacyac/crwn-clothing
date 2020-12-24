import React from "react";

import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import ShoppingIcon from '../cart/cart-component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';


import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';

import { auth } from '../../firebase/firebase.utilis';

import "./header.style.scss";

const Header = ({currentUser,hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/"> <Logo  className="logo"/>  </Link>

        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            
            {currentUser ? (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>) : <Link className="option" to="/signin">SIGN IN</Link>}
            <ShoppingIcon />
        </div>

        { hidden ? null: <CartDropDown />}

    </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})


export default connect(mapStateToProps)(Header);//the connect will pass the whole state the each inserted parameters