import { Inter } from 'next/font/google';
import { server } from '../../config/inex';
import ArticleList from '@/components/Article/ArticleList';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ articles }: { articles: any }) {
	return (
		<>
			<ArticleList articles={articles} />
		</>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/articles`);
	const articles = await res.json();

	return {
		props: {
			articles,
		},
	};
};

// export const getStaticProps = async () => {
// 	const res = await fetch(
// 		`https://jsonplaceholder.typicode.com/posts?_limit=6`
// 	);
// 	const articles = await res.json();

// 	return {
// 		props: {
// 			articles,
// 		},
// 	};
// };
