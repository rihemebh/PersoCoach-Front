import React, { Component } from "react";

// reactstrap components
import {
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

import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import FontAwesome from "react-fontawesome";
import ProfileNav from "components/Navbars/ProfileNav";
import CoachModal from "./CoachModal";

class Coach extends Component {
  emptyCoach = {
    id: 0,
    name: "",
    gender: "",
    type: "",
    description: "",
    rate: 0,
    acadamicExp: [],
    workExp: [],
    reviews: {},
  };
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      activeTab: 1,
      coachId: props.match.params.id,
      coach: this.emptyCoach,
      isLoading: true,
    };
  }

  async componentDidMount() {
    console.log(this.state.id);
    const response = await fetch(
      "http://localhost:3000/catalog/coach/" + this.state.id
    );

    const body = await response.json();
    this.setState({ coach: body, isLoading: false });
  }

  render() {
    console.log("test");
    document.documentElement.classList.remove("nav-open");
    const toggle = (tab) => {
      if (this.state.activeTab !== tab) {
        this.setState({ activeTab: tab });
      }
    };

    let nb = this.props.rate;
    const rate = [];
    for (let i = 0; i < 5; i++) {
      if (nb > 0) {
        rate.push(
          <FontAwesome className="fas fa-star text-warning" name="star"></FontAwesome>
        );
        nb--;
      } else {
        rate.push(
          <FontAwesome
            className="far fa-star "
            name="star"
            style={{ color: "#d9d9d9" }}
          ></FontAwesome>
        );
      }
    }
    return (
      <>
        <ProfileNav />
        <ProfilePageHeader />
        <div className="section profile-content">
          <Container>
            <div className="owner">
              <div className="avatar">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/Coach.jpeg").default}
                />
              </div>
              <div className="name">
                <h4 className="title">
                  {this.state.coach.name} <br />
                </h4>
                <h6 className="description">{this.state.coach.type} Coach</h6>

                
               

                {rate}
              </div>
            </div>
            <Row>
              <Col className="ml-auto mr-auto text-center">
                <p>{this.state.coach.description}</p>
                <br />

                <CoachModal />
              </Col>
            </Row>

            <br />
            <div className="nav-tabs-navigation">
              <div className="nav-tabs-wrapper">
                <Nav role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={this.state.activeTab === "1" ? "active" : ""}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      Acadamic Experience
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={this.state.activeTab === "2" ? "active" : ""}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      Professional Experience
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div>
            {/* Tab panes */}
            <TabContent className="following" activeTab={this.state.activeTab}>
              <TabPane tabId="1" id="follows">
                <Row>
                  <Col className="ml-auto mr-auto" md="6">
                    <ul className="list-unstyled follows">
                      {/* {this.props.aexp.map((exp)=>{
           return <li>
           <Row>
      
           <Col className="mx-auto" lg="4" md="6" xs="6">
         
             <h3>Exp:</h3>
         </Col>
         <Col lg="8" md="6" xs="6">
        {exp}
         <hr /> 
         </Col>
       
           </Row>
         </li>
        
       })} */}

                      <li>
                        <Row></Row>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </TabPane>
              <TabPane className="text-center" tabId="2" id="following">
                <h3 className="text-muted">No Experience :( </h3>
              </TabPane>
            </TabContent>
          </Container>
        </div>
        <DemoFooter />
      </>
    );
  }
}
export default Coach;
