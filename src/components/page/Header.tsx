import Link from 'next/link';

export default function Header() {
    return (
        <header className='bg-[#0e0e0e] flex flex-row top-0 z-10 sticky'>
            <HeaderTitle />
            <HeaderLink text='About' />
            <HeaderLink text='Experience' />
            <HeaderLink text='Skills' />
            <HeaderLink text='Projects' />
            <HeaderLink text='Contact' />
        </header>
    )
}

export function HeaderTitle() {
    return (
        <Link
            className='whitespace-nowrap mr-0 px-[20px] py-[5px] text-[32px]'
            href='#home'
        >
            JT
        </Link>
    );
}

export function HeaderLink({ text }: { text: string }) {
    return (
        <Link
            className={`px-[10px] py-[3px] mx-[2px] my-[12px] flex justify-center items-center rounded-[8px] text-(--hoverable) hover:bg-[#1e1e1e] hover:text-(--foreground) transition-colors duration-200 ease-in-out`}
            href={`#${text.toLowerCase()}`}
        >
            {text}
        </Link>
    )
}