import axios from "axios";
import { API_KEY, BASE_URL } from '../constants/server'

export async function getTopStories() {
    try {
        const response = await axios.get(`${BASE_URL}arts.json?api-key=${API_KEY}`)
        return response.data;
    } catch(error) {
        console.error(error);
    }
}