import axios from 'axios';

const COINGECKO_API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.coingecko.com/api/v3';

class DigiApiClient {
    private client = axios.create({
        baseURL: COINGECKO_API_BASE,
        timeout: 10000,
    });

    async getCoins(limit: number = 10) {
        try {
            const response = await this.client.get('/coins/markets', {
                params: {
                    vs_currency: 'usd',
                    order: 'market_cap_desc',
                    per_page: limit,
                    page: 1,
                    sparkline: false,
                },
            });
            return { coins: response.data, timestamp: new Date() };
        } catch (error) {
            console.error('Error fetching coins from CoinGecko:', error);
            throw new Error('Failed to fetch coins data from external API');
        }
    }

    async getCoinById(coinId: string) {
        try {
            const response = await this.client.get(`/coins/${coinId}`, {
                params: {
                    localization: false,
                    tickers: false,
                    market_data: true,
                    community_data: false,
                    developer_data: false,
                    sparkline: false,
                },
            });
            return { coin: response.data, timestamp: new Date() };
        } catch (error) {
            console.error(`Error fetching coin ${coinId} from CoinGecko:`, error);
            throw new Error(`Failed to fetch ${coinId} data`);
        }
    }

    async getTrendingCoins() {
        try {
            const response = await this.client.get('/search/trending');
            return { trending: response.data, timestamp: new Date() };
        } catch (error) {
            console.error('Error fetching trending from CoinGecko:', error);
            throw new Error('Failed to fetch trending coins');
        }
    }
}

export const digiApiClient = new DigiApiClient();
