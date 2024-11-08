import { authSet } from "./authControl.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const apiUrl = 'https://gateway.scan-interfax.ru/api/v1/';

const postData = async (url = '', data = {}) => {
    const response = await axios.post(url, {
        method: 'POST',
        body: JSON.stringify(data),
    }, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.json(); 
}


function sendLogin(login, password){
    postData(apiUrl+'account/login', { login: login, password: password })
    .then((data) => {
        console.log(data);
        if (data.accessToken) {
            const navigate = useNavigate();
            authSet(data);
            localStorage.setItem("login", login);
            navigate("/");
        }else{
            // return "dsfsdfs";
            // return {
            //     message: data.message
            // }
        }
    });
    return "dsfsdfs";
}

export { sendLogin }