const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			reactStrictMode: true,
			env: {
				mongodb_username: process.env.db_username,
				mongodb_password: process.env.db_password,
				mongodb_cluster: process.env.db_cluster,
				mongodb_database: process.env.db_database_dev
			}
		};
	}
	return {
		reactStrictMode: true,
		env: {
			mongodb_username: process.env.db_username,
			mongodb_password: process.env.db_password,
			mongodb_cluster: process.env.db_cluster,
			mongodb_database: process.env.db_database
		}
	};
};

module.exports = nextConfig;
