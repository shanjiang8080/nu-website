import {
    Menu,
    Undo2,
    Redo2,
    LayoutTemplate,
    Type,
    Image as ImageIcon,
    Shapes,
    Upload,
    Layers,
    Share2,
    ZoomIn
} from 'lucide-react';
import Image from 'next/image';



export default function School() {
    return (
        <div className="w-full h-screen flex flex-col bg-[#f3f4f6] text-[#0f172a] font-sans overflow-hidden min-w-[40vw]">

            {/* Top Navigation Bar */}
            <header className="h-14 bg-linear-to-r from-purple-600 to-blue-500 px-4 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-4">
                    <Menu className="w-5 h-5 text-gray-100" />
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">My Education</span>
                    <div className="h-4 w-px bg-gray-100 mx-2" />
                    <Undo2 className="w-4 h-4 text-gray-100" />
                    <Redo2 className="w-4 h-4 text-gray-100" />
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 border border-gray-200 rounded px-2 py-1 text-xs text-gray-500 bg-gray-200">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>100%</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded">
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Share</span>
                    </div>
                </div>
            </header>

            {/* Main Workspace Body */}
            <div className="flex-1 flex overflow-hidden md:flex-row max-md:flex-col">

                {/* Left Toolbar */}
                <aside className="md:w-20 bg-white border-r border-gray-200 flex md:flex-col max-md:flex-row items-center py-4 gap-6 pointer-events-none h-fit *:pl-2 *:pr-2">
                    <div className="flex flex-col items-center gap-1 text-purple-600">
                        <LayoutTemplate className="w-5 h-5" />
                        <span className="text-[10px] font-medium">Templates</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-gray-400">
                        <Type className="w-5 h-5" />
                        <span className="text-[10px] font-medium">Text</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-gray-400">
                        <ImageIcon className="w-5 h-5" />
                        <span className="text-[10px] font-medium">Photos</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-gray-400">
                        <Shapes className="w-5 h-5" />
                        <span className="text-[10px] font-medium">Elements</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-gray-400">
                        <Upload className="w-5 h-5" />
                        <span className="text-[10px] font-medium">Uploads</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-gray-400 mt-auto">
                        <Layers className="w-5 h-5" />
                        <span className="text-[10px] font-medium">Layers</span>
                    </div>
                </aside>

                {/* Central Canvas Container */}
                <main className="flex-1 md:p-8 max-md:p-1 flex items-center justify-center relative bg-[#f8fafc] overflow-scroll">

                    {/* The Inner "Canvas" Workspace */}
                    <div className="w-full max-w-5xl bg-white shadow-xl border border-gray-200 rounded-sm flex flex-col relative">
                        <div className="w-full p-6">
                            <section>
                                <div className="flex justify-between items-center mb-8 md:flex-row max-md:flex-col max-md:gap-y-5 md:gap-x-5">
                                    <Image src="/utm.svg" alt="University of Toronto Mississauga logo" width={400} height={176} />
                                    <div
                                        className="flex flex-col items-start space-x-2 bg-cover p-5 pt-10 pb-10 bg-blend-normal"
                                        style={{ imageRendering: "smooth", backgroundImage: "linear-gradient(rgba(101, 138, 148, 0.75) 0%, rgba(77, 61, 105, 0.75) 100%), url(/utm_backdrop.jpg)" }}
                                    >
                                        <h1 className="text-lg font-(family-name:--font-figtree) text-white font-black">University of Toronto Mississauga</h1>
                                        <h2 className="text-md font-(family-name:--font-figtree) text-white font-bold">Computer Science Major - Statistics Minor - Game Studies Minor</h2>
                                        <h3 className="text-sm font-(family-name:--font-figtree) text-white font-semibold">2023-2028</h3>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center p-5 md:flex-row max-md:flex-col-reverse gap-5">
                                    <Image src="utm_graphic.svg" alt="Education graphic" width={300} height={500} />
                                    <p className="font-(family-name:--font-figtree) max-w-[50ch]">
                                        I am currently a third year Computer Science major at the University of Toronto Mississauga. My CGPA is currently 3.8. While I have CS as my major subject, I&apos;m also taking minors in Statistics and Game Studies.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
}