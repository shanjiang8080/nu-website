import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import React from 'react';

interface Skill {
    name: string
    usedProjects: string[]
}

export default function Skills() {
    // Expanded list of skills to ensure a dense, multi-row layout
    const skills = [
        'Python', 'C#', 'Java', 'Kotlin', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'SQL',
        'CSS', 'TailwindCSS', 'Git', 'Docker', 'Jest', 'Django', 'Unity', 'Selenium', 'Jetpack Compose', 'Nginx', 'C', 'Linux',
        '|',
        'Scrum', 'Cybersecurity', 'Web Development', 'App Development'
    ];

    return (
        <div className="w-full max-w-4xl mx-auto border border-gray-700 bg-[#1e1e1e] shadow-2xl overflow-hidden font-sans select-none pointer-events-none">

            {/* Browser Top Bar / Wrapping Tabs Container */}
            <div className="bg-[#2d3139] pt-2 px-2 border-b border-gray-800">
                <div className="flex flex-wrap gap-x-1 gap-y-1.5 w-full pb-1.5">
                    <div className="h-10 px-3 flex items-center rounded-lg font-medium whitespace-nowrap bg-[#1e1e1e] text-gray-200 shadow-sm">
                        <span>Skills</span>
                    </div>
                    {skills.map((skill, index) => {
                        return (
                            skill === '|' 
                            ?
                            <div className="text-gray-400 content-center pl-1 pr-1" key={`${skill}_${index}`}>|</div>
                            :
                            <div
                                key={skill}
                                className="h-10 px-3 flex items-center rounded-lg font-medium whitespace-nowrap bg-[#20232a] text-gray-400 border border-gray-800/40"
                            >
                                <span className="mr-1">{skill}</span>
                                {/* Fake close icon */}
                                <X className="w-3 h-3"/>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Address Bar / URL Area */}
            <div className="flex items-center space-x-2 bg-[#1e1e1e] p-2 border-b border-gray-800">
                <div className="flex space-x-1.5 px-2">
                    <ArrowLeft className="text-gray-200" />
                    <ArrowRight className="text-gray-200" />
                </div>
                <div className="flex-1 bg-[#2d3139] rounded px-3 py-1 text-xs text-gray-500 truncate">
                    http://localhost:8080/skills
                </div>
            </div>

            {/* Browser Main Body Content */}
            <div className="h-48 bg-[#1e1e1e] flex flex-col items-center justify-center text-center p-6">
                <div className="max-w-md space-y-2">
                    <h3 className="text-gray-400 font-medium text-sm">Skills Opened in New Tabs</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                        Change tabs for more details.
                    </p>
                </div>
            </div>

        </div>
    );
}