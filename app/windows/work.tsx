import Image from 'next/image'




interface WorkSection {
    jobTitle: string;
    company: string;
    duration: string;
    description: string;
    logo: string;
}

const workExperience: WorkSection[] = [
    {
        jobTitle:"Software Developer Intern",
        company:"Data on the Spot",
        duration:"July - October 2026",
        description:"At this position, I was responsible for implementing several core features in the company's voting software. My three key contributions were as follows: First, I implemented user-facing internationalization using the General Translation framework, creating and leveraging an AI skill file to make future translation efforts easy. Second, I created a view for observers so they can view current and closed ballots, queues, and Q&A questions and responses. The view is customizable such that users can focus on one or can display them in a grid. Finally, I implemented customizable notification functionality, where users can get notified of actions like ballots ending soon or Q&A questions being answered, depending on admin configuration.",
        logo:"/workplaces/dots.png"
    },
    {
        jobTitle:"AI Trainer",
        company:"DataAnnotation",
        duration:"May - August 2025",
        description:"At this position, I was responsible for evaluating and improving the results of AI models performing programming tasks across a wide variety of languages and frameworks. For some examples, I was tasked to evaluate outputs on Unity projects in C#, Flask and pygame projects in Python, React applications, and Java projects. While projects were varied, some tasks involved evaluating code diffs, comparing and contrasting AI models, examining agentic AI output, and dockerizing and creating unit tests for codebases that AI models would attempt to fulfill prompts adhering to.",
        logo:"/workplaces/dataannotation.webp"
    },
    {
        jobTitle:"Automation Developer",
        company:"BEST-CA INC",
        duration:"May - August 2024",
        description:"Under this position, I was responsible for developing and implementing automated solutions for posting and renewing Kijiji ads with Selenium in Python. As a result of my work, I was responsible for rending out 5 rooms and several parking spaces.",
        logo:"/workplaces/bestca.png"
    }
];

function WorkExperienceCard({ jobTitle, company, duration, description, logo }: WorkSection) {
    return (
        <div>
            <div
                className="flex justify-between items-center mb-8"
            >
                <div className="flex flex-col items-start space-x-2">
                    <h1
                        className="text-lg font-(family-name:--font-figtree) font-black"
                    >
                        {company}
                    </h1>
                    <h2
                        className="text-md font-(family-name:--font-figtree) font-bold"
                    >
                        {jobTitle}
                    </h2>
                    <h3
                        className="text-sm font-(family-name:--font-figtree) font-semibold"
                    >
                        {duration}
                    </h3>
                </div>
                <Image
                    src={logo}
                    alt={`${company} logo`}
                    className="w-1/2 h-fit-content object-contain"
                    width={500}
                    height={500}
                    style={{imageRendering:"auto"}}
                />
            </div>
            <p
                className="font-(family-name:--font-figtree)"
            >
                {description}
            </p>
        </div>
    )
}

export default function Work() {
    return (
        <div className="w-full mx-auto border border-gray-300 shadow-2xl bg-[#f3f2f1] font-sans flex flex-col h-187.5 overflow-hidden">
            {/* Ribbon Tabs */}
            <div aria-hidden className="border-b border-gray-200 pt-2 flex text-xs text-gray-700 select-none relative left-5">
                <span className="bg-[#185abd] text-white px-3 py-1 font-medium">Home</span>
                <span className="hover:bg-gray-100 px-3 py-1">Insert</span>
                <span className="hover:bg-gray-100 px-3 py-1">Layout</span>
                <span className="hover:bg-gray-100 px-3 py-1">References</span>
                <span className="hover:bg-gray-100 px-3 py-1">Review</span>
                <span className="hover:bg-gray-100 px-3 py-1">View</span>
            </div>

            {/* Ribbon Toolbar (The Buttons) */}
            <div aria-hidden className="bg-white border-b border-gray-300 p-2 flex items-center space-x-4 text-xs text-gray-600 shadow-sm select-none overflow-hidden">
                {/* Clipboard Group */}
                <div className="flex items-center space-x-2 border-r border-gray-200 pr-3">
                    <div className="flex flex-col items-center justify-center p-1 hover:bg-gray-100  w-12">
                        <span className="text-base">📋</span>
                        <span className="text-[10px] mt-0.5">Paste</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <span className="hover:bg-gray-100 px-1">✂️ Cut</span>
                        <span className="hover:bg-gray-100 px-1">📄 Copy</span>
                    </div>
                </div>

                {/* Font Group */}
                <div className="flex items-center space-x-2 border-r border-gray-200 pr-3">
                    <div className="flex flex-col space-y-1.5">
                        <div className="flex space-x-1">
                            <select className="border border-gray-200 px-1 py-0.5 bg-gray-50 text-[11px] outline-none" disabled defaultValue="Calibri">
                                <option>Figtree</option>
                            </select>
                            <select className="border border-gray-200 px-1 py-0.5 bg-gray-50 text-[11px] outline-none" disabled defaultValue="11">
                                <option>11</option>
                            </select>
                        </div>
                        <div className="flex space-x-2 font-bold text-gray-500">
                            <span className="hover:bg-gray-100 px-1.5 py-0.5">B</span>
                            <span className="italic hover:bg-gray-100 px-1.5 py-0.5">I</span>
                            <span className="underline hover:bg-gray-100 px-1.5 py-0.5">U</span>
                            <span className="line-through hover:bg-gray-100 px-1.5 py-0.5  text-[10px]">ab</span>
                        </div>
                    </div>
                </div>

                {/* Paragraph Group */}
                <div className="flex flex-col justify-between h-9 border-r border-gray-200 pr-3">
                    <div className="flex space-x-1.5 text-sm pt-0.5">
                        <span className="hover:bg-gray-100 p-0.5  bg-gray-100">☰</span>
                        <span className="hover:bg-gray-100 p-0.5">☷</span>
                        <span className="hover:bg-gray-100 p-0.5">☶</span>
                    </div>
                    <span className="text-[9px] text-gray-400 text-center block w-full">Paragraph</span>
                </div>
            </div>

            {/* Scrollable Workspace */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden md:p-8 p-1.5 flex justify-center items-start bg-[#f3f2f1] selection:bg-blue-200">

                {/* Centered Word Page */}
                <div className="w-162.5 min-h-210.5 bg-white shadow-md border border-gray-300 md:p-16 p-3 text-gray-800 font-serif text-justify leading-relaxed flex flex-col gap-[3em]">
                    {workExperience.map((work) => (
                        <WorkExperienceCard
                            key={work.jobTitle + work.company}
                            jobTitle={work.jobTitle}
                            company={work.company}
                            duration={work.duration}
                            description={work.description}
                            logo={work.logo}
                        />
                    ))}



                </div>

            </div>

            {/* Bottom Status Bar */}
            <div aria-hidden className="bg-[#f3f2f1] border-t border-gray-300 px-4 py-1 flex justify-between items-center text-xs text-gray-600 select-none overflow-hidden">
                <div className="flex space-x-4">
                    <span>Page 1 of 1</span>
                    <span>234 words</span>
                    <span>English (US)</span>
                </div>
                <div className="flex items-center space-x-3">
                    <span>Focus</span>
                    <span className="text-sm">📘 📄 🌐</span>
                    <div className="flex items-center space-x-1">
                        <span>100%</span>
                        <input type="range" className="w-16 accent-[#185abd]" disabled defaultValue="50" />
                    </div>
                </div>
            </div>

        </div>
    );
};