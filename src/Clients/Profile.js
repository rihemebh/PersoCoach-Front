import React, { Component } from "react";


// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ProfileNav from "components/Navbars/ProfileNav.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import AuthService from "Authentification/AuthService";




export default class Profile extends React.Component{

    initialInfos = {
      id: '',
      username: '',
      email: '',
      name: '',
      description: '',
      age: '',
      gender: '',
      height: '',
      password: '',
      programRequestList: [],
      roles: [],
      url: '',
      weight: ''
    }

    constructor(props){
      super(props)
      this.state={
          authenticated: false,
          loading: true,
          activeTab: 1,
          currentUserInfo: this.initialInfos,
          currentUserProgramRequests: [{
            "coach_id":  '',
            "coach_name":  '',
            "coach_url": '',
            "state": "pending"
          }]

      }
    }

    async componentDidMount() {
      AuthService.getCurrentUser()
      .then(
        response => {
          console.log(response)
          this.setState( () => (
            {
              currentUserInfo: {
                "name": response.name,
                "username": response.username,
                "email": response.email,
                "description": response.description,
                "url": response.url,
                "roles": response.roles
              }/* ,
              currentUserProgramRequests: [...this.state.currentUserProgramRequests, {
                "coach_id":  response.programRequestList.coach.id,
                "coach_name":  response.programRequestList.coach.name,
                "coach_url": response.programRequestList.coach.url,
                "state": "pending"              
              }] */,
              coach: response.programRequestList.coach,
              authenticated: true,
              loading: false
            })) 
          console.log(this.state)
 
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      );
      
    }

    render(){
      
      console.log(this.state)
      //console.log(this.state.currentUser.programRequestList)

      if(!this.state.loading && !this.state.authenticated)
        this.props.history.push({pathname: '/login'});  
      console.log(this.state)

      const toggle = (tab) => {
        if (this.state.activeTab !== tab) {
          this.setState({ activeTab: tab });
        }
      };

      
      
        return(
            <div>
            <ProfileNav />
            <ProfilePageHeader />
            <div className="section profile-content">
              <Container>
                <div className="owner">
                  <div className="avatar">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/faces/joe-gardner-2.jpg").default}
                    />
                  </div>
                  <div className="name">
                    <h4 className="title">
                      {this.state.currentUserInfo.name} <br />
                    </h4>
                    <h6 className="description">@{this.state.currentUserInfo.username}</h6>
                  </div>
                </div>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="6">
                    <p>{this.state.currentUserInfo.description}</p>
                    <br />
                    <Button className="btn-round" color="default" outline>
                      <i className="fa fa-cog" /> Settings
                    </Button>
                  </Col>
                </Row>
                <br />
                <div className="nav-tabs-navigation">
                <h6>Get a closer look at your program requests sent to Coaches : </h6>
                <br></br>
                  <div className="nav-tabs-wrapper">
                    <Nav role="tablist" tabs>
                      <NavItem>
                        <NavLink
                           className={this.state.activeTab === "1" ? "active" : ""}
                          onClick={() => {
                            toggle("1");
                          }} 
                        >
                          <h6>Pending Requests</h6>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={this.state.activeTab === "2" ? "active" : ""}
                          onClick={() => {
                            toggle("2");
                          }} 
                        >
                          <h6>Returned Requests</h6>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </div>
                {/* Tab panes */}
                <TabContent className="following" activeTab={this.state.activeTab}>

              <TabPane className="text-center" tabId="1" id="follows">
                <Row>
                  <Col className="ml-auto mr-auto" md="6">
                    <ul className="list-unstyled follows">

                      { this.state.currentUserProgramRequests ?
                          this.state.currentUserProgramRequests.map((exp,index) => {
                          return (
                            <li>
                              <Row>
                              <Col lg="3" md="6" xs="6">
                                  <h5>Experience{index+1}</h5>
                                  <hr />
                                </Col>
                                <Col lg="9" md="6" xs="6">
                                  {exp}
                                  <hr />
                                </Col>
                              
                              </Row>
                            </li>
                          ); 
                        }): 
                        <div>
                        <h6>You haven't subscribed or requested ay program yet ! </h6>
                        <br></br>
                        <Button
                          className="btn-round"
                          color="warning"
                          outline
                          type="button"
                          onClick={ () => {this.props.history.push({pathname: '/Coaches'})} }>
                              You can consult our coaches catalog right away</Button>
                        </div>
                      }
                    </ul>
                  </Col>
                </Row>
              </TabPane>

              <TabPane className="text-center" tabId="2" id="following">
              <Row>
                  <Col className="ml-auto mr-auto" md="6">
                    <ul className="list-unstyled follows">

                      { this.state.currentUserProgramRequests ?
                          this.state.currentUserProgramRequests.map((exp,index) => {
                          return (
                            <li>
                              <Row>
                              <Col lg="3" md="6" xs="6">
                                  <h5>Experience{index+1}</h5>
                                  <hr />
                                </Col>
                                <Col lg="9" md="6" xs="6">
                                  {exp}
                                  <hr />
                                </Col>
                              
                              </Row>
                            </li>
                          ); 
                        }): 
                        <div>
                        <h6>You haven't subscribed or requested ay program yet ! </h6>
                        <br></br>
                        <Button
                          className="btn-round"
                          color="warning"
                          outline
                          type="button"
                          onClick={ () => {this.props.history.push({pathname: '/Coaches'})} }>
                          You can consult our coaches catalog right away</Button>
                    </div>
                      }
                    </ul>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
              </Container>
            </div>
            <DemoFooter />
            </div>
        )
    }


    
}