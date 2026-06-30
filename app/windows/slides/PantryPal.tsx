import { Clock, Link } from "lucide-react"
import { Slide } from "../projects"

export const PantryPal: Slide = {
    simpleTitle: "PantryPal",
    title: <div className="flex flex-wrap md:flex-row flex-col items-center gap-5 bg-[#f7fafc] shadow-md inset-shadow-neutral-500 rounded-2xl p-5">
        <div
            className="bg-[#D53B07] flex flex-row rounded-2xl p-5 inline-fit gap-3"
        >
            <div
                className="flex flex-col-reverse"
            >
                <h1 className="text-[2em] text-white font-bold font-(family-name:--font-figtree) cursor-text">Collog</h1>
                <h2 className="text-[1em] text-white font-semibold font-(family-name:--font-figtree) cursor-text md:text-nowrap">Game Library Aggregator</h2>
            </div>
        </div>
        <div className="bg-[#ff8040] flex flex-row rounded-2xl p-5 inline-fit gap-3 items-center">
            <Clock className="w-auto h-auto text-white min-w-[2em]" />
            <h1 className="md:text-[1em] text-white font-bold font-(family-name:--font-figtree) cursor-text text-nowrap">Jan-May 2026</h1>
        </div>
        <div className="bg-[#ff8040] flex flex-row rounded-2xl p-5 inline-fit gap-3">
            <a href="https://github.com/TChin1010/PantryPal" target="_blank">
                <Link className="w-auto h-auto text-white min-w-[2em]" />
            </a>
        </div>
    </div>,
    text: <div
        className="flex flex-col gap-3 text-lg"
    >
        <p className="text-black font-(family-name:--font-figtree)">
            This is a React web-app I worked on as part of a school group project. Input the ingredients you have and get recipe suggestions. The app comes with inventory tracking, filtering based on diet, and shopping list functionality. I worked on endpoints and components for inventory management, as well as set up unit testing with Jest.
        </p>
    </div>,
    images: [
        {
            url: '/projects/pantrypal_2.png',
            alt: 'Pantrypal home screen suggesting recipes to you'
        },
        {
            url: '/projects/pantrypal_1.png',
            alt: 'Pantrypal ingredients screen editing an ingredient with multiple batches/expiration dates'
        }
    ],
    iconUrl: '/projects/pantrypal.png'
}