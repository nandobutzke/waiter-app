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
exports.createProduct = void 0;
const Product_1 = require("../../models/Product");
function createProduct(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const imagePath = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
            const { name, description, price, category, ingredients } = req.body;
            if (!name) {
                return res.status(400).json({
                    error: 'Name is required!',
                });
            }
            const product = yield Product_1.Product.create({
                name,
                description,
                imagePath,
                price: Number(price),
                category,
                ingredients: ingredients ? JSON.parse(ingredients) : [],
            });
            res.status(201).json(product);
        }
        catch (_b) {
            res.sendStatus(500);
        }
    });
}
exports.createProduct = createProduct;
