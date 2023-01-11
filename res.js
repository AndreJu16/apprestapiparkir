'use strict';

const { response } = require("express");
const res = require("express/lib/response");

exports.ok = function(values, res){
    var data = {
    'status':200,
    'values':values
};

    res.json(data);
    res.end();
}