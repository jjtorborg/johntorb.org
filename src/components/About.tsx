import { bodyFont } from "../app/fonts";

export default function About() {
    return (
        <div className={`about ${bodyFont.className}`}>
            <h2 className="about__title">
                About Me
            </h2>
            <p className="about__description">
                I am a full stack software developer with 5 years of experience building enterprise-scale web services.
            </p>
        </div>
    )
}