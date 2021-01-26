const path = require("path");

module.exports = {
    entry: [
        "./source/js/burger-menu.js",
        "./source/js/form-check.js",
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "source/js"),
        iife: true
    },
    devtool: false
};
