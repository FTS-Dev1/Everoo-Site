import axios from "../AxiosInstance";

// Helper :
// import AuthTokenGen from "../Utils/AuthTokenGen"





const GetAllEventsAPI = async () => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: "/event/public",
            method: "GET",
            // headers: AuthTokenGen()
        })
        resolved.data = res.data
    } catch (err) {
        if (err && err.response && err?.response?.data?.message) {
            resolved.error = err.response.data.message
        } else {
            resolved.error = "Something went Wrong"
        }
    }
    return resolved;
}

const CreatOrderAPI = async (formData) => {
    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: "/order",
            method: "POST",
            data: formData,
            // headers: AuthTokenGen()
        })
        resolved.data = res.data
    } catch (err) {
        if (err && err.response && err?.response?.data?.message) {
            resolved.error = err.response.data.message
        } else {
            resolved.error = "Something went Wrong"
        }
    }
    return resolved;
}


export { GetAllEventsAPI, CreatOrderAPI };