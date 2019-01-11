module.exports = {
	env: {
		'dev': {
			apiHost: JSON.stringify('/api/'),
		},
		'prod': {
			apiHost: JSON.stringify('https://developer.paytm.com/'),
		},
		'staging': {
			apiHost: JSON.stringify('https://developer-staging.paytm.com/'),
		},
		'qa-staging': {
			apiHost: JSON.stringify('https://developer-qastaging.paytm.com/'),
		},
	}
};
