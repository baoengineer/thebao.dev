import clsx from 'clsx';
import { useState } from 'react';
import { Link } from '@remix-run/react';

type NavProps = {
  className?: string;
};

export default function Nav({ className }: NavProps) {
  return (
    <nav
      className={clsx(
        'fixed top-full bottom-0 z-50 -translate-y-1/2 left-3 flex flex-row items-center font-primary text-primary hidden sm:flex md:text-md lg:text-lg',
        className,
      )}
    >
      <div className="-rotate-90 transform-gpu origin-top-left bg-white rounded-sm dark:bg-black px-2 flex">
        <ul className="flex">
          <Link to="/blog" className="mr-5">
            blog
          </Link>
          <a href="#about" className="mr-5">
            about
          </a>
          <Link to="/works" className="mr-5">
            works
          </Link>
          <Link to="/contact">contact</Link>
        </ul>
      </div>
    </nav>
  );
}
