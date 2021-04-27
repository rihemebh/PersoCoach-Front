
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
  Modal,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import FontAwesome from 'react-fontawesome'
import ProfileNav from "components/Navbars/ProfileNav";
import CoachModal from "./CoachModal";
import { render } from "node-sass";

class Coach extends Component {
  


  render(){
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
  
  }
 

export default Coach;
