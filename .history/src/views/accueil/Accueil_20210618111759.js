import React , {Component} from "react";
import AcceuilNav from "views/accueil/AccueilNav.js";
import AccueilHeader from "views/accueil/AccueilHeader.js";
import AccueilFooter from "views/accueil/AccueilFooter.js";
import BecomeCoach from 'views/accueil/BecomeCoach.js';
import BecomeMember from 'views/accueil/BecomeMember.js';
import What from 'views/accueil/What.js';
import Questions from "./Questions";
//import CatalogNav from "components/Navbars/CatalogNav";
class Accueil extends Component {
    async componentDidMount() {


        this.findCoaches(this.state.currentPage,0);
        this.setState({gender:"", rate: 5 , type: "", filter: false, key:"",  },async ()  =>{
          this.nbCoaches();
        });
    
        AuthService.getCurrentUser()
        .then(
          response => {
            console.log(response.roles[0])
           
             
            this.setState( () => (
              {
                role: response.roles[0].name,
                id: response.id,
               
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
   return( 
   <>
   <AcceuilNav />
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