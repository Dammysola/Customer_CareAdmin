import {} from "../constant/url_path"
import axios from 'axios';




export const getUserDetailsService = async (email, body) => {

    const response = await axios.get(`${getUserDetails}/${email}`, body);


    console.log(response);
    
    return response;
};