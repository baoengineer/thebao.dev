import anime from 'animejs';
import { useEffect, useRef, useState } from 'react';
import avatar from 'public/images/avatar.png';
import Lottie from 'lottie-react';
import meAnimation from '../animations/me.json';
import { Waypoint } from 'react-waypoint';
import cta1 from 'public/images/cta-1.jpg';
import cta2 from 'public/images/cta-2.png';

export default function Main() {
  const textStackRef = useRef<HTMLDivElement>(null);
  const [renderAnimation, setRenderAnimation] = useState(false);

  const initTextStackAnimation = () => {
    const textStack = textStackRef.current;
    if (!textStack) {
      return;
    }
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000,
      loop: true,
    });
    const texts = textStack.querySelectorAll('span');
    texts.forEach(text => {
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
      <section>
        <div className="container flex w-full justify-end items-center text-right">
          <ul className="flex flex-col gap-2 md:gap-4 lg:gap-6 md:-mt-10">
            <div
              data-aos="fade-up"
              className="flex gap-2 md:gap-4 lg:gap-6 flex-col min-h-1/2-screen md:min-h-screen z-0"
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
              <span className="h1">digital stuffs.</span>
            </li>
            <li data-aos="fade-up">
              <span className="h1 text-gray-100">focused on</span>
            </li>
            <li data-aos="fade-up">
              <div className="flex justify-end">
                <div ref={textStackRef} className="flex flex-col relative items-end">
                  <span className="h1 absolute h-full opacity-100">fast</span>
                  <span className="h1 opacity-0">modern</span>
                  <span className="h1 absolute h-full opacity-0">resilient</span>
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
      <section id="about-me" className="pt-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 lg:gap-2 min-h-screen">
            <div className=" lg:sticky top-24 self-start">
              <h3 data-aos="fade-up" className="hidden md:block font-sans">
                about me
              </h3>
              <div className="flex relative">
                <img
                  src={avatar}
                  alt="bao"
                  className="w-24 md:w-36 lg:w-48 rounded-md drop-shadow-sm grayscale"
                  data-aos="fade-up"
                />
                {renderAnimation && (
                  <div className="  hidden lg:block grayscale absolute -bottom-1/3 right-1/3 tr w-48">
                    <Lottie animationData={meAnimation} initialSegment={[0, 50]} loop={false} />
                  </div>
                )}
              </div>
            </div>
            <article className="text-sm md:text-md lg:text-lg mt-4 md:mt-0">
              <p className="text-xl font-sans" data-aos="fade-up">
                I'm a frontend engineer who love coding, making internet products, and tech stuffs.
              </p>
              <br />
              <div
                className="text-xs font-sans font-light md:text-md lg:text-lg leading-5"
                data-aos="fade-up"
              >
                <p>· Working on modern ui/ux, website, and applications.</p>
                <p>· Specialized in javascript, react, and frontend web stacks.</p>
                <p>· Focus on user experience, accessibility, and performance.</p>
                <br />
                <p>
                  · Make products that meaningful, create values, and
                  <br className="hidden md:block" /> make our world a better place is my passion.
                </p>
                <p>· Obsessed with being productive, but chill.</p>
              </div>

              <div className="font-sans font-light pt-12 md:py-24 lg:py-56" data-aos="fade-up">
                "<strong>good</strong> design <span className="font-light">is obvious</span>
                <br />
                <strong>great</strong> design <span className="font-light">is transparent."</span>
                <span className="text-gray-100 font-light">- joe sparano</span>
              </div>
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
      <section className="md:pt-12 pt-20">
        <div className="container px-4 lg:py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
            <div className="md:sticky md:top-12 lg:p-4 md:p-2 lg:px-16 lg:py-24 order-1 md:order-0">
              <div className="mx-auto max-w-xl text-left">
                <h2
                  className="text-2xl md:text-3xl font-sans text-left  md:text-3xl"
                  data-aos="fade-up"
                >
                  have some great ideas?
                </h2>
                <p
                  className="font-light text-xs md:text-md lg:text-lg text-left leading-5 mt-4 text-sm "
                  data-aos="fade-up"
                >
                  I love to collaborate, work together or just talk about softwares, web
                  technologies, coding, productivity and tech stuffs.
                  <br />
                  ping me, let's have a coffee together ☕️.
                </p>
                <div className="mt-4 md:mt-8" data-aos="fade-up">
                  <a
                    href="mailto:thebao.dev@gmail.com"
                    className="inline-block rounded border border-black dark:border-white bg-black dark:bg-white px-4 lg:px-12 py-3 text-sm font-medium text-white dark:text-black transition-all hover:underline focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    talk to me
                  </a>
                </div>
                <div className="flex items-center mt-4" data-aos="fade-up">
                  <span className="text-gray-100 text-xs font-primary">or you can find me on</span>
                  <ul className="flex">
                    <li className="flex items-center ml-2">
                      <a
                        href="https://www.upwork.com/workwith/thebao"
                        target="_blank"
                        className="w-6 h-6 flex items-center justify-center text-gray-100 hover:text-black dark:hover:text-white transition"
                        title="Hire me at upwork"
                        rel="noreferrer"
                      >
                        <svg
                          id="Layer_1"
                          version="1.1"
                          viewBox="0 0 56.7 56.7"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <g>
                            <path d="M38.8,24.6c-2.8,0-3.7,2.7-3.9,4.3v0.1l-0.4,1.5c1.2,1,2.7,1.7,4.2,1.7c2,0,3.8-1.7,3.9-3.9C42.6,26.3,40.9,24.6,38.8,24.6   z" />
                            <path d="M28.9,3.7C15.2,3.7,4.1,14.8,4.1,28.5c0,13.7,11.1,24.8,24.8,24.8c13.7,0,24.8-11.1,24.8-24.8C53.7,14.8,42.6,3.7,28.9,3.7   z M38.8,36.1c-2,0-3.7-0.6-5.2-1.5l-1.7,8H28l2.4-11c-1-1.4-2-3-2.7-4.5v1.7c0,4.1-3.3,7.4-7.3,7.4c-4,0-7.3-3.3-7.3-7.4v-10h3.8   v10c0,2,1.6,3.6,3.6,3.6c2,0,3.6-1.6,3.6-3.6v-10h3.8c0.8,2.5,2.1,5.5,3.8,8.2c1-3.8,3.8-6.1,7.3-6.1c4.1,0,7.5,3.4,7.5,7.5   C46.3,32.7,42.9,36.1,38.8,36.1z" />
                          </g>
                        </svg>
                      </a>
                    </li>
                    <li className="flex items-center">
                      <a
                        href="https://twitter.com/thebao_dev"
                        target="_blank"
                        className="w-6 h-6 text-gray-100 hover:text-black dark:hover:text-white transition"
                        title="Twitter"
                        rel="noreferrer"
                      >
                        <svg viewBox="0 0 512 512" className="w-6 h-6" fill="currentColor">
                          <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z" />
                        </svg>
                      </a>
                    </li>

                    <li className="flex">
                      <a
                        href="https://www.linkedin.com/in/thebao/"
                        target="_blank"
                        className="w-6 h-6 text-gray-100 hover:text-black dark:hover:text-white transition"
                        title="LinkedIn"
                        rel="noreferrer"
                      >
                        <svg viewBox="0 0 512 512" className="w-6 h-6" fill="currentColor">
                          <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
                        </svg>
                      </a>
                    </li>

                    <li className="flex items-center">
                      <a
                        href="https://www.instagram.com/the.baooo/"
                        target="_blank"
                        className="w-6 h-6 text-gray-100 hover:text-black dark:hover:text-white transition"
                        title="Instagram"
                        rel="noreferrer"
                      >
                        <svg viewBox="0 0 512 512" className="w-6 h-6" fill="currentColor">
                          <g>
                            <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z" />
                            <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z" />
                            <circle cx="351.5" cy="160.5" r="21.5" />
                          </g>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="badge-base LI-profile-badge py-4"
                  data-locale="en_US"
                  data-size="large"
                  data-theme="dark"
                  data-type="HORIZONTAL"
                  data-vanity="thebao"
                  data-version="v1"
                ></div>
              </div>
            </div>

            <div className="md:sticky top-24 grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2 grayscale order-0 md:order-1">
              <img
                alt="made with love by bao"
                src={cta1}
                className="h-40 w-full object-cover sm:h-56 md:h-full"
                data-aos="fade-up"
              />

              <img
                alt="bao - creative engineer"
                src={cta2}
                className="h-40 w-full object-cover sm:h-56 md:h-full"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="works" className="pt-20">
        <div className="container">
          <h3 className="font-sans text-2xl md:text-3xl text-left " data-aos="fade-up">
            crafted with love
          </h3>
          <h4 className="font-primary text-sm md:text-xl" data-aos="fade-up">
            these are a selection of my recent works.
          </h4>
        </div>
        <ul className="mt-2 md:mt-6 lg:mt-12">
          <li data-aos="fade-up">
            <div className="container">
              <div className="grid md:grid-cols-2 py-4 md:py-8 lg:py-12">
                <article>
                  <div className="relative">
                    <small className="hidden md:block md:absolute h-full md:top-1/2 md:-translate-y-1/2 md:-left-6 text-md md:text-xl opacity-100 md:opacity-40">
                      01
                    </small>
                    <strong className="flex md:ml-3 font-medium leading-6 tracking-wide text-lg md:text-xl lg:text-lg">
                      flodesk - design emails, funnels people love to open
                    </strong>
                  </div>
                  <div className="font-primary leading-5 text-xs md:text-sm mt-3 md:m-3">
                    I'm working at Flodesk as Frontend engineer. Developing email, website builders
                    that carfted millions of stunning emails, funnel pages that converts. loved by
                    hundred thousand of entrepreneurs, marketters.
                  </div>
                </article>
                <div className="flex items-center justify-end mt-12 lg:mt-0">
                  <a
                    className="relative hover:underline underline-offset-4 before:content-[' '] before:block before:opacity-50 before:text-gray-200 before:bg-gray-200 before:absolute before:-top-4 before:-left-4 before:w-12 before:h-12 before:rounded-full before-p-4 before:hover:w-16 before:hover:h-16 before:transition-all"
                    href="https://flodesk.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="relative z-10 font-primary">view project →</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className="container">
              <div className="grid md:grid-cols-2 py-4 md:py-8 lg:py-12">
                <article>
                  <p className="relative">
                    <small className="hidden md:block md:absolute h-full md:top-1/2 md:-translate-y-1/2 md:-left-6 text-md md:text-xl opacity-100 md:opacity-40">
                      02
                    </small>
                    <strong className="flex md:ml-3 font-medium leading-6 tracking-wide text-lg md:text-xl lg:text-lg">
                      typesth - type something endlessly
                    </strong>
                  </p>
                  <div className="font-primary leading-5 text-xs md:text-sm mt-3 md:m-3">
                    A type tester that you love to type. It focuses on the UI, animations, and typing experiences.
                  </div>
                </article>
                <div className="flex items-center justify-end mt-12 lg:mt-0">
                  <a
                    className="relative hover:underline underline-offset-4 before:content-[' '] before:block before:opacity-50 before:text-gray-200 before:bg-gray-200 before:absolute before:-top-4 before:-left-4 before:w-12 before:h-12 before:rounded-full before-p-4 before:hover:w-16 before:hover:h-16 before:transition-all"
                    href="https://uiutils.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="relative z-10 font-primary">view project →</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className="container">
              <div className="grid md:grid-cols-2 py-4 md:py-8 lg:py-12">
                <article>
                  <p className="relative">
                    <small className="hidden md:block md:absolute h-full md:top-1/2 md:-translate-y-1/2 md:-left-6 text-md md:text-xl opacity-100 md:opacity-40">
                      03
                    </small>
                    <strong className="flex md:ml-3 font-medium leading-6 tracking-wide text-lg md:text-xl lg:text-lg">
                      uiutil - an indie ui development kit
                    </strong>
                  </p>
                  <div className="font-primary leading-5 text-xs md:text-sm mt-3 md:m-3">
                    A open-sourced project that provided set of utilities and tools for UI
                    development. all in one place. personalized.
                  </div>
                </article>
                <div className="flex items-center justify-end mt-12 lg:mt-0">
                  <a
                    className="relative hover:underline underline-offset-4 before:content-[' '] before:block before:opacity-50 before:text-gray-200 before:bg-gray-200 before:absolute before:-top-4 before:-left-4 before:w-12 before:h-12 before:rounded-full before-p-4 before:hover:w-16 before:hover:h-16 before:transition-all"
                    href="https://uiutils.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="relative z-10 font-primary">view project →</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li data-aos="fade-up">
            <div className="container">
              <div className="grid md:grid-cols-2 py-4 md:py-8 lg:py-12">
                <article>
                  <p className="relative">
                    <small className="hidden md:block md:absolute h-full md:top-1/2 md:-translate-y-1/2 md:-left-6 text-md md:text-xl opacity-100 md:opacity-40">
                      04
                    </small>
                    <strong className="flex md:ml-3 font-medium leading-6 tracking-wide text-lg md:text-xl lg:text-lg">
                      natours
                    </strong>
                  </p>
                  <div className="font-primary leading-5 text-xs md:text-sm mt-3 md:m-3">
                    a modern landing page markup.
                  </div>
                </article>
                <div className="flex items-center justify-end mt-12 lg:mt-0">
                  <a
                    className="relative hover:underline underline-offset-4 before:content-[' '] before:block before:opacity-50 before:text-gray-200 before:bg-gray-200 before:absolute before:-top-4 before:-left-4 before:w-12 before:h-12 before:rounded-full before-p-4 before:hover:w-16 before:hover:h-16 before:transition-all"
                    href="https://projects.thebao.dev/natours"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="relative z-10 font-primary">view project →</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="mt-4 py-8 lg:py-12 text-lg md:text-xl lg:text-2xl">
          <div
            className="container flex items-center md:items-end text-gray-200"
            data-aos="fade-up"
          >
            <a
              className="flex items-end hover:opacity-70 hover:underline transition-all"
              href="https://github.com/baoidl"
              target="_blank"
              rel="noreferrer"
            >
              <span>see more at my github</span>
              <div className="flex items-center ml-2 mb-2 bg-gray-300 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="30px"
                  height="30px"
                  className="block "
                >
                  <g id="surface352343619">
                    <path
                      style={{
                        stroke: 'none',
                        fillRule: 'nonzero',
                        fill: 'rgb(50%,50%,50%)',
                        fillOpacity: 1,
                      }}
                      d="M 15 3 C 8.371094 3 3 8.371094 3 15 C 3 20.621094 6.871094 25.328125 12.09375 26.628906 C 12.035156 26.46875 12 26.28125 12 26.046875 L 12 23.996094 C 11.511719 23.996094 10.695312 23.996094 10.492188 23.996094 C 9.671875 23.996094 8.941406 23.644531 8.585938 22.988281 C 8.195312 22.257812 8.125 21.144531 7.152344 20.460938 C 6.863281 20.234375 7.082031 19.976562 7.414062 20.011719 C 8.03125 20.183594 8.539062 20.605469 9.019531 21.230469 C 9.5 21.859375 9.722656 22 10.617188 22 C 11.050781 22 11.699219 21.976562 12.308594 21.878906 C 12.636719 21.046875 13.203125 20.28125 13.894531 19.917969 C 9.898438 19.507812 7.992188 17.519531 7.992188 14.820312 C 7.992188 13.65625 8.488281 12.535156 9.328125 11.585938 C 9.054688 10.648438 8.707031 8.730469 9.433594 8 C 11.234375 8 12.320312 9.164062 12.582031 9.480469 C 13.476562 9.175781 14.460938 9 15.496094 9 C 16.53125 9 17.519531 9.175781 18.417969 9.484375 C 18.675781 9.171875 19.761719 8 21.566406 8 C 22.296875 8.730469 21.945312 10.65625 21.667969 11.59375 C 22.503906 12.539062 22.996094 13.660156 22.996094 14.820312 C 22.996094 17.515625 21.089844 19.503906 17.101562 19.917969 C 18.199219 20.488281 19 22.101562 19 23.3125 L 19 26.046875 C 19 26.152344 18.976562 26.226562 18.964844 26.316406 C 23.640625 24.675781 27 20.234375 27 15 C 27 8.371094 21.628906 3 15 3 Z M 15 3 "
                    />
                  </g>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
