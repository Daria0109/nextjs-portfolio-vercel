import Head from 'next/head';
import { ContactForm } from '../components/contact/contact-form/contact-form';

const ContactPage = () => (
	<>
		<Head>
			<title>Contact Me</title>
			<meta name="description" content="Send me your messages!" />
		</Head>
		<ContactForm />
	</>
);

export default ContactPage;
