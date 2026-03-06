export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'https://digimon-api.vercel.app/api',
  TIMEOUT: 10000,
} as const;

export const ERROR_MESSAGES = {
  FETCH_DIGIMONS: 'Error al obtener datos de Digimons de la API externa',
  FETCH_DIGIMON: (name: string) => `Error al obtener datos de ${name}`,
  FETCH_LEVEL: (level: string) => `Error al obtener Digimons del nivel ${level}`,
} as const;
