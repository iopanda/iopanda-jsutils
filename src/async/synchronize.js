'use strict';

const validate = require('../types/validate');

function exec(fn, args){
    if(validate.isSyncFunction(fn)) return fn(args);
    if(validate.isAsyncFunction(fn)){
        
    }
}

module.exports = {
    exec: exec
}