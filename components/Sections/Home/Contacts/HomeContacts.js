import Image from 'next/image';
import { Title, FullForm, } from '@/components/index'
import './homeContacts.scss';
import contactsImage from '@/public/images/home/contacts/contact.jpg'

export default async function HomeContacts() {

    return (
        <section className='contacts'>
            <Title title='cвязаться с нами' />

            <div className='contacts__content'>
                <FullForm />
                <Image
                    src={contactsImage}
                    width={749}
                    height={369}
                    className=''
                    alt="image"
                />

            </div>

        </section>
    )
}