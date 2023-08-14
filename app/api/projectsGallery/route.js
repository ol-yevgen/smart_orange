import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const homeProjectsGalleryList = [
        {
            id: uuidv4(),
            path: '/images/home/projects/1.jpg',
            width: 570,
            height: 255,
            title: 'досуговый центр'
        },
        {
            id: uuidv4(),
            path: '/images/home/projects/2.jpg',
            width: 570,
            height: 255,
            title: 'досуговый центр'
        },
        {
            id: uuidv4(),
            path: '/images/home/projects/3.jpg',
            width: 270,
            height: 255,
            title: 'досуговый центр'
        },
        {
            id: uuidv4(),
            path: '/images/home/projects/4.jpg',
            width: 470,
            height: 255,
            title: 'досуговый центр'
        },
        {
            id: uuidv4(),
            path: '/images/home/projects/5.jpg',
            width: 370,
            height: 255,
            title: 'досуговый центр'
        },
    ]

    return new Response(JSON.stringify(homeProjectsGalleryList))
}
