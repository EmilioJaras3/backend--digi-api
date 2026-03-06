import axios from 'axios';

const DIGIMON_API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://digimon-api.vercel.app/api';

class DigiApiClient {
    private client = axios.create({
        baseURL: DIGIMON_API_BASE,
        timeout: 10000,
    });

    async getDigimons() {
        try {
            const response = await this.client.get('/digimon');
            return { digimons: response.data, timestamp: new Date() };
        } catch (error) {
            console.error('Error fetching digimons:', error);
            throw new Error('Failed to fetch digimons data from external API');
        }
    }

    async getDigimonByName(name: string) {
        try {
            const response = await this.client.get(`/digimon/name/${name}`);
            const data = response.data;
            return { digimon: Array.isArray(data) ? data[0] : data, timestamp: new Date() };
        } catch (error) {
            console.error(`Error fetching digimon ${name}:`, error);
            throw new Error(`Failed to fetch ${name} data`);
        }
    }

    async getDigimonsByLevel(level: string) {
        try {
            const response = await this.client.get(`/digimon/level/${level}`);
            return { digimons: response.data, timestamp: new Date() };
        } catch (error) {
            console.error(`Error fetching digimons for level ${level}:`, error);
            throw new Error(`Failed to fetch digimons for level ${level}`);
        }
    }
}

export const digiApiClient = new DigiApiClient();
