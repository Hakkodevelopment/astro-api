import type { APIRoute } from 'astro';
import { GameDig } from 'gamedig';

export const GET: APIRoute = async () => {
    try {
    const state = await GameDig.query({
        type: 'minecraft',
        host: 'mc.hypixel.net'
    });

    return new Response(JSON.stringify(state), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: `Server is offline, error: ${error}` }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
};