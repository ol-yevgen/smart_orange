import { Button } from '@/components/index';

export default function NotFound() {
    return (
        <section className='otherPages'>
            <h1>Страница не найдена</h1>
            <Button
                title='на главную'
                color='btn-black'
                position='btn__position-relative'
                circleColor='dark'
                link='/'
            />
        </section>
    )
}