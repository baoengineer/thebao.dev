import anime from 'animejs';
import { useEffect, useRef, useState } from 'react';
import { Link } from '@remix-run/react';
import avatar from 'public/images/avatar.png';
import Lottie from 'lottie-react';
import meAnimation from '../animations/me.json';
import { Waypoint } from 'react-waypoint';

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
      <section className="">
        <div className="container flex w-full justify-end items-center text-right">
          <ul className="flex flex-col gap-2 md:gap-4 lg:gap-6 md:-mt-40">
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
              <span className="h1">digital stuffs</span>
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
      <section id="about-me" className="py-10 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-2 min-h-screen">
            <div className=" lg:sticky top-0 self-start">
              <h3 className="underline underline-offset-8" data-aos="fade-up">
                about me
              </h3>
              <div className="flex relative" data-aos="fade-up ">
                <img src={avatar} alt="bao" className="w-48 rounded-md drop-shadow-sm grayscale" />
                {renderAnimation && (
                  <div className="grayscale absolute -bottom-1/3 right-1/3 tr w-48">
                    <Lottie animationData={meAnimation} initialSegment={[0, 50]} loop={false} />
                  </div>
                )}
              </div>
            </div>
            <article className="text-md lg:text-lg">
              <p className="text-3xl" data-aos="fade-up">
                hi, I'm bao - an idle guy who loves coding, making internet products, and tech
                stuffs.
              </p>
              <br />
              <p data-aos="fade-up">I'm</p>
              <div className="ml-6" data-aos="fade-up">
                <p>- developing web/mobile apps, landing pages, and animations.</p>
                <p>- specialized in javascript, react, and frontend web stacks.</p>
                <p>- focused on user experience, accessibility and performance.</p>
                  <br/>
                <p>- obsessed with being productive, but chill.</p>
                <p>- finding life spirit, love art, minimalism.</p>
              </div>
              <p className="mt-6" data-aos="fade-up">
                "the goals of great modern webs is now changing from displaying information to serve
                the best user experiences for your users, to command their attention and motivate
                them to take next actions in many forms without thinking and annoying bugs" - one of
                my theories.
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
        <section id="works" className="bg-black dark:bg-white text-white dark:text-black pt-10 md:pt-20">
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
                    <strong className="ml-2">flodesk - email / website builder</strong>
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
          <li className="bg-white dark:bg-black text-black dark:text-white" data-aos="fade-up">
            <div className="container">
              <div className="grid grid-cols-2 py-32">
                <article>
                  <p className="relative">
                    <small className="absolute h-full top-1/2 -translate-y-1/2 -left-6 text-xl opacity-20">
                      02
                    </small>
                    <strong className="ml-2">uiutils</strong>
                  </p>
                  <div>
                    <ul className="flex gap-2 text-xs">
                      <li className="text-gray-200">utilities</li>
                      <li className="text-gray-200">development tool</li>
                    </ul>
                  </div>
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
                  <div>
                    <ul className="flex gap-2 text-xs">
                      <li className="text-gray-200">landing-pages</li>
                    </ul>
                  </div>
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
          <li className="bg-white dark:bg-black text-black dark:text-white" data-aos="fade-up">
            <div className="container">
              <div className="grid grid-cols-2 py-32">
                <article>
                  <p className="relative">
                    <small className="absolute h-full top-1/2 -translate-y-1/2 -left-6 text-xl opacity-20">
                      04
                    </small>
                    <strong className="ml-2">ivyfood</strong>
                  </p>
                  <div>
                    <ul className="flex gap-2 text-xs">
                      <li className="text-gray-200">ui/ux</li>
                      <li className="text-gray-200">landing-pages</li>
                      <li className="text-gray-200">show-case</li>
                    </ul>
                  </div>
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
        <div className="py-16 text-3xl" data-aos="fade-up">
          <div className="container flex items-end">
            <a
              className="flex items-end hover:opacity-70 hover:underline transition-all"
              href="https://github.com/thebaodev"
              target="_blank"
              rel="noreferrer"
            >
              <span>see more at my github</span>
              <div className="flex items-center ml-2 mb-2">
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
