"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = require("./router");
mongoose_1.default.connect('mongodb://localhost:27017').then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(router_1.router);
    app.listen(3001, () => {
        console.log('🚀 Server started at http://localhost:3001');
    });
}).catch(() => 'Ocorreu um erro ao conectar no mongodb');
