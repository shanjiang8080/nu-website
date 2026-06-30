import { Clock, Link } from "lucide-react"
import { Slide } from "../projects"

export const Flingblade: Slide = {
    simpleTitle: "Flingblade",
    title: <div className="flex flex-wrap md:flex-row flex-col items-center gap-5">
        <div
            className="bg-[#827092] flex flex-row rounded-md p-5 inline-fit gap-3"
        >
            <div
                className="flex flex-col-reverse"
            >
                <h1 className="text-[2em] text-[#dff6f5] font-bold font-(family-name:--font-figtree) cursor-text">Flingblade</h1>
                <h2 className="text-[1em] text-[#dff6f5] font-semibold font-(family-name:--font-figtree) cursor-text md:text-nowrap">2D Physics Platformer</h2>
            </div>
        </div>
        <div className="bg-[#a0938e] flex flex-row rounded-md p-5 inline-fit gap-3 items-center">
            <Clock className="w-auto h-auto text-[#dff6f5] min-w-[2em]" />
            <h1 className="md:text-[1em] text-[#dff6f5] font-bold font-(family-name:--font-figtree) cursor-text text-nowrap">March-April 2025</h1>
        </div>
        <div className="bg-[#a0938e] flex flex-row rounded-md p-5 inline-fit gap-3">
            <a href="https://shanjiang8080.itch.io/flingblade" target="_blank">
                <Link className="w-auto h-auto text-[#dff6f5] min-w-[2em]" />
            </a>
        </div>
    </div>,
    text: <div
        className="flex flex-col gap-3 text-lg"
    >
        <p className="text-white font-(family-name:--font-figtree) bg-[#000000AA] p-5 rounded-md">
        FlingBlade is a 2D action platformer where you have a multi-functional sword to use to fight enemies and platform. The sword can be thrown, recalled, and used as a platform to stand on and jump off of.
        I was the primary programmer for the project, handling character, sword, and level programming. I also created most of the pixel art.
        </p>
    </div>,
    images: [
        {
            url: '/projects/flingblade_1.png',
            alt: 'Flingblade screenshot showing the main character holding a sword with floating collectable coins in the air'
        },
        {
            url: '/projects/flingblade_2.png',
            alt: 'Flingblade screenshot showing the main character overlooking an edge with the sword embedded in a wall'
        }
    ],
    iconUrl: '/projects/knight.png',
    overlayUrlLeft: "/projects/flingblade_background.png",
    backgroundColor: "bg-[#343345]"
}