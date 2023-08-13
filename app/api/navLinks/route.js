export async function GET(request) {
    const navLinks = [
        { label: 'главная', href: '/' },
        { label: 'галерея', href: '/галерея' },
        { label: 'проекты', href: '/проекты' },
        { label: 'сертификаты', href: '/сертификаты' },
        { label: 'контакты', href: '/контакты' }
    ]

    return new Response(JSON.stringify(navLinks))
}