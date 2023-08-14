import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const socialList = [
        {
            id: uuidv4(),
            href: '/icons/facebook.svg',
            link: 'https://www.facebook.com/',
        },
        {
            id: uuidv4(),
            href: '/icons/twitter.svg',
            link: 'https://twitter.com/',
        },
        
        {
            id: uuidv4(),
            href: '/icons/linked-in.svg',
            link: 'https://www.linkedin.com/',
        },
        {
            id: uuidv4(),
            href: '/icons/pininterest.svg',
            link: 'https://www.pinterest.com/',
        },
    ]

    return new Response(JSON.stringify(socialList))
}
