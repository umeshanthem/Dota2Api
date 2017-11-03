// 'use strict';
var insertMapArray = require('./insertMapArray.js');
var map = {};
map[0] = 0;
map[1] = 1;
map[2] = 2;
map[3] = 3;
map[4] = 4;
insertMapArray.disp();

insertMapArray.insertInDB('umesh', map, 'dump', function (err, data) {
    if (err) {
        console.log(err);
        throw err;
    }
    else {
        console.log("insertion done and returning "+data);
    }
});