const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const getSoccerTeamsData = async (controller) => {
    const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': API_KEY,
        },
        signal: controller.signal,
    });

    const data = (await result.json()).response;

    return data;
};
