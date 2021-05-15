import React, {Component} from 'react';

import AuthService from "./Authentification/AuthService"
import Login from "./Authentification/Login"

import { SignUp } from "./Authentification/SignUp"

import {Router} from "react-router";

class App extends Component {



    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showClientBoard: false,
            showCoachBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
            accessToken: ""
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if(user){
            this.setState({
                currentUser: AuthService.getCurrentUser(),
                accessToken: this.props.location.state.accessToken
                //showClientBoard: user.roles.includes("ROLE_CLIENT"),
                //showCoachBoard:  user.roles.includes("ROLE_COACH"),
                //showAdminBoard:  user.roles.includes("ROLE_ADMIN")
            });
        }
    }

    logOut(){
        AuthService.logout();
    }


    render() {
        const { currentUser, showClientBoard,showCoachBoard,showAdminBoard } = this.state;
        /* if(!this.state.accessToken) {
            return <Login  />
          } */
          console.log(this.state);
        return (


            <>
            </>
        );
    }
}

export default App;