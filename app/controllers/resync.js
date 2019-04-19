const { handlers: { resync } } = require("../helpers/contentSync")

module.exports = (req, res, next) => {
	res.sendStatus(202);

	return resync();
};
