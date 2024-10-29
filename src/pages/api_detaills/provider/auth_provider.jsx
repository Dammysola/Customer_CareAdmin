import {
    login_service, getAllUsersService, getQuerySummaryService, getSuspendedAccountsService,
    getFreezedAccountsService, addStaffService, getAllStaffService, getStaffDetailsService,
    getCCSummaryService, suspendStaffService
} from "../services/auth_services"



export const login_provider = async (body, navigate, updateLoadingPopup, updateErrorText, updateErrorPopup) => {

    try {
        updateLoadingPopup(true);
        let response = await login_service(body);

        if (response.status === 200 || response.status === 201) {
            console.log("Login Success");

            updateLoadingPopup(false);
            navigate("/dashboard");
        } else {
            throw new Error('Login failed');
        }
    } catch (err) {
        updateLoadingPopup(false);
        updateErrorText(err.response.data.responseMessage || "Login failed");
        console.log("Error :", err);
        updateErrorPopup(true);
        setTimeout(() => {
            updateErrorPopup(false);
        }, 2000);
    }
}



export const getAllUsersProvider = async ({ updateUsers, updateLoadingPopup, updateErrorText, updateErrorPopup }) => {

    try {
        console.log("hello sir");

        updateLoadingPopup(true);

        let response = await getAllUsersService()

        if (response.status == 200 || response.status == 201) {

            console.log(response.data["responseBody"]);
            updateLoadingPopup(false);

            updateUsers(response.data["responseBody"]);

        } else {
            updateErrorText(response.data["responseMessage"]);
            console.log("Error :", err);
            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }



    } catch (err) {

        updateErrorText(err.responseMessage);
        console.log("Error :", err);
        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)
    }


}

export const getQueriesProvider = async ({ updateQueries, updateErrorPopup, updateErrorText, updateLoadingPopup }) => {

    try {
        let response = await getQuerySummaryService()

        if (response.status == 200 || response.status == 201) {

            updateQueries(response.data["responseBody"]);

            console.log(response.data["responseBody"]);
        } else {
            updateErrorText(response.data["responseMessage"]);
            console.log("Error :", err);
            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }

        console.log("eeey:", response.data["responseBody"]);

    } catch (err) {

        console.log("Error :", err);
        updateErrorText(err.responseMessage || "Error fetching users");
        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)

    }

}

export const getSuspendedAccountsProvider = async ({ updateSuspendedAccounts, updateLoadingPopup, updateErrorText, updateErrorPopup }) => {

    try {
        updateLoadingPopup(true);

        let response = await getSuspendedAccountsService()

        if (response.status == 200 || response.status == 201) {

            updateLoadingPopup(false);

            updateSuspendedAccounts(response.data["responseBody"]);

            console.log(response.data["responseBody"]);
        }


    } catch (err) {
        updateErrorText(err.responseMessage || "Error fetching users");
        console.log("Error :", err);
        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)
    }
}


export const getFreezedAccountsProvider = async ({ updateFreezedAccounts, updateLoadingPopup, updateErrorText, updateErrorPopup }) => {

    try {

        updateLoadingPopup(true);

        let response = await getFreezedAccountsService()

        if (response.status == 200 || response.status == 201) {

            updateLoadingPopup(false);

            updateFreezedAccounts(response.data["responseBody"]);

            console.log(response.data["responseBody"]);
        }


    } catch (err) {
        updateErrorText(err.responseMessage || "Error fetching users");
        console.log("Error :", err);
        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)
    }
}

export const addStaffProvider = async (body, updateLoadingPopup, updateErrorPopup, updateErrorText, updateSignUpPopup) => {


    try {
        updateLoadingPopup(true);
        let response = await addStaffService(body);

        if (response.status === 200 || response.status === 201) {
            console.log("Staff Added Successfully");

            updateLoadingPopup(false);

            updateSignUpPopup(true)
        } else {
            throw new Error('Adding staff failed');
        }
    } catch (err) {
        updateLoadingPopup(false);
        updateErrorText(err.response.data.responseMessage || "Staff Adding failed");
        console.log("Error :", err);
        updateErrorPopup(true);
        setTimeout(() => {
            updateErrorPopup(false);
        }, 2000);
    }

}


export const getAllStaffProvider = async ({ updateAllStaff, updateLoadingPopup, updateErrorText, updateErrorPopup }) => {


    try {

        updateLoadingPopup(true);

        let response = await getAllStaffService()

        if (response.status == 200 || response.status == 201) {

            updateLoadingPopup(false);

            updateAllStaff(response.data["responseBody"]);

            console.log(response.data["responseBody"]);

        } else {
            updateLoadingPopup(false);
            updateErrorText(response.data["responseMessage"]);
            console.log("Error :", err);
            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }



    } catch (err) {
        updateErrorText(err.responseMessage || "Error fetching users");
        console.log("Error :", err);
        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)
    }
}


export const getStaffDetailsProvider = async ({ updateStaffDetails, url, updateLoadingPopup, updateErrorText, updateErrorPopup }) => {

    try {

        // updateLoadingPopup(true);

        let response = await getStaffDetailsService(url)

        if (response.status == 200 || response.status == 201) {

            // updateLoadingPopup(false);

            updateStaffDetails(response.data["responseBody"]);

            console.log(response.data["responseBody"]);

        } else {
            // updateLoadingPopup(false);
            updateErrorText(response.data["responseMessage"]);

            console.log("Error :", err);

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }



    } catch (err) {
        updateLoadingPopup(false);
        updateErrorText(err.responseMessage || "Error fetching staff Details");

        console.log("Error :", err);
        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)
    }
}


export const getCCSummaryProvider = async ({ updateCCSummary, updateLoadingPopup, updateErrorText, updateErrorPopup }) => {


    try {

        // updateLoadingPopup(true);

        let response = await getCCSummaryService()

        if (response.status == 200 || response.status == 201) {

            // updateLoadingPopup(false);

            updateCCSummary(response.data["responseBody"]);

            console.log(response.data["responseBody"]);

        } else {
            // updateLoadingPopup(false);
            updateErrorText(response.data["responseMessage"]);

            console.log("Error :", err);

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }



    } catch (err) {

        updateErrorText(err.responseMessage || "Error fetching staff Details");

        console.log("Error :", err);
        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)
    }

}

export const suspendStaffProvider = async (body, updateSuspendStaff, updateLoadingPopup, updateErrorPopup, updateErrorText, updateSuspendStaffSuccess) => {

    try {

        updateLoadingPopup(true);

        const response = await suspendStaffService(body);


        if (response.status == 200 || response.status == 201) {

            updateLoadingPopup(false);

            updateSuspendStaff(false)

            updateSuspendStaffSuccess(true) 

  


        } else {
            // updateLoadingPopup(false);
            updateErrorText(response.data["responseMessage"]);

            console.log("Error :", err);

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
            
        }

    } catch (err) {
        updateLoadingPopup(false)

        console.log("What is going on na ");
        
        updateErrorText("hello, show na");

        console.log("Error :", err);
        updateErrorPopup(true)
        setTimeout(() => {
            updateErrorPopup(false)
        }, 2000)

    }



}
