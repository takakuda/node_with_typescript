"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerAPI = void 0;
const http = require("http");
class ServerAPI {
    initServer() {
        const server = http.createServer((request, response) => this.requestHandler(request, response));
        server.listen("5000");
        console.log("http://localhost:5000");
    }
    requestHandler(request, response) {
        response.end("Hello! Node.js with typescript");
    }
}
exports.ServerAPI = ServerAPI;
new Main();
//# sourceMappingURL=serverModule.js.map