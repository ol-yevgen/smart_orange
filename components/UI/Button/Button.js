import Link from 'next/link';
import { arrowRight } from '@/public/icons/arrows';
import './button.scss';

export default function Button({ title, color, position, circleColor, link}) {

    return (
        <button
            id="btn"
            className={`btn ${color} ${position}`}
            aria-label='button'
        >
            <span id={circleColor}></span>
            <Link href={link}>
                {title.toUpperCase()}
                {arrowRight}
            </Link>
            
       </button>
    )
}