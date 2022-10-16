import clsx from 'clsx';
import { Link } from '@remix-run/react';
import { useEffect, useRef } from 'react';

type NavProps = {
  className?: string;
};

export default function Nav({ className }: NavProps) {
  const timer = useRef<any>();
  const lastScroll = useRef(0);
  const nav = useRef<HTMLDivElement>(null);

  const handleScrollAnimation = () => {
      if (!nav.current || document.documentElement.clientWidth <= 768) {
      return;
    }
    let currentScroll = window.pageYOffset;
    if (currentScroll - lastScroll.current > 10) {
      nav.current.classList.add('-translate-y-full');
      nav.current.classList.remove('translate-y-0');
    } else {
      nav.current.classList.add('translate-y-0');
      nav.current.classList.remove('-translate-y-full');
    }
    lastScroll.current = currentScroll;
  };
  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      window.addEventListener('scroll', handleScrollAnimation);
    }, 1000);
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <nav
      ref={nav}
      className={clsx(
        'font-sans will-change-[transform] text-gray-200 sm:flex text-md md:text-lg lg:text-2xl transform-gpu duration-500 ease-in-out transition-transform',
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
