import React from 'react';
import ReactDOM from 'react-dom';
import logo from './sneaker-logo.png';

function Welcome(props) {
    return <h3>Welcome {props.name}!</h3>
}

function SignIn() {
    return <button type='button'>Sign in</button>
}

function Company() {
    return <h1>The Sneaker Company</h1>
}

function Logo() {
    return <img class='logo' src={logo} alt="Logo" />
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    const user = props.name;

    if (isLoggedIn) {
        return <Welcome name={user} />
    } else {
        return <SignIn />
    }
}

function Header() {
    return (<><div class='company-info'>
        <Logo /> <Company />
    </div><div class='greeting'>
            <Greeting isLoggedIn={true} name='Adam' />
        </div></>)
}

export default Header;