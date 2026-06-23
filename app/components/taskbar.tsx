
interface TaskbarComponentProps {
    children?: React.ReactNode;
}

export default function Taskbar({ children }: TaskbarComponentProps) {
    return (
        // 1. Base wrapper fixed to the bottom, tall enough to hold the popped up buttons
        <div className="fixed bottom-0 left-0 right-0 h-[calc(var(--spacing-pixel-unit)*25)] z-2 pointer-events-none select-none">
            
            {/* 2. The actual scrollable row */}
            <div className="w-full h-full overflow-x-auto overflow-y-hidden flex items-end pb-[calc(var(--spacing-pixel-unit)*4)] px-4 pointer-events-auto scrollbar-thin">
                <div className="flex gap-pixel-unit relative z-10">
                    {children}
                </div>
            </div>

            {/* 3. The visual taskbar background pinned to the bottom */}
            <div 
                className="absolute bottom-0 left-0 right-0 [image-rendering:pixelated] border-t-[calc(var(--spacing-pixel-unit)*7)] border-r-[calc(var(--spacing-pixel-unit)*4)] border-b-[calc(var(--spacing-pixel-unit)*8)] border-l-[calc(var(--spacing-pixel-unit)*4)] h-[calc(var(--spacing-pixel-unit)*16)] bg-[#33cadc] z-0"
                style={{ borderImage: "url('/taskbarslice.png') 7 4 8 4" }}
            />
        </div>
    )
}