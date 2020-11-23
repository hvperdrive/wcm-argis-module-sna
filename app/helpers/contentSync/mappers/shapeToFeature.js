const {
	__,
	compose,
	lensProp,
	identity,
	invoker,
	ifElse,
	length,
	pathOr,
	propOr,
	curry,
	omit,
	set,
	gt,
} = require("ramda");
const { toJavascriptObject } = require("./toJavascriptObject");

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
	pathOr("", p)
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
		F_id: propOr("", "uid")(shape),
		uuid: propOr("", "uuid")(toJavascriptObject(content)),
		title: getStringWithMaxLength(150, ["fields", "title", "nl"])(content),
		intro: getStringWithMaxLength(255, ["fields", "metaDescription", "nl"])(content),
		lastModified: pathOr("", ["meta", "lastModified"])(content),
		created: pathOr("", ["meta", "created"])(content),
		link: getStringWithMaxLength(255, ["meta", "slug", "nl"])(content),
	}
});
