import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import mainStylesheet from 'public/styles/index.css';
import type { SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import { Nav, ThemeToggle } from './components';
import type { MetaFunction } from '@remix-run/node';
import Curtain from './components/curtain';
import AOS from 'aos';
import clsx from 'clsx';
import Footer from '~/components/footer';
import LeftNav from '~/components/left-nav';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'bao - creative engineer',
  description:
    'A creative frontend engineer enjoy crafting awesome ui/ux, web/apps, digital stuffs',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  const [theme, setTheme] = useState('light');

  const initTheme = () => {
    const isDark = localStorage.theme === 'dark';
    const isDarkPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark || (!('theme' in localStorage) && isDarkPreferred)) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const handleThemeChange = (newTheme: SetStateAction<string>) => {
    setTheme(newTheme);
    localStorage.theme = newTheme;
  };

  const initAOS = () => {
    const windowDelta = window.innerHeight / 5;
    AOS.init({
      duration: 600,
      easing: 'ease-in-out-quad',
      anchorPlacement: 'top-bottom',
      offset: windowDelta,
    });
    AOS.refresh();
  };

  useEffect(() => {
    initTheme();
    initAOS();
  }, []);

  return (
    <html lang="en" className={clsx('antialiased', theme)}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="overflow-visible">
        <Curtain />
        <header>
          <ThemeToggle
            className="fixed top-4 left-4 z-40 md:text-lg lg:text-xl"
            theme={theme}
            onChange={handleThemeChange}
          />
          <Nav />
          <LeftNav className="fixed top-full bottom-2 -translate-y-1/2 left-3" />
        </header>
        <Outlet />
        <ScrollRestoration /> <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: mainStylesheet }];
}
