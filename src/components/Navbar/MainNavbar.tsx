import Link from 'next/link';
import styles from './MainNavbar.module.css';

const MainNavbar = () => {
	return (
		<div className={styles.nav}>
			<ul>
				<li>
					<Link href={`/`}>Home</Link>
				</li>
				<li>
					<Link href={`/about`}>About</Link>
				</li>
			</ul>
		</div>
	);
};

export default MainNavbar;
