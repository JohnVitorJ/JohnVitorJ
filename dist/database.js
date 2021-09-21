"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbUri = `mongodb://root:1234@db:27017/dev?authSource=admin`;
const connection = mongoose_1.default.connect(dbUri);
connection.then((db) => `server ${db}`).catch((err) => console.log(err));
exports.default = connection;
//# sourceMappingURL=database.js.map