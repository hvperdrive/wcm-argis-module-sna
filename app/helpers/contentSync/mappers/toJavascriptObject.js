module.exports.toJavascriptObject = item => item && typeof item.toObject === 'function' ? item.toObject() : item
