import {AuthDetailsSubmit, ReturnDataRequest, Settings} from "./types";
import endpoints from "./endpoints";
class Client {
    settings: Settings;
    constructor(settings: Settings) {
        this.settings = settings
    }
    get getSettings(): Settings {
        return this.settings
    }
    Login(auth: AuthDetailsSubmit): ReturnDataRequest {
        let response: ReturnDataRequest = {};
        fetch(this.settings.url + endpoints.Login, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(auth),
        }).then((res) => {
            response.response = res
        })
        return response as ReturnDataRequest
    }
    Logout() {
        let response: ReturnDataRequest = {};
        fetch(this.settings.url + endpoints.Logout, {
            method: "POST",
            credentials: "include",
        }).then((res) => {
            response.response = res
        })
        return response as ReturnDataRequest
    }
    Register(auth: AuthDetailsSubmit): ReturnDataRequest {
        let response: ReturnDataRequest = {};
        fetch(this.settings.url + endpoints.Register, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(auth),
        }).then((res) => {
            response.response = res
        })
        return response as ReturnDataRequest
    }

}

export default Client