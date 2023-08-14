import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const footerContactsList = [
        {
            id: uuidv4(),
            label: '100000, Республика  Казахстан, г.Караганда, ул.Телевизионная 10',
            href: '/icons/vector.svg',
        },
        {
            id: uuidv4(),
            label: '+38 (000) 000 00 00',
            href: '/icons/group.svg',
        },
        {
            id: uuidv4(),
            label: 'mail@gmail.com',
            href: '/icons/mail.svg',
        },
    ]

    return new Response(JSON.stringify(footerContactsList))
}
