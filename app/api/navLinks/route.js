export async function GET(request) {
    const navLinks = [
        { label: 'главная', href: '/' },
        { label: 'галерея', href: '/gallery' },
        { label: 'проекты', href: '/projects' },
        { label: 'сертификаты', href: '/certificate' },
        { label: 'контакты', href: '/contacts' }
    ]

    return new Response(JSON.stringify(navLinks))
}