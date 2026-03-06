import axios from 'axios';
import { API_CONFIG, ERROR_MESSAGES } from './constants';

class DigiApiClient {
    private client = axios.create({
        baseURL: API_CONFIG.BASE_URL,
        timeout: API_CONFIG.TIMEOUT,
    });

    async getDigimons() {
        try {
            const response = await this.client.get('/digimon');
            return { digimons: response.data, timestamp: new Date() };
        } catch (error) {
            console.error('Error fetching digimons:', error);
            throw new Error(ERROR_MESSAGES.FETCH_DIGIMONS);
        }
    }

    async getDigimonByName(name: string) {
        try {
            const response = await this.client.get(`/digimon/name/${name}`);
            const data = response.data;
            return { digimon: Array.isArray(data) ? data[0] : data, timestamp: new Date() };
        } catch (error) {
            console.error(`Error fetching digimon ${name}:`, error);
            throw new Error(ERROR_MESSAGES.FETCH_DIGIMON(name));
        }
    }

    async getDigimonsByLevel(level: string) {
        try {
            const response = await this.client.get(`/digimon/level/${level}`);
            return { digimons: response.data, timestamp: new Date() };
        } catch (error) {
            console.error(`Error fetching digimons for level ${level}:`, error);
            throw new Error(ERROR_MESSAGES.FETCH_LEVEL(level));
        }
    }
}

export const digiApiClient = new DigiApiClient();
