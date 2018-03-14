'use strict';
var _require = require('jsdom'), JSDOM = _require.JSDOM;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3BoaWxpcGJlZWwvU2l0ZXMvZ2l0aHViL2V4YW1wbGUtdHlwZXNjcmlwdC1ueWMtbW9jaGEtY292ZXJhZ2UvdGVzdC9zZXR1cC5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3BoaWxpcGJlZWwvU2l0ZXMvZ2l0aHViL2V4YW1wbGUtdHlwZXNjcmlwdC1ueWMtbW9jaGEtY292ZXJhZ2UvdGVzdC9zZXR1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFFYixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQzNCLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0FBRTNCLElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFDbkUsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUcxQixtQkFBbUIsR0FBRyxFQUFFLE1BQU07SUFDMUIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUk7UUFDN0QsTUFBTSxDQUFDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLFdBQVcsQ0FBQztJQUMvQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJO1FBQ2pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDdkIsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQ2xDLE1BQU0sQ0FBQyxTQUFTLEdBQUc7SUFDZixTQUFTLEVBQUUsU0FBUztDQUN2QixDQUFDO0FBQ0YsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnanNkb20nKSxcbiAgICBKU0RPTSA9IF9yZXF1aXJlLkpTRE9NO1xuXG52YXIganNkb20gPSBuZXcgSlNET00oJzwhZG9jdHlwZSBodG1sPjxodG1sPjxib2R5PjwvYm9keT48L2h0bWw+Jyk7XG52YXIgd2luZG93ID0ganNkb20ud2luZG93O1xuXG5cbmZ1bmN0aW9uIGNvcHlQcm9wcyhzcmMsIHRhcmdldCkge1xuICAgIHZhciBwcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNyYykuZmlsdGVyKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGFyZ2V0W3Byb3BdID09PSAndW5kZWZpbmVkJztcbiAgICB9KS5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc3JjLCBwcm9wKTtcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKTtcbn1cblxuZ2xvYmFsLndpbmRvdyA9IHdpbmRvdztcbmdsb2JhbC5kb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbmdsb2JhbC5uYXZpZ2F0b3IgPSB7XG4gICAgdXNlckFnZW50OiAnbm9kZS5qcydcbn07XG5jb3B5UHJvcHMod2luZG93LCBnbG9iYWwpOyJdfQ==