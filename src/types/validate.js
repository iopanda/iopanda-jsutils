const meta = require('./meta');

module.exports = {
    isObject: obj => meta.typeof(obj) === 'Object',
    isArray: obj => meta.typeof(obj) === 'Array',
    isFunction: obj => meta.typeof(obj) === 'Function' || meta.typeof(obj) === 'AsyncFunction',
    isSyncFunction: obj => meta.typeof(obj) === 'Function',
    isAsyncFunction: obj => meta.typeof(obj) === 'AsyncFunction',
    isPromise: obj => meta.typeof(obj) === 'Promise',
    isNull: obj => meta.typeof(obj) === 'Null',
    isUndefined: obj => meta.typeof(obj) === 'Undefined',
    isNumber: obj => meta.typeof(obj) === 'Number'
}