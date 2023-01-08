import { AuthDetailsSubmit, ReturnDataRequest, Settings } from "./types";
declare class Client {
    settings: Settings;
    constructor(settings: Settings);
    get getSettings(): Settings;
    Login(auth: AuthDetailsSubmit): ReturnDataRequest;
    Logout(): ReturnDataRequest;
    Register(auth: AuthDetailsSubmit): ReturnDataRequest;
}
export default Client;
//# sourceMappingURL=client.d.ts.map