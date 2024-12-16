"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(name, phone) {
        this.name = name;
        this.phoneNumber = phone;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getPhone() {
        return this.phoneNumber;
    }
    setPhone(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
}
exports.default = Client;
