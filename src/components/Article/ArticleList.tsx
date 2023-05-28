import React from 'react';
import styles from './ArticleList.module.css';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles }: { articles: any[] }) => {
	return (
		<div className={styles.grid}>
			{articles.map((v: any, i: number) => (
				<ArticleItem
					article={v}
					key={i}
				/>
			))}
		</div>
	);
};

export default ArticleList;
