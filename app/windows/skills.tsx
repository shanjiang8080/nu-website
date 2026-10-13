import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';

interface Skill {
    name: string;
    usedProjects: string[];
}

export default function Skills() {
    const [activeSkill, setActiveSkill] = React.useState('Skills');

    const skills: Skill[] = [
        { name: 'Skills', usedProjects: [] },
        { name: 'Python', usedProjects: ['Boorish', 'BEST-CA', 'CS Coursework'] },
        { name: 'C#', usedProjects: ['Unity', 'Anchor Game'] },
        { name: 'Java', usedProjects: ['CS Coursework', 'Endless Runner'] },
        { name: 'Kotlin', usedProjects: ['Collog'] },
        { name: 'JavaScript', usedProjects: ['Boorish', 'Various projects'] },
        { name: 'TypeScript', usedProjects: ['Data on the Spot', 'This site'] },
        { name: 'React', usedProjects: ['Data on the Spot', 'PantryPal', 'This site'] },
        { name: 'Next.js', usedProjects: ['Data on the Spot', 'This site'] },
        { name: 'Node.js', usedProjects: ['PantryPal'] },
        { name: 'Express', usedProjects: ['PantryPal'] },
        { name: 'MongoDB', usedProjects: ['PantryPal'] },
        { name: 'SQL', usedProjects: ['Boorish', 'Collog'] },
        { name: 'CSS', usedProjects: ['Collog', 'PantryPal', 'This site', 'Various projects'] },
        { name: 'TailwindCSS', usedProjects: ['Data on the Spot', 'This site'] },
        { name: 'Convex', usedProjects: ['Data on the Spot']},
        { name: 'Git', usedProjects: ['Basically everything'] },
        { name: 'Docker', usedProjects: ['Boorish', 'Self-hosting'] },
        { name: 'Jest', usedProjects: ['PantryPal'] },
        { name: 'Django', usedProjects: ['Boorish'] },
        { name: 'Unity', usedProjects: ['Flingblade', 'Game Studies coursework'] },
        { name: 'Selenium', usedProjects: ['BEST-CA'] },
        { name: 'Jetpack Compose', usedProjects: ['Collog'] },
        { name: 'Nginx', usedProjects: ['Collog', 'Self-hosting'] },
        { name: 'C', usedProjects: ['CS coursework'] },
        { name: 'Linux', usedProjects: ['Self-hosting', 'CS coursework'] },
        { name: 'Scrum', usedProjects: ['PantryPal', 'CS coursework'] },
    ];

    const selectedSkill = skills.find((skill) => skill.name === activeSkill) ?? skills[0];
    const isDefaultTabSelected = selectedSkill.name === 'Skills';

    return (
        <div className="w-full max-w-4xl mx-auto border border-gray-700 bg-[#1e1e1e] font-sans max-md:overflow-scroll md:overflow-hidden">
            <div className="bg-[#2d3139] pt-2 px-2 border-b border-gray-800">
                <div className="flex flex-wrap gap-x-1 gap-y-1.5 w-full pb-1.5">
                    {skills.map((skill) => {
                        const isActive = skill.name === activeSkill;

                        return (
                            <button
                                key={skill.name}
                                type="button"
                                onClick={() => setActiveSkill(skill.name)}
                                className={`h-10 px-3 flex items-center rounded-lg font-medium whitespace-nowrap border-4 ${
                                    isActive
                                        ? 'bg-[#1e1e1e] text-gray-200 border-gray-700 shadow-sm'
                                        : 'bg-[#20232a] text-gray-400 border-gray-800/40 hover:text-gray-200'
                                }`}
                            >
                                <span>{skill.name}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div aria-hidden className="flex items-center space-x-2 bg-[#1e1e1e] p-2 border-b border-gray-800">
                <div className="flex space-x-1.5 px-2">
                    <ArrowLeft className="text-gray-200" />
                    <ArrowRight className="text-gray-200" />
                </div>
                <div className="flex-1 bg-[#2d3139] rounded px-3 py-1 text-xs text-gray-500 truncate">
                    {`http://localhost:8080/skills${isDefaultTabSelected ? '' : `/${selectedSkill.name.toLowerCase()}`}`}
                </div>
            </div>

            <div className="min-h-48 bg-[#1e1e1e] flex flex-col items-center justify-center p-6 text-center">
                {isDefaultTabSelected ? (
                    <div className="space-y-2">
                        <h3 aria-hidden className="text-gray-400 font-medium text-sm">Skills Opened in New Tabs</h3>
                        <p aria-hidden className="text-gray-600 text-xs leading-relaxed">
                            Tabs show skills and projects I used them with.
                        </p>
                        <p className="sr-only">Click the preceding buttons to show projects I demonstrated and learned my skills with.</p>
                    </div>
                ) : (
                    <div className="w-full text-left space-y-3">
                        <h3 className="text-gray-200 font-semibold text-lg">{selectedSkill.name}</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                            {selectedSkill.usedProjects.map((project) => (
                                <li key={project}>{project}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

        </div>
    );
}