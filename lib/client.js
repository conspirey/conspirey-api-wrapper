"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const endpoints_1 = __importDefault(require("./endpoints"));
class Client {
    constructor(settings) {
        this.settings = settings;
    }
    get getSettings() {
        return this.settings;
    }
    Login(auth) {
        let response = {};
        fetch(this.settings.url + endpoints_1.default.Login, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(auth),
        }).then((res) => {
            response.response = res;
        });
        return response;
    }
    Logout() {
        let response = {};
        fetch(this.settings.url + endpoints_1.default.Logout, {
            method: "POST",
            credentials: "include",
        }).then((res) => {
            response.response = res;
        });
        return response;
    }
    Register(auth) {
        let response = {};
        fetch(this.settings.url + endpoints_1.default.Register, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(auth),
        }).then((res) => {
            response.response = res;
        });
        return response;
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map