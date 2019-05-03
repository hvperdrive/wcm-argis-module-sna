const { pathOr } = require("ramda");

module.exports = (content) => pathOr([], ["fields", "map", "shapes"])(content)
