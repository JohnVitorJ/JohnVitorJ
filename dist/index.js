"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("./database");
const routes_1 = __importDefault(require("./routes"));
const port = 3001;
const HOST = "0.0.0.0";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
(0, routes_1.default)(app);
app.listen(port, HOST, () => {
    console.log("listening ...");
});
//# sourceMappingURL=index.js.map