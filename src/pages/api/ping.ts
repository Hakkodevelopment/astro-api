import type { APIRoute } from 'astro';
import axios from 'axios';

export const GET: APIRoute = async ({ request }) => {
    // const source = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip');
    const startChi = Date.now();
    try {
        await axios.get("https://chi-game-1.prismservers.net:8443/");
    } catch (error) {
        // console.log(error);
    }
    const latencyChi = Date.now() - startChi;

    const startLon = Date.now();
    try {
        await axios.get("http://eu-phs-ger01.physgun.com:80");
    } catch (error) {
        // console.log(error);
    }
    const latencyLon = Date.now() - startLon;

    return new Response(
        JSON.stringify({
            latencyChi,
            latencyLon,
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
};