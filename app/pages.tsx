import Bio from "./windows/bio";
import Projects from "./windows/projects";
import School from "./windows/school";
import Shell from "./windows/shell";
import Skills from "./windows/skills";
import Work from "./windows/work";

export const pageContent = 
{
    shell: {
        content: <Shell/>
    },
    bio: {
        content: <Bio/>
    },
    school: {
        content: <School/>
    },
    work: {
        content: <Work/>
    },
    skills: {
        content: <Skills/>
    },
    projects: {
        content: <Projects/>
    }
}