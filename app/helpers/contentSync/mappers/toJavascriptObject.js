module.exports.toJavascriptObject = item => item && typeof item.toObject ? item.toObject() : item
