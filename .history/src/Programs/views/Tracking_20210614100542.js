import axios from "axios";
import CatalogNav from "components/Navbars/CatalogNav";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { toast, ToastContainer,Zoom , Bounce } from "react-toastify";

export default class Tracking extends Component {
constructor(props){
    super(props);
    this.state={
        prog : {}
    }
}
    componentDidMount(){
        axios.get("http://localhost:8080/api/program/"+this.props.match.params.id).then(function (response) {
            console.log(response)
            this.setState({prog : response.data});
            }.bind(this))
            .catch(function (error) {
              
              console.log(error);
            })
    }

    render() {
        
        return (
            <div>
            
                {this.state.prog.id}
            </div>
        )
    }
}
