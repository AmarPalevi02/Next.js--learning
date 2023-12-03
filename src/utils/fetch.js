import axios from 'axios';
import {BASE_URL, REFRESH_TOKEN} from '../configs'

export const getData = async(URL) => {
    return axios.get(`${URL}`, {
        headers: {
            Authorization: `Bearer ${REFRESH_TOKEN}`
        }
    })
}