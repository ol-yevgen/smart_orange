import { getData } from '@/utils/getData'
import { Title, Button } from '@/components/index'
import Image from 'next/image';
import './homeAbout.scss';

export default async function HomeAbout() {
    const homeAboutGalleryData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}aboutGallery`)

    return (
        <section className='about'>
            <div className='about__gallery'>
                <div className='about__gallery-left'>
                    <Image
                        src={homeAboutGalleryData[0].path}
                        width={homeAboutGalleryData[0].width}
                        height={homeAboutGalleryData[0].height}
                        className=''
                        alt="image"
                    />
                    <Image
                        src={homeAboutGalleryData[2].path}
                        width={homeAboutGalleryData[2].width}
                        height={homeAboutGalleryData[2].height}
                        className=''
                        alt="image"
                    />
                </div>
                <div className='about__gallery-right'>
                    <Image
                        src={homeAboutGalleryData[1].path}
                        width={homeAboutGalleryData[1].width}
                        height={homeAboutGalleryData[1].height}
                        className=''
                        alt="image"
                    />
                </div>
            </div>
            <div className='about__content'>
                <Title title='o компании' />
                <p className='about__text'>
                    {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
                </p>
                <Button
                    title='читать'
                    color='btn-white'
                    position='btn__position-relative'
                    circleColor='light'
                    link='/'
                />
            </div>
        </section>
    )
}