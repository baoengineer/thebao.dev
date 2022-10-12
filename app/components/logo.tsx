import { Link } from '@remix-run/react';
import clsx from 'clsx';

type LogoProps = {
    className: string;
};

export default function Logo({ className }: LogoProps) {
    return (
        <Link to="/" className={clsx('flex justify-center', className)}>
            <h1 className="font-primary text-primary">bao</h1>
        </Link>
    );
}
