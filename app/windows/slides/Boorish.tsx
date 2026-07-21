/* eslint-disable @next/next/no-img-element */
import { Clock, Link } from "lucide-react";
import { Slide } from "../projects";

export const Boorish: Slide = {
    simpleTitle: "Boorish",
    title: <div className="flex flex-wrap md:flex-row max-md:flex-col items-center gap-y-2">
        <div className="flex max-md:flex-col md:flex-row flex-nowrap items-center inline-fit z-2">
            <img
                src="/projects/hook.svg"
                alt=""
                className="w-12 h-12 object-contain md:-rotate-90 z-10"
            />
            <div
                className="bg-[#fff8f1] rounded-2xl p-5 inline-fit z-0 max-md:-mt-2 md:mt-0 md:-ml-2"
            >
                <div className="flex flex-col-reverse">
                    <h1 className="text-[2em] text-[#3B1E0D] font-bold font-(family-name:--font-figtree) cursor-text">Boorish</h1>
                    <h2 className="text-[1em] text-[#3B1E0D] font-semibold font-(family-name:--font-figtree) cursor-text md:text-nowrap">Image browser with tags</h2>
                </div>
            </div>
        </div>
        <div className="bg-[#E2C6C6] flex flex-row p-5 inline-fit gap-3 md:rounded-tl-none md:rounded-bl-none md:rounded-tr-md md:rounded-br-md rounded-tl-none rounded-tr-none rounded-bl-md rounded-br-md h-auto relative md:right-5 md:pl-7 bottom-5 md:bottom-0 pt-7 md:pt-5 z-1 ">
            <Clock className="w-auto h-auto max-w-[1em] text-[#3B1E0D] min-w-[2em]" />
            <div
                className="flex items-center"
            >
                <h1 className="md:text-[1em] text-[#3B1E0D] font-bold font-(family-name:--font-figtree) cursor-text text-nowrap">May-July 2024</h1>
            </div>
        </div>
        <div className="bg-[url(/projects/note.svg)] p-5 inline-fit gap-3">
            <a aria-label="Link to GitHub" href="https://github.com/shanjiang8080/Boorish" target="_blank">
                <Link className="w-auto h-auto text-[#1cc533] min-w-[2em]" />
            </a>
        </div>
    </div>,
    text: <div
        className="flex flex-col gap-3 text-lg"
    >
        <div className="border-5 border-b-20 p-5 bg-[#E2C6C6] border-[#fff8f1] shadow-md">
            <p className="text-[#3B1E0D] font-(family-name:--font-figtree)">
                This is an Django-based web-app that allows users to upload and tag images, similar to a booru.
            </p>
        </div>
    </div>,
    images: [
        {
            url: '/projects/boorish_1.png',
            alt: 'Boorish home screen showing photos and tags'
        },
        {
            url: '/projects/boorish_2.png',
            alt: 'Boorish detail view'
        }
    ],
    iconUrl: '/projects/boorish.png',
    backgroundColor: 'bg-[#aecfc6]'
}
