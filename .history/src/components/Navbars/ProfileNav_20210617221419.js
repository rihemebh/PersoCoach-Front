
import React from "react";
import { Link, useHistory } from "react-router-dom";
import classnames from "classnames";
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





function ProfileNav(props) {
  const history = useHistory();

  const onSignOut = () => {
    AuthService.logout();
    history.push({pathname: '/login'}); 
    } 

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const authenticated = JSON.parse(localStorage.getItem("user"));
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 189 ||
        document.body.scrollTop > 189
      ) {
        setNavbarColor("navbar-white");
      } else if (
        document.documentElement.scrollTop < 190 ||
        document.body.scrollTop < 190
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
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
                <i className="" /> Coaches
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
                href="https://www.facebook.com/CreativeTim?ref=creativetim"
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
                href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-linkedin" />
                <p className="d-lg-none">Linkedin</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
         
          
           
              <Button className="btn-round btn-danger"  type="button" onClick={onSignOut}>
                  <FontAwesome className="fas fa-sign-out" />
                       Sign out 
                </Button>
             
            </NavItem>
            
           
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ProfileNav;
