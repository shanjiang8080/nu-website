import { Clock, Link } from "lucide-react"
import { Slide } from "../projects"

export const Anchor: Slide = {
    simpleTitle: "Anchor Game",
    title: <div className="flex flex-wrap md:flex-row flex-col items-center gap-5">
        <div
            className="bg-[#44406f] flex flex-row rounded-md p-5 inline-fit gap-3"
        >
            <div
                className="flex flex-col-reverse"
            >
                <h1 className="text-[2em] text-[#e2eff3] font-bold font-(family-name:--font-figtree) cursor-text">Anchor Game (Working Title)</h1>
                <h2 className="text-[1em] text-[#e2eff3] font-semibold font-(family-name:--font-figtree) cursor-text md:text-nowrap">2D Precision Platformer</h2>
            </div>
        </div>
        <div className="bg-[#3e91c8] flex flex-row rounded-md p-5 inline-fit gap-3 items-center">
            <Clock className="w-auto h-auto text-[#e2eff3] min-w-[2em]" />
            <h1 className="md:text-[1em] text-[#e2eff3] font-bold font-(family-name:--font-figtree) cursor-text text-nowrap">Since 2023</h1>
        </div>
        <div className="bg-[#3e91c8] flex flex-row rounded-md p-5 inline-fit gap-3">
            <a href="https://shanjiang8080.itch.io/anchor-game" target="_blank">
                <Link className="w-auto h-auto text-[#e2eff3] min-w-[2em]" />
            </a>
        </div>
    </div>,
    text: <div
        className="flex flex-col gap-3 text-lg"
    >
        <p className="text-white md:w-[50ch] font-(family-name:--font-figtree) bg-[#000000AA] p-5 rounded-md">
        This is a 2D precision platformer I&apos;m currently developing, with the central mechanic being the anchor and how it can be used in various ways, like as a grappling hook or to propel yourself upward. It is made using the MonoGame framework in C#, and I am also using an extra framework called Nez to help with aspects like objects and scene management.
        I have a demo of the game <a href="https://shanjiang8080.itch.io/anchor-game" className="underline text-[#4091c5]" target="_blank">available on itch.io</a>.
        </p>
    </div>,
    images: [
        {
            url: '/projects/anchor_1.png',
            alt: 'Anchor Game screenshot showing the main character overlooking an edge'
        },
        {
            url: '/projects/anchor_2.png',
            alt: 'Anchor Game screenshot showing the main character hanging from a rope tethered to an anchor with a nearby red-shaped collectible'
        }
    ],
    iconUrl: '/projects/anchor.png',
    overlayUrlLeft: "/projects/anchor_background.png",
    backgroundColor: "bg-black"
}