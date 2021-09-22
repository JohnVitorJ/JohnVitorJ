"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    startedAt: {
        type: Date,
    },
    birth: {
        type: Date,
    },
}, { versionKey: false });
exports.UserModel = mongoose_1.model("Users", exports.userSchema);
//# sourceMappingURL=users.model.js.map