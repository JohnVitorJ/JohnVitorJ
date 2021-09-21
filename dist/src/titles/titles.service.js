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
exports.TitlesService = void 0;
const titles_model_1 = require("./titles.model");
class TitlesService {
    static list(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const match = {};
                const [key, val] = queryParams.sort.split("_");
                const sortBy = { [key]: val == "ASC" ? 1 : -1 };
                return yield titles_model_1.TitlesModel.aggregate([
                    {
                        $match: match,
                    },
                    {
                        $lookup: {
                            from: 'users',
                            foreignField: "_id",
                            localField: 'user',
                            as: 'user'
                        }
                    }
                ])
                    .skip(queryParams.skip)
                    .limit(queryParams.limit);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.TitlesService = TitlesService;
//# sourceMappingURL=titles.service.js.map