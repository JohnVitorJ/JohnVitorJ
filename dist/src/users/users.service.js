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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const users_model_1 = require("./users.model");
class UsersService {
    static list(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const match = { name: { $regex: queryParams.search || "" } };
                const data = yield users_model_1.UserModel.aggregate([
                    {
                        $match: match,
                    }
                ])
                    .skip(+queryParams.skip || 0)
                    .limit(+queryParams.limit || 10);
                return { data, count: data.length };
            }
            catch (error) {
                throw error;
            }
        });
    }
    static create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield users_model_1.UserModel.create(user);
            }
            catch (error) {
                throw error;
            }
        });
    }
    static getById(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield users_model_1.UserModel.findOne({ _id });
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map