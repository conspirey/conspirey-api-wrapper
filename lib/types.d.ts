export interface Settings {
    url: string;
}
export interface AuthDetailsSubmit {
    name: string;
    password: string;
}
export interface AuthDetails {
    id: string;
    name: string;
}
export interface ReturnDataRequest {
    response?: Response;
    error?: string;
    error_type?: 1 | 2 | 3 | 4;
}
//# sourceMappingURL=types.d.ts.map