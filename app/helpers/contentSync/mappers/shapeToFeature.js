const { path } = require("ramda");

module.exports = (content, shape) => ({
	type: "Feature",
	geometry: shape.geometry,
	properties: {
		F_id: shape.uid,
		uuid: content.uuid,
		title: path(["fields", "title", "nl"])(content),
		intro: path(["fields", "description", "nl"])(content),
		lastModified: path(["meta", "lastModified"])(content),
		created: path(["meta", "created"])(content),
		link: path(["meta", "slug", "nl"])(content)
	}
});
