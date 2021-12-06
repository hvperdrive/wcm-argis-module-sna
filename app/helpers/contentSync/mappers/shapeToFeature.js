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
	path,
	omit,
	set,
	gt,
} = require("ramda");
const { toJavascriptObject } = require("./toJavascriptObject");

const getMappedGeometry = (shape) => {
	switch(shape.geometry.type) {
		case "Polygon":
			return compose(
				omit(["coordinates", "type"]),
				set(lensProp("rings"), shape.geometry.coordinates)
			)(shape.geometry);

		// Set polygon geometry
		case "LineString":
			return compose(
				omit(["coordinates", "type"]),
				set(lensProp("paths"), shape.geometry.coordinates)
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
		link: getStringWithMaxLength(255, ["meta", "slug", "nl"])(toJavascriptObject(content)),
		link_nl: getStringWithMaxLength(255, ["meta", "slug", "nl"])(toJavascriptObject(content)),
		link_fr: getStringWithMaxLength(255, ["meta", "slug", "fr"])(toJavascriptObject(content)),
		link_en: getStringWithMaxLength(255, ["meta", "slug", "en"])(toJavascriptObject(content)),
		link_de: getStringWithMaxLength(255, ["meta", "slug", "de"])(toJavascriptObject(content)),
		title: getStringWithMaxLength(150, ["fields", "title", "nl"])(content),
		titel_nl: getStringWithMaxLength(150, ["fields", "title", "nl"])(content),
		titel_fr: getStringWithMaxLength(150, ["fields", "title", "fr"])(content),
		titel_en: getStringWithMaxLength(150, ["fields", "title", "en"])(content),
		titel_de: getStringWithMaxLength(150, ["fields", "title", "de"])(content),
		intro: getStringWithMaxLength(255, ["fields", "metaDescription", "nl"])(content),
		intro_nl: getStringWithMaxLength(255, ["fields", "metaDescription", "nl"])(content),
		intro_fr: getStringWithMaxLength(255, ["fields", "metaDescription", "fr"])(content),
		intro_en: getStringWithMaxLength(255, ["fields", "metaDescription", "en"])(content),
		intro_de: getStringWithMaxLength(255, ["fields", "metaDescription", "de"])(content),
		lastModified: pathOr("", ["meta", "lastModified"])(content),
		created: pathOr("", ["meta", "created"])(content),
		startDateRoadwork: pathOr("", ["fields", "startDateRoadwork"], content),
		endDateRoadwork: pathOr("", ["fields", "endDateRoadwork"], content),
		typeRoadworkSelection: pathOr("", ["fields", "typeRoadworkSelection"], content),
		shapeColor: pathOr("", ["style", "color"], shape),
	}
});
