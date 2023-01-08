import '../styles/globals.css';
import Head from 'next/head';
import { Layout } from '../components/layout/layout';
import { RequestStatusProvider } from '../providers/request-status/request-status';

export default function App({ Component, pageProps }) {
	return (
		<RequestStatusProvider>
			<Layout>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<Component {...pageProps} />
			</Layout>
		</RequestStatusProvider>
	);
}
