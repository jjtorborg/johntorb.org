import { introFont } from "../app/fonts";

export default function Intro() {
    return (
        <div className={`intro ${introFont.className}`}>
            Hello World!
        </div>
    );
}