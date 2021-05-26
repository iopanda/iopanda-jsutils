const app = require('../index');
const assert = require('assert');

const TEXT = "TEXT";

describe('$.async.asynchronous', function(){
    describe('.exec()', function(){
        it('sync function -> promise', async function(){
            var p = app.async.asynchronous.exec(str => str, TEXT);
            assert.strictEqual(app.types.validate.isPromise(p), true);
            await p.then(res => {
                assert.strictEqual(res, TEXT);
            })
        });
        it('async function -> promise', async function(){
            var p = app.async.asynchronous.exec(str => str, TEXT);
            assert.strictEqual(app.types.validate.isPromise(p), true);
            await p.then(res => {
                assert.strictEqual(res, TEXT);
            })
        });
        it('promise -> promise', async function(){
            var p = app.async.asynchronous.exec(new Promise((res, rej)=>{res(TEXT)}));
            assert.strictEqual(app.types.validate.isPromise(p), true);
            await p.then(res => {
                assert.strictEqual(res, TEXT);
            })
        });
    })
    
})
