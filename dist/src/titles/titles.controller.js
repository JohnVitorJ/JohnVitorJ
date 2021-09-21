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
exports.TitlesController = void 0;
const titles_service_1 = require("./titles.service");
class TitlesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { skip, limit, sort } = req.query;
                res.status(200).json(yield titles_service_1.TitlesService.list({ skip, limit, sort }));
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
}
exports.TitlesController = TitlesController;
//# sourceMappingURL=titles.controller.js.map