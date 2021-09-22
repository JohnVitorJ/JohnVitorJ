"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const db_seeder_1 = __importDefault(require("./src/seed/db.seeder"));
const dbUri = `mongodb://root:1234@db:27017/dev?authSource=admin`;
const connection = mongoose_1.default.connect(dbUri);
connection
    .then((db) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`server ${db}`);
    yield (0, db_seeder_1.default)(200);
}))
    .catch((err) => console.log(err));
exports.default = connection;
//# sourceMappingURL=database.js.map