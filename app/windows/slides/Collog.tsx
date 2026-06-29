import { Clock, Gamepad2, Link } from "lucide-react";
import { Slide } from "../projects"

export const Collog: Slide = {
    simpleTitle: "Collog",
    title: <div className="flex flex-wrap md:flex-row flex-col items-center gap-5">
        <div
            className="bg-[#A4F657] flex flex-row rounded-2xl p-5 md:p-10 inline-fit gap-3"
        >
            <Gamepad2 className="w-auto h-auto text-[#305A00FF] min-w-[2em]" />
            <div
                className="flex flex-col-reverse"
            >
                <h1 className="text-[2em] text-[#305A00FF] font-bold font-(family-name:--font-figtree) cursor-text">Collog</h1>
                <h2 className="text-[1em] text-[#305A00FF] font-semibold font-(family-name:--font-figtree) cursor-text md:text-nowrap">Game Library Aggregator</h2>
            </div>
        </div>
        <div className="bg-[#D7EE66] flex flex-row rounded-2xl p-5 inline-fit gap-3">
            <Clock className="w-auto h-auto text-[#4B5700] min-w-[2em]" />
            <div
                className="flex flex-col-reverse"
            >
                <h1 className="md:text-[1em] text-[#4B5700] font-bold font-(family-name:--font-figtree) cursor-text text-nowrap">Summer 2025</h1>
                <h2 className="text-[0.75em] text-[#4B5700] font-semibold font-(family-name:--font-figtree) cursor-text">Since</h2>
            </div>
        </div>
        <div className="bg-[#D7EE66] flex flex-row rounded-2xl p-5 inline-fit gap-3">
            <a href="https://github.com/shanjiang8080/Collectalogger" target="_blank">
                <Link className="w-auto h-auto text-[#4B5700] min-w-[2em]" />
            </a>
        </div>
    </div>,
    text: <div
        className="flex flex-col gap-3 text-lg"
    >
        <p className="w-[min(50ch, 100%)]">
            This is an Android app that aggregates libraries from Steam, Epic Games, GOG, and Itch.io, combining them into one library.
        </p>
        <h2 className="font-semibold text-lg bg-[#D7EE66] rounded-xl p-1 pl-2 pr-2 w-fit text-[#4B5700] font-(family-name:--font-figtree)">Features</h2>
        <ul className="list-disc list-inside">
            <li>Importing games</li>
            <li>Custom covers</li>
            <li>Playtime</li>
            <li>Play status tracking</li>
            <li>Favorites</li>
            <li>Filtering</li>
        </ul>
    </div>,
    images: [
        {
            url: '/projects/collog_1.png',
            alt: 'Collog gallery screen showing a list of games'
        },
        {
            url: '/projects/collog_2.png',
            alt: 'Collog detail screen showing Enter the Gungeon'
        }
    ],
    backgroundColor: 'bg-[#0C1000FF]',
    imagesDisplayHorizontally: true,
    iconUrl: '/projects/collog.png'
};