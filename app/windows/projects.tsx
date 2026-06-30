/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play, Layout, Type, Image as ImageIcon } from 'lucide-react';
import Zoom from 'react-medium-image-zoom';
import '../../public/medium_zoom_styles.css';
import { Collog } from './slides/Collog';
import { PantryPal } from './slides/PantryPal';
import { Boorish } from './slides/Boorish';
import { Anchor } from './slides/Anchor';
import { Flingblade } from './slides/Flingblade';

interface ImageInfo {
    url: string
    alt: string
}

export interface Slide {
    // The title of the project
    title: React.ReactNode
    simpleTitle: string
    // The main body text
    text: React.ReactNode
    // Images
    images: ImageInfo[]
    // Whether images are grouped horizontally (true, default) or vertically (false)
    imagesDisplayHorizontally?: boolean
    // URLs with a vector/raster overlay to provide theming. behind text/title.
    overlayUrlLeft?: string
    backgroundColor?: string
    iconUrl: string
}

const slides: Slide[] = [
    Collog,
    PantryPal,
    Boorish,
    Anchor,
    Flingblade
];

export default function Projects() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const activeSlides = slides; // Ensure 'slides' is imported or defined in your scope
    const activeSlide = activeSlides[currentSlide];

    const nextSlide = () => {
        if (currentSlide < activeSlides.length - 1) setCurrentSlide(currentSlide + 1);
    };

    const prevSlide = () => {
        if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
    };

    return (
        <div className="flex flex-col bg-[#f8f9fa] border border-gray-300 shadow-lg font-sans select-none w-full overflow-y-scroll overflow-x-hidden">

            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 text-sm text-gray-700">
                <div className="flex items-center space-x-4">
                    <h2 className="font-bold text-lg">My Projects</h2>
                    <div className="h-4 w-px bg-gray-300"></div>
                    <div className="px-2 py-1 rounded transition">File</div>
                    <div className="px-2 py-1 rounded transition">Edit</div>
                    <div className="px-2 py-1 rounded transition">Insert</div>
                    <div className="px-2 py-1 rounded transition">Format</div>
                </div>

                <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium transition">
                        <Play size={14} className="fill-current" />
                        <span>Slideshow</span>
                    </div>
                </div>
            </div>

            {/* Secondary Action Bar */}
            <div className="flex items-center space-x-3 px-4 py-1.5 bg-gray-50 border-b border-gray-200">
                <Layout size={16} className="text-gray-500" />
                <Type size={16} className="text-gray-500" />
                <ImageIcon size={16} className="text-gray-500" />
                <div className="h-4 w-px bg-gray-300"></div>
                <span className="text-xs text-gray-400"> </span>
            </div>

            {/* Main Workspace Area */}
            <div className="flex flex-1 md:flex-row flex-col bg-[#ebebeb]">

                {/* Left Sidebar (Slide Thumbnails) */}
                <div className="bg-white border-r border-gray-200 overflow-y-auto p-3 flex md:flex-col flex-row md:space-y-3 max-md:space-x-3 md:min-w-fit max-md:w-full">
                    {activeSlides.map((slide, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`group flex items-start space-x-2 p-1 rounded transition ${currentSlide === index ? 'bg-blue-50 ring-2 ring-blue-500' : ''
                                }`}
                        >
                            <span className="text-xs font-medium text-gray-400 w-3 text-right mt-1">{index + 1}</span>

                            <div className={`relative flex-1 ${slide.backgroundColor || "bg-white"} border border-gray-300 rounded p-1.5 shadow-sm overflow-hidden flex flex-col justify-between`}>
                                <span className="absolute top-1.5 left-1.5 text-black font-semibold bg-[#ffffffcc] rounded-[1em] pl-2 pr-2 z-10">
                                    {slide.simpleTitle}
                                </span>

                                <img
                                    src={slide.iconUrl}
                                    className="[image-rendering:pixelated] w-[calc(var(--spacing-pixel-unit)*22)] h-[calc(var(--spacing-pixel-unit)*22)] max-w-fit"
                                    alt={`${slide.title} icon`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                {/* Center Canvas (The "Slide") */}
                <div className="flex-1 flex items-center md:p-8 p-1.5 overflow-visible select-text md:max-w-[80vw]">
                    <div className={`relative overflow-hidden border border-gray-400 ${activeSlide.backgroundColor || "bg-white"} flex w-full max-lg:flex-col lg:flex-row justify-center lg:aspect-video items-center lg:max-h-[75vh]`}>
                        {activeSlide.overlayUrlLeft ? (
                            <div
                                className="pointer-events-none absolute inset-y-0 left-0 w-full bg-no-repeat bg-left"
                                style={{
                                    backgroundImage: `url(${activeSlide.overlayUrlLeft})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'left center',
                                }}
                            />
                        ) : null}

                        <div className="relative z-10 flex flex-col p-12 justify-start box-border gap-2 lg:w-[50%]">
                            {activeSlide.title}
                            {activeSlide.text}
                        </div>

                        {/* Image Container */}
                        <div className={`relative z-10 md:h-full w-full md:max-w-[50%] p-4 grid ${(activeSlide.imagesDisplayHorizontally ? "grid-flow-col" : "grid-flow-row")} gap-4 auto-rows-fr justify-items-center items-center`}>
                            {activeSlide?.images?.map((image) => (
                                <div
                                    className="relative w-full h-full flex items-center justify-center **:h-full **:w-full"
                                    key={image.url}
                                >
                                    <Zoom>
                                        <Image
                                            src={image.url}
                                            alt={image.alt}
                                            width={500}
                                            height={500}
                                            style={{ imageRendering: "auto" }}
                                            className="object-contain w-full h-full"
                                        />
                                    </Zoom>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Status Bar / Navigation */}
            <div className="flex items-center justify-between px-4 py-1.5 bg-white border-t border-gray-200 text-xs text-gray-500">
                <div>
                    Slide {currentSlide + 1} of {activeSlides.length}
                </div>
                <div className="flex items-center space-x-2">
                    <div
                        onClick={prevSlide}
                        className="p-1 rounded  disabled:opacity-30"
                    >
                        <ChevronLeft size={16} />
                    </div>
                    <div
                        onClick={nextSlide}
                        className="p-1 rounded disabled:opacity-30"
                    >
                        <ChevronRight size={16} />
                    </div>
                </div>
            </div>

        </div>
    );
};