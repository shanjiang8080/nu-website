import { useEffect, useState } from "react";

export default function Shell() {
    const [shellBlink, setShellBlink] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setShellBlink((prev) => !prev);
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    const art = "    _____ __                       ___                  \r\n   \/ ___\/\/ \/_  ____ _____         \/ (_)___ _____  ____ _\r\n   \\__ \\\/ __ \\\/ __ `\/ __ \\   __  \/ \/ \/ __ `\/ __ \\\/ __ `\/\r\n  ___\/ \/ \/ \/ \/ \/_\/ \/ \/ \/ \/  \/ \/_\/ \/ \/ \/_\/ \/ \/ \/ \/ \/_\/ \/ \'s\r\n \/____\/_\/ \/_\/\\__,_\/_\/ \/_\/   \\____\/_\/\\__,_\/_\/ \/_\/\\__, \/  \r\n     website!                     (Shan Jiang) \/____\/   \r\n"
    return (
        <header
            className="bg-[#322a2d] p-4"
        >
            <p
                className="text-white font-mono whitespace-break-spaces font-bold"
            >
                Welcome to...
            </p>
            <p className="sr-only">Shan Jiang's website!</p>
            <p
                aria-hidden
                className="text-transparent bg-clip-text font-mono text-[min(1em,calc((100vw-14*var(--spacing-pixel-unit))/42))] whitespace-break-spaces font-bold"
                style={{ backgroundImage: "linear-gradient(30deg,rgba(129, 101, 184, 1) 0%, rgba(174, 219, 230, 1) 50%, rgba(255, 254, 224, 1) 100%)" }}
            >
                {art}
            </p>
            <p
                aria-hidden
                className="text-white font-mono whitespace-break-spaces font-bold"
            >
                guest $ {shellBlink ? "█" : " "}
            </p>

        </header>
    )
}