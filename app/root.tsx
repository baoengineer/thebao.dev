import type { MetaFunction } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import styles from './css/app.css';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'bao - a guy who likes to craft ui/ux stuffs',
	viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
	return (
		<html lang='en'>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

export function links() {
	return [{ rel: 'stylesheet', href: styles }];
}
