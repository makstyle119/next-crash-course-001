import React from 'react';
import styles from './ArticleItem.module.css';
import Link from 'next/link';

const ArticleItem = ({ article, key }: { article: any; key: number }) => {
	return (
		<Link
			key={key}
			href='/article/[id]'
			className={styles.card}
			as={`/article/${article.id}`}
		>
			<h3 id={article?.id}>{article?.title} &rarr;</h3>
			<p>{article?.excerpt}</p>
		</Link>
	);
};

export default ArticleItem;
