import Bio from "./windows/bio";
import Projects from "./windows/projects";
import School from "./windows/school";
import Shell from "./windows/shell";
import Skills from "./windows/skills";
import Work from "./windows/work";


// Defines a single section
interface ContentSection {
    content: React.ReactNode;
    position: number
}

// Defines the structure mapping
type PageContentMap = Record<string, ContentSection>;

// Content map
export const pageContent = {
    shell: {
        content: <Shell />,
        position: 0
    },
    bio: {
        content: <Bio />,
        position: 50
    },
    work: {
        content: <Work />,
        position: 55
    },
    school: {
        content: <School />,
        position: 50
    },
    skills: {
        content: <Skills />,
        position: 35
    },
    projects: {
        content: <Projects />,
        position: 50
    }
} satisfies PageContentMap;

// PageKey is "shell" | "bio" | "school" | "work" | "skills" | "projects"
export type PageKey = keyof typeof pageContent; 
