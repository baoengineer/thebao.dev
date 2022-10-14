import clsx from 'clsx';
import { ThemeToggle } from '~/components/index';

type LeftNavProps = {
  className?: string;
};

export default function LeftNav({ className }: LeftNavProps) {
  return (
    <div
      className={clsx(
        'flex flex-row items-center font-primary text-gray-100 hidden sm:flex md:text-md lg:text-lg',
        className,
      )}
    >
      <div className="-rotate-90 transform-gpu origin-top-left">
        <div>
          <label>scroll ⎯⎯ ⎯</label>
        </div>
      </div>
    </div>
  );
}
