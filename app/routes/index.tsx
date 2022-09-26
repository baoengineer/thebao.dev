import anime from "animejs";
import { useEffect, useRef } from "react";

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
      <section className="py-20 md:py-40">
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
                  <span className="h1 absolute opacity-100">fast</span>
                  <span className="h1 opacity-0">modern</span>
                  <span className="h1 absolute opacity-0">resilient</span>
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
    </main>
  );
}
