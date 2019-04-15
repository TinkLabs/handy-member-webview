const axios = require('axios');

export default (domain, locale = 'en_US', token) => {
	const instance = axios.create({
		baseURL: domain,
		timeout: 30000,
		headers: {
			'Authorization': token,
			'Accept-Language': locale,
		},
	});
	return instance.get(`/v1/member/baseInfo`)
		.then(function (response) {
			return response.data.data;
			// handle success
		});

}