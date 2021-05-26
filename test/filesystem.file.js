const fs = require('fs');
const path = require('path');
const app = require('../index');
const assert = require('assert');

const TEMP_DIR = 'tmp';
const TEMP_FILE_PATH = `${TEMP_DIR}/l1/l2/l3/readme.txt`;
const TEMP_FILE_CONTENT = 'hello world';

describe('$.filesystem.file', function(){
    describe('.create()', function(){
        it('create file', async function(){
            var f = await app.filesystem.file.create(TEMP_FILE_PATH, TEMP_FILE_CONTENT);
            var r = fs.readFileSync(TEMP_FILE_PATH).toString();
            assert.strictEqual(r, TEMP_FILE_CONTENT);
            assert.deepStrictEqual(f, path.parse(TEMP_FILE_PATH));
        });
    })
    describe('.remove()', function(){
        it('remove file', async function(){
            app.filesystem.file.remove(TEMP_DIR);
            assert.strictEqual(fs.existsSync(TEMP_DIR), false);
        });
    })
    
})
