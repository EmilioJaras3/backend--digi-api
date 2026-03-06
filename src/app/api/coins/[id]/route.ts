import { NextRequest } from 'next/server';
import { digiApiClient } from '@/lib/digiApiClient';
import { jsonResponse, corsMiddleware } from '@/lib/cors';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const corsResponse = corsMiddleware(request);
    if (corsResponse) return corsResponse;

    const name = params.id;

    try {
        const data = await digiApiClient.getDigimonByName(name);
        return jsonResponse(data);
    } catch (error: any) {
        return jsonResponse({ error: error.message }, 500);
    }
}

export async function OPTIONS(request: NextRequest) {
    return corsMiddleware(request);
}
