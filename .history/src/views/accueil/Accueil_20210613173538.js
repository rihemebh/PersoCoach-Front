import React from "react";
import AccueilNav from "views/accueil/AccueilNav.js";
import AccueilHeader from "views/accueil/AccueilHeader.js";
import AccueilFooter from "views/accueil/AccueilFooter.js";
import BecomeCoach from 'views/accueil/BecomeCoach.js';
import BecomeMember from 'views/accueil/BecomeMember.js';
import What from 'views/accueil/What.js';
import Questions from "./Questions";
import CatalogNav from "components/Navbars/CatalogNav";
const Accueil = () => {
   return( 
   <>
   <Nav />
   <AccueilHeader/>
    <What/>
    <BecomeCoach />
    <BecomeMember />
    <Questions />
    <AccueilFooter/>
    </>
    )
}
export default Accueil;