/* eslint-disable @next/next/no-img-element */
export interface LinkIconProps {
    title: string;
    vanityTitle: string;
    url: string;
}

export default function LinkIcon({ title, vanityTitle, url }: LinkIconProps) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div
                className="flex items-center flex-col hover:bg-[#2fccdd] transition cursor-pointer"
            >
                <div
                    className="p-[calc(var(--spacing-pixel-unit))]"
                >
                    <img
                        className="[image-rendering:pixelated] w-[calc(var(--spacing-pixel-unit)*16)] h-[calc(var(--spacing-pixel-unit)*16)]"
                        src={`/icon_${title.toLowerCase()}.png`}
                        alt={title} />
                    <img
                        src="/shortcut.png"
                        className="[image-rendering:pixelated] w-[calc(var(--spacing-pixel-unit)*4)] h-[calc(var(--spacing-pixel-unit)*4)] relative bottom-[calc(var(--spacing-pixel-unit)*3)]"
                        alt="" />
                </div>
                <span
                    className="relative -top-pixel-unit"
                >
                    {vanityTitle}
                </span>
            </div>
        </a>
    )
}