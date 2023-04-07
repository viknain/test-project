function getPropByString(obj, propString) {
    if (!propString) return obj;
    if (propString === "seperator") return "-";
    var prop,
        props = propString.split(".");

    for (var i = 0, iLen = props?.length - 1; i < iLen; i++) {
        prop = props[i];
        var candidate = obj[prop];
        if (candidate !== undefined) {
            obj = candidate;
        } else {
            break;
        }
    }
    return obj[props[i]];
}


export {
    getPropByString
}