import React from 'react';
import styles from './MainLayout.module.css';
import MainHeader from '../Header/MainHeader';
import Meta from '../Meta';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Meta />
			<MainHeader />
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
			</div>
		</>
	);
};

export default MainLayout;
