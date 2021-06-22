import Link from "next/link";
import Head from "next/head";
import Layout from '../../components/Layout';
import styles from './index.module.css';

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>qqq Next xxx</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>First Post</h1>
			<h2>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</h2>
            <img src="/images/bug.jpg" className={styles.img} />
		</Layout>
	);
}
