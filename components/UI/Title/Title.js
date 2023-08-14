import './title.scss';

export default function Title({title}) {
    return (
        <h2 className='section__title'>
            {title.slice(0, 1).toUpperCase() + title.slice(1).toLowerCase() }
        </h2>
    )
}