import { ServerAPI } from "./serverModule";

class Main {
    constructor() {
        const Server = new ServerAPI();
        Server.initServer();
    }
}

new Main();