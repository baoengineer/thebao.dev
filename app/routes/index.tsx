import anime from "animejs";
import { useEffect, useRef, useState } from "react";
import { Link } from "@remix-run/react";
import avatar from "public/images/avatar.png";
import Lottie from "lottie-react";
import meAnimation from "../animations/me.json";
import { Waypoint } from "react-waypoint";

export default function Main() {
  const textStackRef = useRef<HTMLDivElement>(null);
  const [renderAnimation, setRenderAnimation] = useState(false);

  const initTextStackAnimation = () => {
    const textStack = textStackRef.current;
    if (!textStack) {
      return;
    }
    const timeline = anime.timeline({
      easing: "easeOutExpo",
      duration: 1000,
      loop: true,
    });
    const texts = textStack.querySelectorAll("span");
    texts.forEach((text) => {
      timeline
        .add({
          targets: text,
          opacity: 1,
        })
        .add({
          targets: text,
          opacity: 0,
        });
    });
  };

  useEffect(() => {
    initTextStackAnimation();
  }, []);

  return (
    <main>
      <section className="py-10 md:py-20">
        <div className="container flex w-full justify-end items-center text-right">
          <ul className="flex flex-col gap-2 md:gap-4 lg:gap-6 md:-mt-40">
            <div
              data-aos="fade-up"
              className="flex gap-2 md:gap-4 lg:gap-6 flex-col min-h-1/2-screen md:min-h-screen"
            >
              <li className="mt-auto">
                <h1 className="h1 text-gray-100">bao</h1>
              </li>
              <li>
                <h2 className="h1">creative engineer.</h2>
              </li>
            </div>
            <li data-aos="fade-up">
              <span className="h1 text-gray-100">passionate in</span>
            </li>
            <li data-aos="fade-up">
              <span className="h1">ui/ux.web/app</span>
            </li>
            <li data-aos="fade-up">
              <span className="h1">digital stuffs</span>
            </li>
            <li data-aos="fade-up">
              <span className="h1 text-gray-100">focused on</span>
            </li>
            <li data-aos="fade-up">
              <div className="flex justify-end">
                <div
                  ref={textStackRef}
                  className="flex flex-col relative items-end"
                >
                  <span className="h1 absolute h-full opacity-100">fast</span>
                  <span className="h1 opacity-0">modern</span>
                  <span className="h1 absolute h-full opacity-0">
                    resilient
                  </span>
                </div>
                <span className="h1 ml-3 md:ml-5 lg:ml-10">user exp</span>
              </div>
            </li>
            <li data-aos="fade-up">
              <span className="h1">animations</span>
            </li>
            <li data-aos="fade-up">
              <span className="h1">accessibility.</span>
            </li>
          </ul>
        </div>
      </section>
      <section id="about" className="py-0 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-2 min-h-screen">
            <div className=" lg:sticky top-0 self-start md:py-24">
              <h3 className="underline underline-offset-8" data-aos="fade-up">
                about me
              </h3>
              <div className="flex relative" data-aos="fade-up ">
                <img
                  src={avatar}
                  alt="bao"
                  className="w-48 rounded-md drop-shadow-sm grayscale"
                />
                {renderAnimation && (
                  <div className="grayscale absolute -bottom-1/3 right-1/3 tr w-48">
                    <Lottie
                      animationData={meAnimation}
                      initialSegment={[0, 50]}
                      loop={false}
                    />
                  </div>
                )}
              </div>
            </div>
            <article className="text-md lg:text-lg md:py-24">
              <p className="text-3xl" data-aos="fade-up">
                hi, I'm bao - an idle guy who loves coding, making internet
                products, and tech stuffs.
              </p>
              <br />
              <p data-aos="fade-up">I'm</p>
              <div className="ml-6" data-aos="fade-up">
                <p>
                  - developing web/mobile apps, landing pages, and animations.
                </p>
                <p>
                  - specialized in javascript, react, and frontend web stacks.
                </p>
                <p>
                  - focused on user experience, accessibility and performance.
                </p>
                <p>- obsessed with being productive, but chill.</p>
                <p>- finding life spirit, love art, minimalism.</p>
              </div>
              <p className="mt-6" data-aos="fade-up">
                one of my theories is that "the goals of great modern webs is
                now changing from displaying information to serve the best user
                experiences for your users, to command their attention and
                motivate them to take next actions in many forms without
                thinking and annoying bugs".
              </p>
            </article>
            <Waypoint
              topOffset={200}
              onEnter={() => {
                setRenderAnimation(true);
              }}
            />
          </div>
        </div>
      </section>
      <section className="bg-black dark:bg-white text-white dark:text-black pt-10 md:pt-20">
        <div className="container">
          <h3 data-aos="fade-up">carfted with love</h3>
          <h4 data-aos="fade-up">these are a selection of my recent works.</h4>
        </div>
        <ul>
          <li data-aos="fade-up">
            <div className="container">
              <div className="grid grid-cols-2 items-center py-32">
                <article>
                  <div className="relative">
                    <small className="absolute h-full top-1/2 -translate-y-1/2 -left-6 text-xl opacity-20">
                      01
                    </small>
                    <strong className="ml-2">
                      flodesk - email / website builder
                    </strong>
                  </div>
                  <div>
                    <ul className="flex gap-2 text-xs">
                      <li className="text-gray-200">ui/ux</li>
                      <li className="text-gray-200">webapp</li>
                      <li className="text-gray-200">site builder</li>
                      <li className="text-gray-200">animations</li>
                      <li className="text-gray-200">accessibility</li>
                    </ul>
                  </div>
                </article>
                <div className="flex items-center justify-end ">
                  <Link
                    className="relative hover:underline underline-offset-4 before:content-[' '] before:block before:opacity-50 before:text-gray-200 before:bg-gray-200 before:absolute before:-top-4 before:-left-4 before:w-12 before:h-12 before:rounded-full before-p-4 before:hover:w-16 before:hover:h-16 before:transition-all"
                    to="/works/flodesk"
                  >
                    <span className="relative z-10">view project →</span>
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li
            className="bg-white dark:bg-black text-black dark:text-white"
            data-aos="fade-up"
          >
            <div className="container">
              <div className="grid grid-cols-2 py-32">
                <article>
                  <p className="relative">
                    <small className="absolute h-full top-1/2 -translate-y-1/2 -left-6 text-xl opacity-20">
                      02
                    </small>
                    <strong className="ml-2">uiutils</strong>
                  </p>
                  <p>
                    <ul className="flex gap-2 text-xs">
                      <li className="text-gray-200">utilities</li>
                      <li className="text-gray-200">development tool</li>
                    </ul>
                  </p>
                </article>
                <div className="flex items-center justify-end">
                  <a
                    className="relative hover:underline underline-offset-4 before:content-[' '] before:block before:opacity-50 before:text-gray-200 before:bg-gray-200 before:absolute before:-top-4 before:-left-4 before:w-12 before:h-12 before:rounded-full before-p-4 before:hover:w-16 before:hover:h-16 before:transition-all"
                    href="https://uiutils.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="relative z-10">view project →</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className="container">
              <div className="grid grid-cols-2 py-32 pb-24">
                <article>
                  <p className="relative">
                    <small className="absolute h-full top-1/2 -translate-y-1/2 -left-6 text-xl opacity-20">
                      03
                    </small>
                    <strong className="ml-2">natours</strong>
                  </p>
                  <p>
                    <ul className="flex gap-2 text-xs">
                      <li className="text-gray-200">landing-pages</li>
                    </ul>
                  </p>
                </article>
                <div className="flex items-center justify-end">
                  <a
                    className="relative hover:underline underline-offset-4 before:content-[' '] before:block before:opacity-50 before:text-gray-200 before:bg-gray-200 before:absolute before:-top-4 before:-left-4 before:w-12 before:h-12 before:rounded-full before-p-4 before:hover:w-16 before:hover:h-16 before:transition-all"
                    href="https://projects.thebao.dev/natours"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="relative z-10">view project →</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li
            className="bg-white dark:bg-black text-black dark:text-white"
            data-aos="fade-up"
          >
            <div className="container">
              <div className="grid grid-cols-2 py-32">
                <article>
                  <p className="relative">
                    <small className="absolute h-full top-1/2 -translate-y-1/2 -left-6 text-xl opacity-20">
                      04
                    </small>
                    <strong className="ml-2">ivyfood</strong>
                  </p>
                  <p>
                    <ul className="flex gap-2 text-xs">
                      <li className="text-gray-200">ui/ux</li>
                      <li className="text-gray-200">landing-pages</li>
                      <li className="text-gray-200">show-case</li>
                    </ul>
                  </p>
                </article>
                <div className="flex items-center justify-end">
                  <a
                    className="relative hover:underline underline-offset-4 before:content-[' '] before:block before:opacity-50 before:text-gray-200 before:bg-gray-200 before:absolute before:-top-4 before:-left-4 before:w-12 before:h-12 before:rounded-full before-p-4 before:hover:w-16 before:hover:h-16 before:transition-all"
                    href="https://projects.thebao.dev/ivyfood"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="relative z-10">view project →</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="py-16 text-3xl " data-aos="fade-up">
          <div className="container">
            <p>there's more</p>
            <Link to="/works">
              <h4>view all projects →</h4>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
