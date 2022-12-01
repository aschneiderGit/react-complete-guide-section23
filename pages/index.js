import Link from 'next/link';

function HomePage() {
	return (
		<>
			<h1>The Home Page</h1>
			<ul>
				<li>
					<Link href="/news/nextJS-is-a-great-framework">
						NextJS is a great Framework
					</Link>
				</li>
				<li> Something-important</li>
			</ul>
		</>
	);
}

export default HomePage;
