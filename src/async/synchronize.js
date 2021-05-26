'use strict';

function exec(fn){
    console.log(Object.prototype.toString.call(fn))
}

module.exports = {
    exec: exec
}