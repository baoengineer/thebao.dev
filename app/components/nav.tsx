import clsx from 'clsx';
import { Link } from '@remix-run/react';
import { useEffect, useRef } from 'react';

type NavProps = {
  className?: string;
};

export default function Nav({ className }: NavProps) {
  const lastScroll = useRef(0);
  const nav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!nav.current) {
        return;
      }
      let currentScroll = window.pageYOffset;
      if (currentScroll - lastScroll.current > 0) {
        nav.current.classList.add('-translate-y-full');
        nav.current.classList.remove('translate-y-0');
      } else {
        nav.current.classList.add('translate-y-0');
        nav.current.classList.remove('-translate-y-full');
      }
      lastScroll.current = currentScroll;
    });
  }, []);
  return (
    <nav
      ref={nav}
      className={clsx(
        'font-primary will-change-[transform] text-primary sm:flex text-md md:text-lg lg:text-2xl transform-gpu duration-500 ease-in-out transition-transform',
        className,
      )}
      style={{ backfaceVisibility: 'hidden' }}
    >
      <div className="container w-full">
        <ul className="flex flex-row items-center justify-end relative bg-white dark:bg-black rounded-bl-sm rounded-br-sm p-4 -mx-6">
          <li>
            <a
              href="https://blog.thebao.dev"
                target="_blank"
              className="p-2 hover:drop-shadow-md transition-all duration-300 hover:underline"
            >
              #blog
            </a>
          </li>
          <li>
            <Link
              to="#works"
              className="p-2 hover:drop-shadow-md transition-all duration-300 hover:underline"
            >
              #works
            </Link>
          </li>
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
              to="/contact"
              className="p-2 hover:drop-shadow-md transition-all duration-300 hover:underline"
            >
              #contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
