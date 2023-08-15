import Image from 'next/image';
import Link from 'next/link';
import { getData } from '@/utils/getData'
import { Title, Button } from '@/components/index'
import './homeProjects.scss';
import { arrowRight} from '@/public/icons/arrows';

export default async function HomeProjects() {
    const homeProjectsData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}projectsGallery`)

    return (
        <section className='project'>
            <Title title='Наши проекты' />

            <ul className='project__gallery'>
                {
                    homeProjectsData.map(project => {
                        return (
                            <li
                                key={project.id}
                                className='project__item'
                            >
                                <Link href='/otherPage'>
                                    <Image
                                        src={project.path}
                                        width={project.width}
                                        height={project.height}
                                        className='project__image'
                                        alt="image"
                                    />
                                    <div className="project__content">
                                        <h4 className="project__content-title">{project.title}</h4>
                                        <span className="project__content-more">подробнее {arrowRight}</span>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>

            <div className='project__button'>
                <Button
                    title='все проекты'
                    color='btn-black'
                    position='btn__position-relative'
                    circleColor='dark'
                    link='/otherPage'
                />
            </div>
        </section>
    )
}