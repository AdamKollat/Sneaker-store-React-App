import React from "react";
import ReactDOM from "react-dom";

const Welcome = (props) => {
    return <h2>Welcome, {props.name}!</h2>
} 

const LogIn = () => {
    return <button>Sign in</button>
}

const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    const user = props.name;

    if(isLoggedIn) {
        return <Welcome name={user} />
    } else {
        return <LogIn />
    }
}

const SignIn = () => {
    return (
        <div>
            <Greeting isLoggedIn={true} name='Adam'/>
        </div>
    )
}


export default SignIn;