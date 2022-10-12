import clsx from 'clsx';

import { MoonIcon, SunIcon } from './icons';

type ThemeToggleProps = {
    theme?: string;
    className?: string;
    onChange?: Function;
};

export default function ThemeToggle({
    className,
    theme = 'light',
    onChange = () => {},
}: ThemeToggleProps) {
    const handleThemeToggle = () => {
        onChange(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            className={clsx('flex', 'text-primary', className)}
            onClick={handleThemeToggle}
            aria-label={`${theme} mode`}
        >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
    );
}
