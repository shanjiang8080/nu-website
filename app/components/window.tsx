import React from 'react';
import PixelText from './PixelText';
import { WindowState } from '../types/windowState';

interface WindowComponentProps {
    title: string;
    state: WindowState;
    stateSetter: React.Dispatch<React.SetStateAction<WindowState>>;
    children: React.ReactNode;
    position: number;
    ref: (instance: HTMLElement | null) => void;
}

function calcPosition(position: number): React.CSSProperties {
    if (position <= 25) {
        return { "--left": `${position}%` } as React.CSSProperties;
    } else if (position >= 75) {
        return { "--left": `${position - 100}%` } as React.CSSProperties;
    }
    return { "--left": `${position - 50}%` } as React.CSSProperties;

}
function calcAlignment(position: number): string {
    if (position <= 25) {
        return 'lg:self-start'
    } else if (position >= 75) {
        return 'lg:self-end'
    }
    return 'lg:self-center'
}
export default function Window({ title = "testing title", state, stateSetter, children, position, ref }: WindowComponentProps) {
    const positionStyle = calcPosition(position);
    const positionAlignment = calcAlignment(position);
    let windowStyle: string
    switch (state) {
        case 'closed':
            windowStyle = `relative w-fit max-w-dvw my-[2em] z-1 ${positionAlignment} lg:left-(--left,0) lg:right-(--right,0) hidden`
            break;
        case 'expanded':
            windowStyle = `relative w-fit max-w-dvw my-[2em] z-1 ${positionAlignment} lg:left-(--left,0) lg:right-(--right,0)`
            break;
        case 'maximized':
            windowStyle = "fixed top-0 left-0 right-0 bottom-[calc(var(--spacing-pixel-unit)*16)] z-10 flex flex-col";
            break;
        case 'minimized':
            windowStyle = `relative w-fit max-w-dvw my-[2em] z-1 ${positionAlignment} lg:left-(--left,0) lg:right-(--right,0) invisible`
            break;
    }
    return (
        <section
            className={windowStyle}
            ref={ref}
            style={(state === 'maximized') ? {} : positionStyle}
        >
            {/* Window Top Bar */}
            <div className="flex flex-row shrink-0 h-[calc(var(--spacing-pixel-unit)*7)]">

                {/* Window Title */}
                <div
                    className="[image-rendering:pixelated] border-t-[calc(var(--spacing-pixel-unit)*3)] border-b-[calc(var(--spacing-pixel-unit)*3)] border-r-[calc(var(--spacing-pixel-unit)*1)] border-l-[calc(var(--spacing-pixel-unit)*1)] w-[calc(100%-var(--spacing-pixel-unit)*24)]"
                    style={{ borderImage: "url('/windowbar9slice.png') 3 1 3 1 fill" }}
                >
                    <PixelText text={title} />
                </div>

                {/* Window Buttons TODO */}
                <div
                    className="h-[calc(var(--spacing-pixel-unit)*7)] w-[calc(var(--spacing-pixel-unit)*24)] bg-no-repeat bg-contain [image-rendering:pixelated]"
                    style={{ backgroundImage: "url('/windowbuttons.png')" }}
                >
                    <button
                        className="h-[calc(var(--spacing-pixel-unit)*7)] w-[calc(var(--spacing-pixel-unit)*9)]"
                        onClick={() => { stateSetter('minimized'); console.log("minimize") }}
                    >
                    </button>
                    <button
                        className="h-[calc(var(--spacing-pixel-unit)*7)] w-[calc(var(--spacing-pixel-unit)*6)]"
                        onClick={() => {
                            if (state === 'maximized') {
                                stateSetter('expanded'); console.log("maximize");
                            } else {
                                stateSetter('maximized'); console.log("maximize");
                            }
                        }}
                    >
                    </button>
                    <button
                        className="h-[calc(var(--spacing-pixel-unit)*7)] w-[calc(var(--spacing-pixel-unit)*9)]"
                        onClick={() => { stateSetter('closed'); console.log("close") }}
                    >
                    </button>
                </div>
            </div>

            {/* Window Bottom / Content Area */}
            <div
                className="[image-rendering:pixelated] border-t-[calc(var(--spacing-pixel-unit)*12)] border-r-[calc(var(--spacing-pixel-unit)*10)] border-b-[calc(var(--spacing-pixel-unit)*15)] border-l-[calc(var(--spacing-pixel-unit)*4)] min-h-[calc(var(--spacing-pixel-unit)*28)] flex-1 flex flex-col"
                style={{ borderImage: "url('/window9slice.png') 12 10 15 4" }}
            >
                <div className={`mt-[calc(var(--spacing-pixel-unit)*-12)] mb-[calc(var(--spacing-pixel-unit)*-11)] min-h-[calc(var(--spacing-pixel-unit)*25)] flex flex-col h-[150%] *:h-full ${state === 'maximized' ? '*:max-w-full' : ''}`}>
                    {children || <p>test content here...</p>}
                </div>
            </div>
        </section>
    );
}