"use client"
import Window from '@/app/components/window';
import Taskbar from './components/taskbar';
import TaskbarButton from './components/taskbarButton';
import { SetStateAction, useRef, useState } from 'react';
import { WindowState } from './types/windowState';
import { pageContent } from './pages';

export default function Home() {

  const [windowStatuses, setWindowStatuses] = useState<Record<string, WindowState>>({
    shell: 'expanded',
    bio: 'expanded',
    school: 'expanded',
    work: 'expanded',
    skills: 'expanded',
    projects: 'expanded',
  });

  // 3. Create a single ref container for all window DOM elements
  const windowRefs = useRef<Partial<Record<string, HTMLElement | null>>>({});

  // 4. The concise callback that accepts the window key as an argument
  const scrollToWindow = (windowKey: string) => {
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

  const setWindowStatus = (windowKey: string, value: SetStateAction<WindowState>) => {
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
    <div>
      <div className="windows-container">
        {Object.keys(pageContent).map((key) => {
          if (windowStatuses[key] != 'expanded' && windowStatuses[key] != 'maximized') return null;
          return (
            <Window
              title={key.toUpperCase()}
              state={windowStatuses[key]}
              key={key}
              ref={(el) => { windowRefs.current[key] = el; }}
              stateSetter={(newState) => setWindowStatus(key, newState)}
            >
              pageContent[key].content
            </Window>
          )
        })}
      </div>
      <Taskbar>
        {Object.keys(pageContent).map((key) => {
          return (
            <TaskbarButton
              key={key}
              state={windowStatuses[key]}
              stateSetter={(newState) => setWindowStatus(key, newState)}
              image={key}
              scrollToWindow={() => { scrollToWindow(key) }}
            />
          )
        })
        }
      </Taskbar>
    </div>
  );
}
