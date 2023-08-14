import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const homeAboutGalleryList = [
        {
            id: uuidv4(),
            path: '/images/home/about/1.jpg',
            width: 270,
            height: 265
        },
        {
            id: uuidv4(),
            path: '/images/home/about/2.jpg',
            width: 270,
            height: 345
        },
        {
            id: uuidv4(),
            path: '/images/home/about/3.jpg',
            width: 270,
            height: 140
        },
    ]

    return new Response(JSON.stringify(homeAboutGalleryList))
}
