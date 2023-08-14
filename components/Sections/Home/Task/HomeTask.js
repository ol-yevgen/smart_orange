import { Title } from '@/components/index'
import './homeTask.scss';

export default function HomeTask() {

    return (
        <section className='task'>
            <Title title='основные задачи' />

            <div className='task__content'>
                <div className='task__content-half'>
                    <h3 className='task__content-num'>1</h3>
                    <p className='task__content-text task__text-left'>
                        Создание комфортных условий и повышение качества обслуживания клиентов
                    </p>
                </div>
                <div className='task__content-half'>
                    <h3 className='task__content-num'>2</h3>
                    <p className='task__content-text'>
                        Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового оборудования и усиленной рекламы на рынке
                    </p>
                </div>
            </div>
        </section>
    )
}