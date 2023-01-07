import { MongoClient } from 'mongodb';

async function handler(req, res) {
	let newMessage;
	try {
		if (req.method === 'POST') {
			const { email, name, message } = req.body;
			const isFallback = !email
				|| !email.includes('@')
				|| !name
				|| name.trim() === ''
				|| !message
				|| message.trim() === '';

			if (isFallback) {
				res.status(422).json({ message: 'Invalid input' });
				return;
			}

			newMessage = {
				email,
				name,
				message
			};
		}
	} catch (error) {
		res.status(500).json({ message: 'Unexpected error occurred!' });
		return;
	}

	let client;

	try {
		client = await MongoClient.connect(
			'mongodb+srv://DaryaShni:41CXIDronxeVtQgQ@cluster0.end0xte.mongodb.net/js-blog?retryWrites=true&w=majority'
		);
	} catch (error) {
		res.status(500).json({ message: 'Couldn\'t connect to the database' });
		return;
	}

	const db = client.db();

	try {
		const result = await db.collection('messages').insertOne(newMessage);
		newMessage.id = result.insertedId;
	} catch (error) {
		await client.close();
		res.status(500).json({ message: 'Storing message failed!' });
		return;
	}

	await client.close();

	res
		.status(201)
		.json({ message: 'Successfully stored message!', data: newMessage });
}

export default handler;
