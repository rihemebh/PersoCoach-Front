
import React from "react";

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
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import FontAwesome from 'react-fontawesome'
import ProfileNav from "components/Navbars/ProfileNav";

function Coach() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
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
                Jane Faker <br />
              </h4>
              <h6 className="description">Sport Coach</h6>
              <FontAwesome className="fas fa-star  text-warning"></FontAwesome>
         <FontAwesome className="fas fa-star  text-warning"></FontAwesome>
         <FontAwesome className=" fa-star " style={{color: "#d9d9d9"}}></FontAwesome>
         <FontAwesome className="far fa-star " style={{color: "#d9d9d9"}}></FontAwesome>
         <FontAwesome className=" fa-star " style={{color: "#d9d9d9"}}></FontAwesome>
        
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor ipsum vitae maximus tempus. Donec ut nulla eleifend, molestie elit et, consequat tellus. Curabitur sagittis sapien magna, in lacinia leo placerat consectetur. Proin aliquet nibh in purus ornare finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed interdum interdum dui in venenatis. Proin id risus molestie, mollis arcu sit amet, elementum tellus. Curabitur sodales vehicula lectus vitae hendrerit. Morbi suscipit nisi eu tellus facilisis, nec iaculis urna rutrum. Sed nec aliquam mauris.
              </p>
              <br />
              function SectionJavaScript() {
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="section javascript-components">
        <Container>
          <div className="title">
            <h2>Javascript Components</h2>
          </div>
          <Row id="modals">
            <Col md="6">
              <div className="title">
                <h3>Modal</h3>
              </div>
              {/* Button trigger modal */}
              <Button
                className="btn-round"
                color="danger"
                outline
                type="button"
                onClick={toggleModal}
              >
                Launch demo modal
              </Button>
              {/* Modal */}
              <Modal isOpen={modal} toggle={toggleModal}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                    Modal title
                  </h5>
                </div>
                <div className="modal-body">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia. It is a paradisematic country, in which roasted
                  parts of sentences fly into your mouth. Even the all-powerful
                  Pointing has no control about the blind texts it is an almost
                  unorthographic life One day however a small line of blind text
                  by the name of Lorem Ipsum decided to leave for the far World
                  of Grammar.
                </div>
                <div className="modal-footer">
                  <div className="left-side">
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={toggleModal}
                    >
                      Never mind
                    </Button>
                  </div>
                  <div className="divider" />
                  <div className="right-side">
                    <Button className="btn-link" color="danger" type="button">
                      Delete
                    </Button>
                  </div>
                </div>
              </Modal>
            </Col>
              <Button className="btn-round" color="danger" >
                Choose this Coach
              </Button>
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Acadamic Experience
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
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
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                 
                      <Col className="mx-auto" lg="4" md="6" xs="6">
                    
                        <h3>Exp1 </h3>
                    </Col>
                    <Col lg="8" md="6" xs="6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor ipsum vitae maximus tempus. Donec ut nulla eleifend
                    </Col>
                  
                      </Row>
                    </li>
                    <hr />
                    <li>
                    <Row>
                 
                 <Col className="mx-auto" lg="4" md="6" xs="6">
               
                   <h3>Exp2</h3>
               </Col>
               <Col lg="8" md="6" xs="6">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor ipsum vitae maximus tempus. Donec ut nulla eleifend
               </Col>
             
                 </Row>
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

export default Coach;
