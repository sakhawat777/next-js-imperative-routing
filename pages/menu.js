import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const menu = () => {
	const router = useRouter();
	return (
		<div>
			{/* Imperative Routing */}
			<ul>
				<li>
					<button onClick={() => router.push('/')}>Home </button>
				</li>
				<li>
					<button onClick={() => router.push('/about')}>About </button>
				</li>
				<li>
					<button onClick={() => router.push('/contact')}>Contact </button>
				</li>
			</ul>
		</div>
	);
};

export default menu;
