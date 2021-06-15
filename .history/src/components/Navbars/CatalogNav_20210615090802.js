
import React from "react";
import { Link, useHistory } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
//
// reactstrap components
import FontAwesome from 'react-fontawesome'

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
  Row
} from "reactstrap";


import AuthService from "Authentification/AuthService";


function CatalogNav() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-black");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const history = useHistory()
  const authenticated = JSON.parse(localStorage.getItem("user"));
  
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-dark");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const onSignOut = () => {
    AuthService.logout();
    history.push({pathname: '/login'}); 
    } 

  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/index"
            target="_blank"
            title="PersoCoach"
            tag={Link}
          >
          
           <img src={require("assets/img/11.png").default} width="150px" height="28px"></img>
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
          <NavItem>
              <NavLink to="/index" tag={Link}>
                 Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Coaches" tag={Link}>
                <p className="text-info " style={{borderBottom: "solid"}} > Coaches</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
               
              >
                Community
              </NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink
                data-placement="bottom"
                href=""
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none ">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href=""
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href=""
                target="_blank"
                title="Follow us on Linkedin"
              >
                <i className="fa fa-linkedin" />
                <p className="d-lg-none">Linkedin</p>
              </NavLink>
            </NavItem>

            {authenticated ?  
              <>
                <NavItem>
                 <Button className="btn-round btn-danger"  type="button" onClick={onSignOut}>
                    <FontAwesome className="fas fa-sign-out" />
                  </Button>
                </NavItem>
                 
                <NavItem>
                <Button className="btn-round btn-info"  type="button" 
                  onClick={ () => {history.push({pathname: '/client-profile'})} }>
                    <FontAwesome className="fas fa-user" />Profile
                  </Button>
                </NavItem>
              </>
            : 
              <Row>
                <NavItem>
                <a href="/register-page" >
                  <Button className="btn-round btn-info"  type="button">
                    <FontAwesome className="fas fa-user-plus" />Sign up
                  </Button>
                </a>
              </NavItem> 
              <NavItem>
                <a href="/login">
                  <Button className="btn-round btn-outline-info" outline type="button">
                    <FontAwesome className="far fa-sign-in"/> Sign in
                  </Button>
                </a>  
              </NavItem>
              </Row>
            }
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default CatalogNav;
