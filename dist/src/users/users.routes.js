"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("./users.controller");
const Controller = new users_controller_1.UsersController();
exports.default = express_1.default.Router()
    .get('/users', Controller.list)
    .get('/populate', Controller.populateDB);
//# sourceMappingURL=users.routes.js.map