var app = require('../index');
var assert = require('assert');

class TSClass{}
describe('$.types.meta', function(){
    describe('.typeof()', function(){
        it('should identify type of object', function(){
            assert.strictEqual(app.types.meta.typeof({}), 'Object');
        });
        it('should identify type of array', function(){
            assert.strictEqual(app.types.meta.typeof([]), 'Array');
        });
        it('should identify type of function', function(){
            assert.strictEqual(app.types.meta.typeof(function(){}), 'Function');
        });
        it('should identify type of promise', function(){
            assert.strictEqual(app.types.meta.typeof(new Promise(()=>{})), 'Promise');
        });
        it('should identify type of null', function(){
            assert.strictEqual(app.types.meta.typeof(null), 'Null');
        });
        it('should identify type of undefined', function(){
            assert.strictEqual(app.types.meta.typeof(undefined), 'Undefined');
        });
        it('should identify type of number', function(){
            assert.strictEqual(app.types.meta.typeof(0), 'Number');
        });
        it('should identify type of class', function(){
            assert.strictEqual(app.types.meta.typeof(new TSClass()), 'Object');
        });
    })
    
})
