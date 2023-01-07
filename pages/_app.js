import '../styles/globals.css';
import { Layout } from '../components/layout/layout';
import { RequestStatusProvider } from '../providers/request-status/request-status';

export default function App({ Component, pageProps }) {
	return (
		<RequestStatusProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</RequestStatusProvider>
	);
}
