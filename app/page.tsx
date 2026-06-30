"use client"
import Window from '@/app/components/window';
import Taskbar from './components/taskbar';
import TaskbarButton from './components/taskbarButton';
import { SetStateAction, useRef, useState } from 'react';
import { WindowState } from './types/windowState';
import { pageContent, PageKey } from './pages';
import { iconContent, IconKey } from './desktopIcons';
import LinkIcon from './components/linkIcon';

export default function Home() {

  const [windowStatuses, setWindowStatuses] = useState<Record<PageKey, WindowState>>({
    shell: 'expanded',
    bio: 'expanded',
    school: 'expanded',
    work: 'expanded',
    skills: 'expanded',
    projects: 'expanded',
  });

  // A single ref container for all window DOM elements
  const windowRefs = useRef<Partial<Record<PageKey, HTMLElement | null>>>({});

  const scrollToWindow = (windowKey: PageKey) => {
    // Optional: If the window is minimized or closed, you'd likely want to 
    // expand it first before scrolling so the DOM element exists/is visible.
    setWindowStatuses((prev) => ({ ...prev, [windowKey]: 'expanded' }));

    // Timeout ensures React has a microtask tick to render the expanded window if it was hidden
    setTimeout(() => {
      const element = windowRefs.current[windowKey];
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 0);
  };

  const setWindowStatus = (windowKey: PageKey, value: SetStateAction<WindowState>) => {
    setWindowStatuses((prev) => {
      const resolvedState = typeof value === 'function'
        ? (value as (prevState: WindowState) => WindowState)(prev[windowKey] as WindowState)
        : value;

      return {
        ...prev,
        [windowKey]: resolvedState,
      };
    });
  };

  return (
    <div className="pb-[calc(var(--spacing-pixel-unit)*32)] overflow-x-hidden">
      {/* Windows Container */}
      <div
        className="flex flex-col items-center relative max-md:top-[calc(var(--spacing-pixel-unit)*32)] md:top-0">
        {Object.keys(pageContent).map((key) => {
          const windowKey = key as PageKey;
          return (
            <Window
              title={windowKey.toUpperCase()}
              state={windowStatuses[windowKey]}
              key={windowKey}
              ref={(el) => { windowRefs.current[windowKey] = el; }}
              stateSetter={(newState) => setWindowStatus(windowKey, newState)}
              position={pageContent[windowKey].position}
            >
              {pageContent[windowKey].content}
            </Window>
          )
        })}
      </div>
      <Taskbar>
        {Object.keys(pageContent).map((key) => {
          const windowKey = key as PageKey;
          return (
            <TaskbarButton
              key={windowKey}
              state={windowStatuses[windowKey]}
              stateSetter={(newState) => setWindowStatus(windowKey, newState)}
              image={windowKey}
              scrollToWindow={() => { scrollToWindow(windowKey) }}
            />
          )
        })
        }
      </Taskbar>
      {/* Links container */}
      <section className="md:fixed max-md:absolute top-[calc(var(--spacing-pixel-unit)*2)] md:right-[calc(var(--spacing-pixel-unit)*2)] flex md:flex-col gap-pixel-unit">
        {Object.keys(iconContent).map((key) => {
          const iconKey = key as IconKey;
          return (
            <LinkIcon
              title={iconContent[iconKey].title}
              vanityTitle={iconContent[iconKey].vanityTitle}
              url={iconContent[iconKey].url}
              key={iconKey}
            />
          );
        })}
      </section>
    </div>
  );
}
