import React, { Component } from 'react'

export default class Tracking extends Component {
constructor(props){
    super(props);
    this.state={
        prog : {}
    }
}
    componentDidMount(){
        axios.get("http://localhost:8080/api/program/"+this.props.match.params).then(function (response) {
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
                {prog.}
            </div>
        )
    }
}
