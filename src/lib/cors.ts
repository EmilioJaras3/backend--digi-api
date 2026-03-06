import { NextRequest, NextResponse } from 'next/server';

export function jsonResponse(data: any, status: number = 200) {
    const response = NextResponse.json(data, { status });

<<<<<<< HEAD

=======
    // CORS Headers
>>>>>>> d8a0e567a0a1fd5571778fefcc3baf3f1e3d1122
    const origin = process.env.CORS_ORIGIN || '*';
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    return response;
}

export function corsMiddleware(req: NextRequest) {
    if (req.method === 'OPTIONS') {
        const origin = process.env.CORS_ORIGIN || '*';
        return new NextResponse(null, {
            status: 204,
            headers: {
                'Access-Control-Allow-Origin': origin,
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        });
    }
    return undefined;
}
