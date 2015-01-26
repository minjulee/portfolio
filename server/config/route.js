/**
 * Dependencies.
 */
var requireDirectory = require('require-directory');

// Bootstrap your controllers so you dont have to load them individually. This loads them all into the controller name space. https://github.com/troygoode/node-require-directory
var controller = requireDirectory(module, '../controller');

module.exports = [
    {
        method : "GET",
        path: "/",
        config:controller.work.index
    },
    {
        method : "GET",
        path: "/blog",
        config:controller.blog.index
    },
    {
        method : "GET",
        path: "/contact",
        config:controller.contact.index
    },
    {
        method: 'GET',
        path: '/{path*}',
        config: controller.work.missing
    },
    /**
     * 아래부턴 image, css, js 등의 외부 파일 주소 처리
     */
    {
        method: 'GET',
        path: '/images/{path*}',
        config: controller.assets.images
    },
    {
        method: 'GET',
        path: '/css/{path*}',
        config: controller.assets.css
    },
    {
        method: 'GET',
        path: '/js/{path*}',
        config: controller.assets.js
    }
];
