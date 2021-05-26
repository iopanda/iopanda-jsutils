'use strict';

const fs = require('fs');
const path = require('path');
const validate = require('../types/validate');

function create(filepath, content){
    var fp = path.parse(filepath);
    var dirs = fp.dir.split(path.sep);
    var prefix = [];
    while(dirs.length > 0){
        prefix.push(dirs[0]);
        dirs = dirs.splice(1);
        var cur = prefix.join(path.sep);
        if(!fs.existsSync(cur)) {
            fs.mkdirSync(cur);
        }else{
            var stat = fs.lstatSync(cur);
            if(stat.isFile()){
                fs.unlinkSync(cur);
                fs.mkdirSync(cur);
            }
        }
    }
    fs.writeFileSync(filepath, content);
    return fp;
}

function remove(path) {
    var files = [];
    if( fs.existsSync(path) ) {
        files = fs.readdirSync(path);
        files.forEach(function(file,index){
            var curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) {
                remove(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

module.exports = {
    create: create,
    remove: remove
}