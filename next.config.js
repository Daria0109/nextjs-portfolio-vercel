const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			reactStrictMode: true,
			env: {
				mongodb_username: 'DaryaShnipava',
				mongodb_password: '41CXIDronxeVtQgQ',
				mongodb_cluster: 'cluster0',
				mongodb_database: 'js-blog-dev'
			}
		};
	}
	return {
		reactStrictMode: true,
		env: {
			mongodb_username: 'DaryaShnipava',
			mongodb_password: '41CXIDronxeVtQgQ',
			mongodb_cluster: 'cluster0',
			mongodb_database: 'js-blog'
		}
	};
};

module.exports = nextConfig;
