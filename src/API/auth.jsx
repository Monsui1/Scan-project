import axios from "axios";
import { LOGIN_URL, LOGIN_INFO_URL } from "./API.jsx";

async function logIn(userName, password) {
    try {
        const response = await axios.post(LOGIN_URL, {
            login: userName,
            password: password,
        }, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("Logged in successfully");
        localStorage.setItem("TOKEN", response.data.accessToken);
        localStorage.setItem("EXPIRE", response.data.expire);
        return response.data.accessToken;
    } catch (error) {
        console.log("Authorization issues...", error);
    }
}

async function accountInfo(token) {
    
    if (!token) {
        console.log("You are not authorized");
        return;
    }

    try {
        const response = await axios.get(LOGIN_INFO_URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log("Account info is received successfully");
        return response.data.eventFiltersInfo;
    } catch (error) {
        console.log("Failed receiving data...", error);
    }
}

export { logIn, accountInfo };

