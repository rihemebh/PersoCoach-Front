import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {

    async login(username,password) {
        const response = await axios.post(API_URL + "sign-in", {
            username,
            password
        });
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log(response);
        return response.data;
    }

    logout(){
        localStorage.removeItem("user");
    }

    async register(username, email, password){
        return await axios.post(API_URL + "sign-up", {
            username,
            email,
            password
        });
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();