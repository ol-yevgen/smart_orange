import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const homeSliderList = [
        {
            id: uuidv4(),
            path: '/images/home/slider/slide1.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/home/slider/slide1.jpg',
        },
    ]

    return new Response(JSON.stringify(homeSliderList))
}
