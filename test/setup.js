'use strict';

var _require = require('jsdom'),
    JSDOM = _require.JSDOM;

var jsdom = new JSDOM('<!doctype html><html><body></body></html>');
var window = jsdom.window;


function copyProps(src, target) {
    var props = Object.getOwnPropertyNames(src).filter(function (prop) {
        return typeof target[prop] === 'undefined';
    }).map(function (prop) {
        return Object.getOwnPropertyDescriptor(src, prop);
    });
    Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js'
};
copyProps(window, global);