"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const titles_controller_1 = require("./titles.controller");
const Controller = new titles_controller_1.TitlesController();
exports.default = express_1.default.Router()
    .get('/', Controller.list);
//# sourceMappingURL=titles.routes.js.map