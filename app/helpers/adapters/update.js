const remove = require("./remove");
const create = require("./create");

module.exports = (type, features) => {
    const objectIds = features.map((feature) => feature.attributes.OBJECTID);

    return remove(type, objectIds).then(() => create(type, features));
};
