import clsx from 'clsx';
import { Link } from '@remix-run/react';

type NavProps = {
  className?: string;
};

export default function Nav({ className }: NavProps) {
  return (
    <nav
      className={clsx(
        'font-sans font-light will-change-[transform] text-gray-200 sm:flex text-md md:text-lg lg:text-2xl transform-gpu duration-500 ease-in-out transition-transform',
        className,
      )}
      style={{ backfaceVisibility: 'hidden' }}
    >
      <div className="container w-full">
        <ul className="flex flex-col md:flex-row items-end justify-end relative bg-white dark:bg-black rounded-bl-sm rounded-br-sm p-4 -mx-6">
          <li>
            <Link
              to="#about-me"
              className="p-2 hover:drop-shadow-md transition-all duration-300 hover:underline"
            >
              #about-me
            </Link>
          </li>
          <li>
            <Link
              to="#works"
              className="p-2 hover:drop-shadow-md transition-all duration-300 hover:underline"
            >
              #works
            </Link>
          </li>
          {/*<li>*/}
          {/*  <a*/}
          {/*    href="https://blog.thebao.dev"*/}
          {/*    target="_blank"*/}
          {/*    className="p-2 hover:drop-shadow-md transition-all duration-300 hover:underline"*/}
          {/*  >*/}
          {/*    #blog*/}
          {/*  </a>*/}
          {/*</li>*/}
          <li>
            <a
              href="mailto:thebao.dev@gmail.com"
              className="p-2 hover:drop-shadow-md transition-all duration-300 hover:underline"
            >
              #contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
