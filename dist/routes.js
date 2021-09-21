"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_routes_1 = __importDefault(require("./src/users/users.routes"));
const apiBaseUrl = '/api';
function routes(app) {
    app.use(apiBaseUrl, users_routes_1.default);
}
exports.default = routes;
//# sourceMappingURL=routes.js.map