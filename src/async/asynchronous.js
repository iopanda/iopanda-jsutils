

const validate = require('../types/validate');

function exec(fn, args){
    if(validate.isSyncFunction(fn)){
        return new Promise(resolve => {
            resolve(fn(args));
        })
    }else if(validate.isAsyncFunction(fn)){
        return new Promise((resolve, reject) => {
            fn(args, resolve, reject);
        })
    }else if(validate.isPromise(fn)){
        return fn;
    }else{
        return new Promise(() => {
            throw Error(`fn is not a function: ${fn.toString()}`);
        })
    }
}

module.exports = {
    exec: exec
}