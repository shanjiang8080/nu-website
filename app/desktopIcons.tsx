import { LinkIconProps } from "./components/linkIcon";

// Defines the structure mapping
type iconMap = Record<string, LinkIconProps>;

// Content map
export const iconContent = {
    github: {
        title: "GitHub",
        vanityTitle: "GitHub",
        url: "https://github.com/shanjiang8080"
    },
    linkedin: {
        title: "LinkedIn",
        vanityTitle: "LinkedIn",
        url: "https://www.linkedin.com/in/shanjiang8080/"
    },
    itch: {
        title: "Itch",
        vanityTitle: "Itch.io",
        url: "https://shanjiang8080.itch.io/"
    }
} satisfies iconMap;

// IconKey is "github" | "linkedin" | "itch"
export type IconKey = keyof typeof iconContent; 
