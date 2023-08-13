import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const servicesList = [
        {
            id: uuidv4(),
            title: 'rent a ferrari f8 with exclusive pricing from uptown luxury cars',
            href: '/images/home/services/service-ferrari.webp',
            price: '2,000.00',
            discount: '4,000.00',
            currency: 'USD',
            alt: 'ferrari',
            time: '1',
            filter: 'ride'
        },
        {
            id: uuidv4(),
            title: 'brunch with pool access at rooftop, the burj club',
            href: '/images/home/services/service-pool.webp',
            price: '2,000.00',
            discount: '4,000.00',
            currency: 'USD',
            alt: 'pool',
            time: '1',
            filter: 'relax'
        },
        {
            id: uuidv4(),
            title: 'live the billionaire life for a day in dubai',
            href: '/images/home/services/service-billionaire-life.webp',
            price: '2,000.00',
            discount: '4,000.00',
            currency: 'USD',
            alt: 'life',
            time: '1',
            filter: 'discover'
        },
        {
            id: uuidv4(),
            title: 'friday brunch at frangipani on zaya nurai island, abu dhabi',
            href: '/images/home/services/service-friday-brunch.webp',
            price: '2,000.00',
            discount: '4,000.00',
            currency: 'USD',
            alt: 'brunch',
            time: '1',
            filter: 'dine'
        },
        {
            id: uuidv4(),
            title: 'flyboard in dubai marina',
            href: '/images/home/services/service-flyboard.webp',
            price: '2,000.00',
            discount: '4,000.00',
            currency: 'USD',
            alt: 'flyboard',
            time: '1',
            filter: 'experience'
        },
        {
            id: uuidv4(),
            title: 'brunch with pool access at rooftop, the burj club',
            href: '/images/home/services/service-pool.webp',
            price: '2,000.00',
            discount: '4,000.00',
            currency: 'USD',
            alt: 'pool',
            time: '1',
            filter: 'relax'
        },
    ]

    return new Response(JSON.stringify(servicesList))
}
