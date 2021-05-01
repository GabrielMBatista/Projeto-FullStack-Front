import { axiosConfig, BASE_URL } from "../Hooks/Constantes";
import axios from "axios";

// UserArea
export const createUser = () => {
    axios.post(`${BASE_URL}/user/signup`,
        {
            body: {
                User: {
                    "name": '',
                    "email": '',
                    "password": '',
                    "nickname": ''
                }
            }
        })
        .then((res) => {
            localStorage.setItem('token', res.data);
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const loginUser = () => {
    axios.post(`${BASE_URL}/user/login`,
        {
            body: {
                User: {
                    "email": '',
                    "password": ''
                }
            }
        }, axiosConfig)
        .then((res) => {
            localStorage.setItem('token', res.data);
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}


//Music Get Area 

export const getMusic = () => {
    axios.get(`${BASE_URL}/music/all`, axiosConfig)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}


export const getMusicById = (id) => {
    axios.get(`${BASE_URL}/music/:${id}`, axiosConfig)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}
export const getMusicByTitle = (title) => {
    axios.get(`${BASE_URL}/music/search-by-title?title=${title}`, axiosConfig)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

//Music post Area 


export const createAlbum = () => {
    axios.post(`${BASE_URL}/music/createAlbum`,
        {
            body: {
                User: {
                    "name": ''
                }
            }
        }, axiosConfig)
        .then((res) => {
            localStorage.setItem('token', res.data);
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}
export const createMusic = () => {
    axios.post(`${BASE_URL}/music/createMusic`,
        {
            body: {
                User: {
                    "title": '',
                    "file": '',
                    "genresIds": '',
                    "albumId": '',
                }
            }
        }, axiosConfig)
        .then((res) => {
            localStorage.setItem('token', res.data);
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}