module.exports = (response) => {
	if(!response) {
		return response;
	}

	if (response.error) {
		throw response.error;
	}

	if(Array.isArray(response.addResults)) {
		const errors = response.addResults.filter((result) => result.success === false);

		if (errors.length) {
			throw errors;
		}
	}

	if(Array.isArray(response.deleteResults)) {
		const errors = response.deleteResults.filter((result) => result.success === false);

		if (errors.length) {
			throw errors;
		}
	}

	return response;
};
