import { getData } from '@/utils/getData'
import { PaginationSlider } from '@/components/index';

import './homeHero.scss';

export default async function HomeHero() {
    const homeSliderListData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}homeSliderList`)

    return (
        <section className='hero'>
            <PaginationSlider
                data={homeSliderListData}
            />
        </section>
    )
}