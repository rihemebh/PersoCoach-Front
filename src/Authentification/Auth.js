import React, {Component} from 'react';

import AuthService from "./services/auth.service"
import {Router} from "react-router";

class Auth extends Component {

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showClientBoard: false,
            showCoachBoard: false,
            showAdminBoard: false,
            currentUser: undefined
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if(user){
            this.setState({
                currentUser: AuthService.getCurrentUser(),
                showClientBoard: user.roles.includes("ROLE_CLIENT"),
                showCoachBoard:  user.roles.includes("ROLE_COACH"),
                showAdminBoard:  user.roles.includes("ROLE_ADMIN")
            });
        }
    }

    logOut(){
        AuthService.logout();
    }


    render() {
        const { currentUser, showClientBoard,showCoachBoard,showAdminBoard } = this.state;
        return (
            <Router>
            <div>
                
            </div>
            </Router>
        );
    }
}

export default Auth;