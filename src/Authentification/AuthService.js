import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL_AUTH = "http://localhost:8080/api/auth/";
const API_URL_USER = "http://localhost:8080/api/user/";

class AuthService {

    async login(username,password) {
        const response = await axios.post(API_URL_AUTH + "sign-in", {
            username,
            password
        });
        console.log(response)
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log(JSON.parse(localStorage.getItem("user")))
        return response.data;
    }

    logout(){
        localStorage.removeItem("user");
    }

    async register(username, email, password){
        return await axios.post(API_URL_AUTH + "sign-up", {
            username,
            email,
            password
        });
    }

    async getCurrentUser(){
        const currentUser =  JSON.parse(localStorage.getItem("user"));
        if(!currentUser){
            return null;
        }
        const response = await axios.get(API_URL_USER + "id/" + currentUser.id, {
            headers: authHeader()
            });
        return response.data;
    }

     getCurrentUser2(){
        const currentUser =  JSON.parse(localStorage.getItem("user"));
        return currentUser.data;
    }

    getCurrentRole(){
        const currentUser =  this.getCurrentUser();
        return currentUser.roles[0];
    }
}

export default new AuthService();