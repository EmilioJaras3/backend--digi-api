export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'https://digimon-api.vercel.app/api',
  TIMEOUT: 10000,
} as const;

export const ERROR_MESSAGES = {
  FETCH_DIGIMONS: 'Failed to fetch digimons data from external API',
  FETCH_DIGIMON: (name: string) => `Failed to fetch ${name} data`,
  FETCH_LEVEL: (level: string) => `Failed to fetch digimons for level ${level}`,
} as const;
