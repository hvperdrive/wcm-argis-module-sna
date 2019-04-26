const { path, set, compose, lensProp, prop } = require("ramda");

const getMappedGeometry = (shape) => {
	switch(shape.geometry.type) {
		// Set polygon geometry
		case "Polygon":
			return set(lensProp("rings"), shape.geometry.coordinates)(shape.geometry);

		// Set point geometry
		case "Point":
			return compose(
				set(lensProp("x"), shape.geometry.coordinates[0]),
				set(lensProp("y"), shape.geometry.coordinates[1])
			)(shape.geometry)
		default:
			console.log("%s not supported at the moment.", item.geometry.type); // eslint-disable-line no-console
	}
};

module.exports = (content, shape) => ({
	type: "Feature",
	geometry: getMappedGeometry(shape),
	attributes: {
		F_id: prop("uid")(shape),
		uuid: prop("uuid")(content),
		title: path(["fields", "title", "nl"])(content),
		intro: path(["fields", "metaDescription", "nl"])(content),
		lastModified: path(["meta", "lastModified"])(content),
		created: path(["meta", "created"])(content),
		link: path(["meta", "slug", "nl"])(content),
	}
});
