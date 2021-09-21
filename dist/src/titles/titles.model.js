"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitlesModel = exports.titlesSchema = void 0;
const mongoose_1 = require("mongoose");
const ObjectId = mongoose_1.Schema.Types.ObjectId;
exports.titlesSchema = new mongoose_1.Schema({
    user: {
        type: ObjectId,
        ref: "Users",
    },
    label: {
        type: String,
    },
    expiresAt: {
        type: Date,
    },
    amount: {
        type: Number,
    },
    status: {
        enum: ['PAID', 'DEFAULTING']
    },
});
exports.TitlesModel = mongoose_1.model("Titles", exports.titlesSchema);
//# sourceMappingURL=titles.model.js.map