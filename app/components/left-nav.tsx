import clsx from 'clsx';

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
      <div className="-rotate-90 transform-gpu origin-top-left flex items-center">
        <div>
          <label>scroll ⎯⎯ ⎯</label>
        </div>

      </div>
    </div>
  );
}
