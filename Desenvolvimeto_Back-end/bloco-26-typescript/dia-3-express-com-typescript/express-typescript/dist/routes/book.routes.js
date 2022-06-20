"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const book_controller_1 = __importDefault(require("../controllers/book.controller"));
const bookController = new book_controller_1.default();
router.get('/', bookController.getAll);
exports.default = router;
