"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var scully_plugin_http404_1 = require("@gammastream/scully-plugin-http404");
var plugin_1 = require("scully/plugins/plugin");
exports.config = {
    projectRoot: "./src",
    projectName: "Clockwork",
    outDir: './dist/static',
    defaultPostRenderers: [plugin_1.MinifyHtml, scully_plugin_http404_1.getHttp404Plugin(), 'seoHrefOptimise'],
    routes: {}
};
