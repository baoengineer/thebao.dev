import clsx from "clsx";
import { useState } from "react";
import { Link } from "@remix-run/react";

type NavProps = {
  className?: string;
};

export default function Nav({ className }: NavProps) {
  const [state, setState] = useState("intro");
  return (
    <nav
      className={clsx(
        "fixed top-full bottom-2 -translate-y-1/2 left-3 flex flex-row items-center font-primary text-primary hidden sm:flex md:text-md lg:text-lg",
        className
      )}
    >
      <div className="-rotate-90 transform-gpu origin-top-left">
        {
          {
            intro: (
              <div>
                <label>scroll ⎯⎯ ⎯</label>
              </div>
            ),
            nav: (
              <ul className="flex">
                <Link to="/about" className="mr-5">
                  about
                </Link>
                <Link to="/works" className="mr-5">
                  works
                </Link>
                <Link to="/contact">contact</Link>
              </ul>
            ),
          }[state]
        }
      </div>
    </nav>
  );
}
