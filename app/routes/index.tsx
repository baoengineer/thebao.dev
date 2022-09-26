import anime from "animejs";
import { useEffect, useRef } from "react";
import { Link } from "@remix-run/react";

export default function Main() {
  const textStackRef = useRef<HTMLDivElement>(null);

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
                <h1 className="h1 text-gray-100">bao.</h1>
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
      <section className="py-10 md:py-20">
        <div className="container">
          <div className="grid grid-cols-2">
            <div>
              <h3 className="underline underline-offset-8">about me</h3>
            </div>
            <div>
              "the goals of great modern webs is now changing from displaying
              information to serve the best user experiences for your users, to
              command their attention and motivate them to take next actions in
              many forms of websites, either applications or story-telling
              landing pages without thinking and annoying bugs" ⎯ i'm a guy love
              doing these things and optimizing them everyday.
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black dark:bg-white text-white dark:text-black pt-10 md:pt-20">
        <div className="container">
          <h3>carfted with love</h3>
          <h4>these are a selection of my recent works.</h4>
        </div>
        <ul>
          <li>
            <div className="container">
              <div className="grid grid-cols-2 py-32">
                <article>
                  <p className="relative">
                    <small className="absolute h-full top-1/2 -translate-y-1/2 -left-6 text-xl opacity-20">
                      01
                    </small>
                    <strong>flodesk - email / website builder</strong>
                  </p>
                  <p>
                    <ul className="flex gap-2 text-xs">
                      <li className="text-gray-100">ui/ux</li>
                      <li className="text-gray-100">react</li>
                      <li className="text-gray-100">animations</li>
                      <li className="text-gray-100">accessibility</li>
                    </ul>
                  </p>
                </article>
                <div className="flex items-center justify-end">
                  <Link
                    className="relative before:content-[' '] before:block before:opacity-50 before:text-gray-200 before:bg-gray-200 before:absolute before:-top-4 before:-left-4 before:w-12 before:h-12 before:rounded-full before-p-4"
                    to="/works/flodesk"
                  >
                    <span className="relative z-10">view project →</span>
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="bg-gray-100 dark:bg-gray-300 text-black dark:text-white">
            <div className="container">
              <div className="grid grid-cols-2 py-32">
                <article>
                  <p className="relative">
                    <small className="absolute h-full top-1/2 -translate-y-1/2 -left-6 text-xl opacity-20">
                      02
                    </small>
                    <strong>flodesk - email / website builder</strong>
                  </p>
                  <p>
                    <ul className="flex gap-2 text-xs">
                      <li className="text-gray-200">ui/ux</li>
                      <li className="text-gray-200">react</li>
                      <li className="text-gray-200">animations</li>
                      <li className="text-gray-200">accessibility</li>
                    </ul>
                  </p>
                </article>
                <div className="flex items-center justify-end">
                  <Link
                    className="relative before:content-[' '] before:block before:opacity-20 before:text-gray-200 before:bg-gray-200 before:absolute before:-top-4 before:-left-4 before:w-12 before:h-12 before:rounded-full before-p-4"
                    to="/works/flodesk"
                  >
                    <span className="relative z-10">view project →</span>
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="container">
              <div className="grid grid-cols-2 py-32 pb-24">
                <article>
                  <p className="relative">
                    <small className="absolute h-full top-1/2 -translate-y-1/2 -left-6 text-xl opacity-20">
                      03
                    </small>
                    <strong>flodesk - email / website builder</strong>
                  </p>
                  <p>
                    <ul className="flex gap-2 text-xs">
                      <li className="text-gray-100">ui/ux</li>
                      <li className="text-gray-100">react</li>
                      <li className="text-gray-100">animations</li>
                      <li className="text-gray-100">accessibility</li>
                    </ul>
                  </p>
                </article>
                <div className="flex items-center justify-end">
                  <Link
                    className="relative before:content-[' '] before:block before:opacity-50 before:text-gray-200 before:bg-gray-200 before:absolute before:-top-4 before:-left-4 before:w-12 before:h-12 before:rounded-full before-p-4"
                    to="/works/flodesk"
                  >
                    <span className="relative z-10">view project →</span>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="py-16 text-3xl bg-white text-black">
          <div className="container">
            <p>there's more</p>
            <h4>view all projects →</h4>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-20 bg-black dark:bg-black text-white dark:text-white">
        <div className="container">
          <div className="min-h-1/2-screen flex flex-col items-center justify-center">
            <h3 className="text-6xl">let's work together.</h3>
            <p className="text-xl">i'm available for freelance work.</p>
            <a
              className="relative mt-14 before:content-[' '] before:block before:opacity-80 before:text-gray-200 before:bg-gray-200 before:absolute before:-top-4 before:-left-4 before:w-12 before:h-12 before:rounded-full before-p-4"
              href="mailto:thebao.dev@gmail.com"
              aria-label="talk to me by email"
            >
              <span className="relative z-10 text-xl">talk to me →</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
