"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite3_1 = require("sqlite3");
function createConnection() {
    var db = new sqlite3_1.default.Database('mood-testing.db');
    return db;
}
exports.default = createConnection;
