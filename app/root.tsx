import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import mainStylesheet from "public/styles/index.css";
import type { SetStateAction } from "react";
import { useEffect, useRef, useState } from "react";
import { Nav, ThemeToggle } from "./components";
import type { MetaFunction } from "@remix-run/node";
import Curtain from "./components/curtain";
import AOS from "aos";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "bao - creative engineer",
  desc: "A creative frontend engineer enjoy crafting awesome ui/ux, web/apps, digital stuffs",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const scroller = useRef(null);
  const [theme, setTheme] = useState("light");

  const initSmoothScroll = () => {
    // @ts-ignore
    import("locomotive-scroll").then((locomotiveModule) => {
      scroller.current = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: true,
      });
    });
  };

  const initTheme = () => {
    const isDark = localStorage.theme === "dark";
    const isDarkPreferred = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (isDark || (!("theme" in localStorage) && isDarkPreferred)) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleThemeChange = (newTheme: SetStateAction<string>) => {
    setTheme(newTheme);
    localStorage.theme = newTheme;
  };

  const initAOS = () => {
    const windowDelta = window.innerHeight / 5;
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-quad",
      anchorPlacement: "top-bottom",
      offset: windowDelta,
    });
    AOS.refresh();
  };

  useEffect(() => {
    initSmoothScroll();
    initTheme();
    initAOS();
  }, []);

  return (
    <html lang="en" className={theme} data-scroll-container>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Curtain />
        <header>
          <ThemeToggle
            className="fixed top-4 left-4 z-50 md:text-lg lg:text-xl"
            theme={theme}
            onChange={handleThemeChange}
          />
          <Nav />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: mainStylesheet }];
}
