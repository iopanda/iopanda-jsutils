
module.exports = {
    typeof: obj => formatTypeString(getTypeName(obj))
}



function getTypeName(object){
    return Object.prototype.toString.call(object);
}

function formatTypeString(typeStr){
    return typeStr.split(' ')[1].replace(']', '');
}