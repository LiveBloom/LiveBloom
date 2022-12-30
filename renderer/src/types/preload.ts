import { IApi } from "../../../shared";

declare global {
    interface Window {
        api: IApi
    }
}

export {};