import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import mainStylesheet from 'public/styles/index.css';
import type { SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import { Nav, ThemeToggle } from './components';
import { MetaFunction, redirect } from '@remix-run/node';
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

const MAINTENANCE_MODE = true;
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
      {MAINTENANCE_MODE ? (
        <body>
          <main className="flex items-center justify-center h-screen w-screen text-center grayscale">
            <h1 className="font-sans font-light text-gray-200 text-5xl">Website is under maintenance. 🌆 </h1>
          </main>
        </body>
      ) : (
        <body className="overflow-visible font-sans">
          <Curtain />
          <header>
            <ThemeToggle
              className="fixed top-4 left-4 z-50 md:text-lg lg:text-xl"
              theme={theme}
              onChange={handleThemeChange}
            />
            <Nav className="md:fixed top-0 z-40 w-full" />
            <LeftNav className="fixed top-full bottom-2 -translate-y-1/2 left-3" />
          </header>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <Footer />
          <script
            src="https://platform.linkedin.com/badges/js/profile.js"
            async
            defer
            type="text/javascript"
          ></script>
        </body>
      )}
    </html>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: mainStylesheet }];
}
