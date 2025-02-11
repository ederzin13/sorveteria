"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErroPagamento extends Error {
    //private message: string;
    constructor(message) {
        //this.message = message;
        super(message);
    }
    getMessage() {
        return this.message;
    }
}
exports.default = ErroPagamento;
