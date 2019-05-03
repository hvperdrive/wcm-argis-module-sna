const {
	__,
	compose,
	lensProp,
	identity,
	invoker,
	ifElse,
	length,
	curry,
	path,
	prop,
	omit,
	set,
	gt,
} = require("ramda");

const getMappedGeometry = (shape) => {
	switch(shape.geometry.type) {
		// Set polygon geometry
		case "Polygon":
			return compose(
				omit(["coordinates", "type"]),
				set(lensProp("rings"), shape.geometry.coordinates)
			)(shape.geometry);

		// Set point geometry
		case "Point":
			return compose(
				omit(["coordinates", "type"]),
				set(lensProp("x"), shape.geometry.coordinates[0]),
				set(lensProp("y"), shape.geometry.coordinates[1])
			)(shape.geometry)
		default:
			console.log("%s not supported at the moment.", item.geometry.type); // eslint-disable-line no-console
	}
};

const getStringWithMaxLength = curry((maxLength, p, object) => compose(
	ifElse(
		compose(gt(__, maxLength), length),
		compose(
		  (val) => val + "..." ,
		  invoker(2, 'substring')(0, maxLength - 3)
		),
		identity
	),
	path(p)
)(object));

module.exports = (content, shape) => ({
	type: "Feature",
	geometry: Object.assign(
		{},
		{
			spatialReference: {
				wkid: 4326,
			}
		},
		getMappedGeometry(shape)
	),
	attributes: {
		F_id: prop("uid")(shape),
		uuid: prop("uuid")(content),
		title: getStringWithMaxLength(150, ["fields", "title", "nl"])(content),
		intro: getStringWithMaxLength(255, ["fields", "metaDescription", "nl"])(content),
		lastModified: path(["meta", "lastModified"])(content),
		created: path(["meta", "created"])(content),
		link: getStringWithMaxLength(255, ["meta", "slug", "nl"])(content),
	}
});
