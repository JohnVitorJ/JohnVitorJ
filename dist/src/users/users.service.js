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
exports.UsersService = void 0;
const users_model_1 = require("./users.model");
const titles_model_1 = require("../titles/titles.model");
const faker_1 = __importDefault(require("faker"));
class UsersService {
    static list(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield users_model_1.UserModel.find({}).sort({ name: 1 });
                console.log("resp >>", resp);
                return resp;
            }
            catch (error) {
                throw error;
            }
        });
    }
    static populateDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                faker_1.default.locale = "pt_BR";
                console.log("+faker.finance.amount >>>");
                console.log(faker_1.default.finance.amount);
                for (let i = 0; i <= 20; i++) {
                    const name = faker_1.default.name.findName();
                    const user = yield users_model_1.UserModel.create({
                        name,
                        email: faker_1.default.internet.email(name),
                        startedAt: faker_1.default.date.past(15, 2000),
                    });
                    console.log('user >>>>');
                    console.log(user);
                    yield titles_model_1.TitlesModel.create({
                        user: user._id,
                        amount: +faker_1.default.finance.amount(100, 5000, 2),
                    });
                }
                return { ok: true };
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map