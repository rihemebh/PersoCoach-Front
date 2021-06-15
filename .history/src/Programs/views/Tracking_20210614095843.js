import React, { Component } from 'react'

export default class Tracking extends Component {
constructor
    componentDidMount(){
        axios.get("http://localhost:8080/api/program/"+this.props.match.params).then(function (response) {
            console.log(response)
            if(response.data.dailyprogram != null )
            this.setState({nb : this.state.nb + response.data.dailyprogram.length, length : response.data.dailyprogram.length });
            this.setState({prog : response.data});
            }.bind(this))
            .catch(function (error) {
              
              console.log(error);
            })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
