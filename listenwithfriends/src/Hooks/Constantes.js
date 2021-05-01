export const BASE_URL = "https://backend-fullstack-labenu.herokuapp.com/";

export const axiosConfig = {
    headers: {
        Authorization: localStorage.getItem('token')
    }
}