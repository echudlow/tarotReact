import axios from "axios";

const API_URL = 'http://localhost:9000';

export const fetchAllCards = () => {
    return axios.get(`${API_URL}/allCards`);
}

export const fetchReading = (selection) => {
    return axios.get(`${API_URL}/reading/${selection}`);
}