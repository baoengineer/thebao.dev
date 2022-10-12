import { Link } from '@remix-run/react';

export default function Projects() {
  return (
    <main>
      <section className="py-20">
        <div className="container">
          <h1>Works</h1>
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
                <small className="font-mono text-xs opacity-30">thebaodev</small>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
