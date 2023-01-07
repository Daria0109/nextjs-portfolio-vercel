import { useContext, useState } from 'react';
import classes from './contact-form.module.css';
import { RequestStatusContext, Status } from '../../../providers/request-status/request-status';

const sendAsyncMessage = async (messageDetail) => {
	const response = await fetch('/api/contact', {
		method: 'POST',
		body: JSON.stringify(messageDetail),
		headers: { 'Content-Type': 'application/json' }
	});
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'Something went wrong!');
	}
};

export const ContactForm = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const { toggleNotification } = useContext(RequestStatusContext);

	const changeEmailHandler = (event) => setEmail(event.target.value);

	const changeNameHandler = (event) => setName(event.target.value);

	const changeMessageHandler = (event) => setMessage(event.target.value);

	const sendMessageHandler = async (event) => {
		event.preventDefault();

		toggleNotification({
			status: Status.PENDING,
			title: 'Sending message...',
			message: 'Your message is on its way!'
		});
		try {
			await sendAsyncMessage({
				email,
				name,
				message
			});
			toggleNotification({
				status: Status.SUCCESS,
				title: 'Success!',
				message: 'Message sent successfully!'
			});
			setEmail('');
			setName('');
			setMessage('');
		} catch (error) {
			toggleNotification({
				status: Status.ERROR,
				title: 'Error!',
				message: error?.toString() || 'Something went wrong...'
			});
		}
	};

	return (
		<section className={classes.contact}>
			<h1>How can I help you?</h1>
			<form className={classes.form} onSubmit={sendMessageHandler}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">
							Your Email
							<input
								id="email"
								type="email"
								value={email}
								onChange={changeEmailHandler}
								required
							/>
						</label>
					</div>
					<div className={classes.control}>
						<label htmlFor="name">
							Your Name
							<input
								id="name"
								type="text"
								value={name}
								onChange={changeNameHandler}
								required
							/>
						</label>
					</div>
				</div>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="message">
							Your Message
							<textarea
								id="message"
								rows={5}
								value={message}
								onChange={changeMessageHandler}
								required
							/>
						</label>
					</div>
				</div>
				<div className={classes.actions}>
					<button type="submit">Send Message</button>
				</div>
			</form>
		</section>
	);
};
