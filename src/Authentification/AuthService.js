import axios from "axios";

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
            headers: {
                'Authorization': 'Bearer ' + currentUser.accessToken
             }
            });
        return response.data;
    }

     getCurrentUser2(){
        const currentUser =  JSON.parse(localStorage.getItem("user"));
        return currentUser.data;
    }
}

export default new AuthService();