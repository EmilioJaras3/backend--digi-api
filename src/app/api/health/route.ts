import { NextRequest } from 'next/server';
import { jsonResponse, corsMiddleware } from '@/lib/cors';

export async function GET(request: NextRequest) {
    const corsResponse = corsMiddleware(request);
    if (corsResponse) return corsResponse;

    return jsonResponse({
        status: 'OK',
        timestamp: new Date(),
        uptime: process.uptime(),
        service: 'Digi API Gateway'
    });
}

export async function OPTIONS(request: NextRequest) {
    return corsMiddleware(request);
}
