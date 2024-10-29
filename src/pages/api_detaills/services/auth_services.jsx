import {
    login_url, getUsers, QuerySummary, getSuspendedAccounts, getFreezedAccounts,
    addStaff, getAllStaff, getStaffDetails, customerSpportSummary, postSuspendStaff
} from "../constant/url_path"
import axios from 'axios';
import { setEmail, setToken, getToken } from '../constant/local_storage';




export const login_service = async (body) => {

    console.log(`Login Initiated ${body}`)

    //This sends the body as a request to the api

    const response = await axios.post(login_url, body);

    //This cheks if the Api Request was succesful
    //A success Response Status is either 200 or 201

    if (response.status == 200 || response.status == 201) {

        console.log('Success:', response.data);


        // Assuming the token is in response.data.token
        if (response.data["responseBody"]) {

            setToken(response.data["responseBody"]);

            // Store the email in local storage
            if (body.email) {
                setEmail(body.email);
            }
        } else {
            console.warn('Token not found in response');
        }
        console.log(response.data["responseBody"]);
    }
    //If it wasn't succesful run this !
    else {
        console.log("Login failed", response.data)

    }

    return response;
};

// Modify other service functions to include the token in the request header
const authAxios = axios.create({

    headers: {
        Authorization: `Bearer ${getToken()}`
    }
});


export const getAllUsersService = async () => {
    console.log("Users Initiated")

    const response = await authAxios.get(getUsers);

    return response;
};

export const getQuerySummaryService = async () => {
    console.log("Player Initiated")

    const response = await authAxios.get(QuerySummary);

    if (response.status == 200) {

       console.log(response.data);
       

    } 
    return response;
};

export const getSuspendedAccountsService = async () => {

    console.log("Suspended Accounts Initiated")

    const response = await authAxios.get(getSuspendedAccounts);

    if (response.status == 200) {

        console.log('Success:', response.data);

    }
    return response;
};


export const getFreezedAccountsService = async () => {

    console.log("Freezed Accounts Initiated")

    const response = await authAxios.get(getFreezedAccounts);

    if (response.status == 200) {

        console.log('Success:', response.data);
    }

    return response;
};

export const addStaffService = async (body) => {

    console.log("Add New Agent Initiated")

    const response = await authAxios.post(addStaff, body);

    return response;
};


export const getAllStaffService = async () => {
    console.log("All Staff Initiated")

    const response = await authAxios.get(getAllStaff);

    return response;
};


export const getStaffDetailsService = async (url) => {

    console.log("Staff Details Initiated")

    const response = await authAxios.get(`${getStaffDetails}/${url}`);

    return response;
};



export const getCCSummaryService = async () => {

    const response = await authAxios.get(customerSpportSummary);

    console.log("CC Summary Initiated")

    return response;
};

export const suspendStaffService = async (body) => {

    const response = await axios.post(postSuspendStaff, body);

    console.log(response);
    

    return response;
};

