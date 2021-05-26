const app = require('../index');
const assert = require('assert');
describe('$.types.validate', function(){
    describe('.typeof()', function(){
        it('should identify type of object', function(){
            assert.strictEqual(app.types.validate.isObject({}), true);
        });
        it('should identify type of array', function(){
            assert.strictEqual(app.types.validate.isArray([]), true);
        });
        it('should identify type of function', function(){
            assert.strictEqual(app.types.validate.isFunction(function(){}), true);
            assert.strictEqual(app.types.validate.isFunction(async function(){}), true);
        });
        it('should identify type of sync function', function(){
            assert.strictEqual(app.types.validate.isSyncFunction(function(){}), true);
            assert.strictEqual(app.types.validate.isSyncFunction(async function(){}), false);
        });
        it('should identify type of async function', function(){
            assert.strictEqual(app.types.validate.isAsyncFunction(function(){}), false);
            assert.strictEqual(app.types.validate.isAsyncFunction(async function(){}), true);
        });
        it('should identify type of promise', function(){
            assert.strictEqual(app.types.validate.isPromise(new Promise(()=>{})), true);
        });
        it('should identify type of null', function(){
            assert.strictEqual(app.types.validate.isNull(null), true);
        });
        it('should identify type of undefined', function(){
            assert.strictEqual(app.types.validate.isUndefined(undefined), true);
        });
        it('should identify type of number', function(){
            assert.strictEqual(app.types.validate.isNumber(0), true);
        });
    })
    
})
