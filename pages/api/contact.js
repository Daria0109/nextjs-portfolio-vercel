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
	const connectingString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}
	@${process.env.mongodb_cluster}.end0xte.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

	try {
		client = await MongoClient.connect(connectingString);
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
