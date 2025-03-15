import { headerFont } from "../app/fonts";
import { Tabs } from "./Tabs";

export default function Header() {
    return (
        <header className={`header ${headerFont.className}`}>
            <h1 className='header__title'>
                JOHN TORBORG
            </h1>
            <Tabs tabs={
                [
                  { title: 'About', value: 'About' },
                  { title: 'Experience', value: 'Experience' },
                  { title: 'Projects', value: 'Projects' },
                  { title: 'Contact', value: 'Contact' },
                ]
            } />
        </header>
    )
}