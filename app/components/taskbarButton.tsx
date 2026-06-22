/* eslint-disable @next/next/no-img-element */
import { WindowState } from "../types/windowState";

interface TaskbarButtonProps {
    state: WindowState;
    stateSetter: React.Dispatch<React.SetStateAction<WindowState>>;
    image: string;
    scrollToWindow: () => void;
}

export default function TaskbarButton({ state, stateSetter, image, scrollToWindow }: TaskbarButtonProps) {
    let offset: number
    switch (state) {
        case 'closed':
            offset = 0;
            break;
        case 'minimized':
            offset = 1;
            break;
        case 'expanded':
            offset = 2;
            break;
        case 'maximized':
            offset = 2;
            break;
    }
    const onclick = () => {
        if (state === 'expanded') stateSetter('minimized')
        else {
            stateSetter('expanded');
            scrollToWindow();
        }
    }
    const buttonImage = `/taskbarbutton${state == 'maximized' ? 'expanded' : state}.png`;

    return (
        <button
            className="[image-rendering:pixelated] h-[calc(var(--spacing-pixel-unit)*18)] w-[calc(var(--spacing-pixel-unit)*21)] bg-no-repeat bg-contain relative bottom-[calc(var(--spacing-pixel-unit)*9)]"
            style={{ backgroundImage: `url('${buttonImage}')` }}
            onClick={onclick}
        >
            <img
                className="[image-rendering:pixelated] absolute container"
                style={{ bottom: `calc(var(--spacing-pixel-unit) * ${offset + 1})` }}
                src={`/taskbarimage${image}.png`}
                alt={image}
            />

        </button>
    )




}