import React from 'react';
import PixelText from './PixelText';
import { WindowState } from '../types/windowState';

interface WindowComponentProps {
    title: string;
    state: WindowState;
    stateSetter: React.Dispatch<React.SetStateAction<WindowState>>;
    children?: React.ReactNode;
    position?: number;
    ref: (instance: HTMLElement | null) => void;
}

function calcPosition(position: number): React.CSSProperties | undefined {
    if (position <= 25) {
        return { alignSelf: 'flex-start', left: `${position}%` };
    } else if (position > 25 && position < 75) {
        return { alignSelf: 'center', left: `${position-50}%` };
    } else if (position >= 75) {
        return { alignSelf: 'flex-end', right: `${100-position}%` };
    }
}
export default function Window({ title = "testing title", state, stateSetter, children, position, ref }: WindowComponentProps) {
    let positionStyle: React.CSSProperties;
    if (position != null) {
        positionStyle = calcPosition(position) as React.CSSProperties;
    } else {
        positionStyle = {};
    }

    return (
        <section
            className={
                (state === 'maximized') ?
                    "fixed top-0 left-0 right-0 bottom-[calc(var(--spacing-pixel-unit)*16)] z-10 flex flex-col" :
                    "relative w-fit max-w-dvw my-[2em] z-1"
            }
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
                <div className="mt-[calc(var(--spacing-pixel-unit)*-12)] mb-[calc(var(--spacing-pixel-unit)*-11)] min-h-[calc(var(--spacing-pixel-unit)*25)] flex flex-col h-[150%] *:h-full *:pt-1">
                    {children || <p>test content here...</p>}
                </div>
            </div>
        </section>
    );
}