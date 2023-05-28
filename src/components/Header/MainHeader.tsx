import React from 'react';
import MainNavbar from '../Navbar/MainNavbar';
import styles from './MainHeader.module.css';

const MainHeader = () => {
	return (
		<>
			<MainNavbar />
			<div>
				<h1 className={styles.title}>
					<span>WebDev</span> News
				</h1>
				<p className={styles.description}>
					Keep up to date with the latest web dev news
				</p>
				{/* <style jsx>
					{`
						.title {
							color: red;
						}
					`}
				</style> */}
			</div>
		</>
	);
};

export default MainHeader;
