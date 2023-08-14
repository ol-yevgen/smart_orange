import { HomeHero, HomeAbout, HomeTask, HomeProjects, HomeContacts } from "@/components/index"

export const metadata = {
    title: 'Головна',
}

export default function Home() {
    return (
        <>
            <HomeHero />
            <HomeAbout />
            <HomeTask />
            <HomeProjects />
            <HomeContacts/>
        </>
    )
}
