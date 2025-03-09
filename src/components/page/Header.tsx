import Link from 'next/link';

export default function Header() {
    return (
        <header className='header'>
            <Link className='header__title' href='#home'>
                JT
            </Link>
            <Link className='header__link' href='#about'>
                About
            </Link>
            <Link className='header__link' href='#experience'>
                Experience
            </Link>
            <Link className='header__link' href='#skills'>
                Skills
            </Link>
            <Link className='header__link' href='#projects'>
                Projects
            </Link>
            <Link className='header__link' href='#contact'>
                Contact
            </Link>
        </header>
    )
}