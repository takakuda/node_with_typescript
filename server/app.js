"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
class Main {
    constructor() {
        const server = http.createServer((request, response) => this.requestHandler(request, response));
        server.listen("5000");
        console.log("http://localhost:5000");
    }
    requestHandler(request, response) {
        response.end("Hello! Node.js with typescript");
    }
}
new Main();
//# sourceMappingURL=app.js.map