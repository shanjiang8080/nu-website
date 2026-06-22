
interface TaskbarComponentProps {
    children?: React.ReactNode;
}

export default function Taskbar({ children }: TaskbarComponentProps) {
    // TODO replace div with nav
    return (
        <div 
            className="fixed bottom-0 left-0 right-0 [image-rendering:pixelated] border-t-[calc(var(--spacing-pixel-unit)*7)] border-r-[calc(var(--spacing-pixel-unit)*4)] border-b-[calc(var(--spacing-pixel-unit)*8)] border-l-[calc(var(--spacing-pixel-unit)*4)] h-[calc(var(--spacing-pixel-unit)*16)] bg-[#33cadc]"
            style={{ borderImage: "url('/taskbarslice.png') 7 4 8 4" }}
        >
            {children}
        </div>
    )
}