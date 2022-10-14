import clsx from 'clsx';
import { Link } from '@remix-run/react';

type NavProps = {
  className?: string;
};

export default function Nav({ className }: NavProps) {
  return (
    <nav
      className={clsx(
        'flex flex-row items-center font-primary text-primary hidden sm:flex md:text-md lg:text-lg',
        className,
      )}
    >
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

    </nav>

  );
}
