import { BrowserViewConstructorOptions, BrowserWindow, BrowserWindowConstructorOptions } from "electron";
import * as path from "path";
import { isDev } from "../util/isDev";

export class GenericWindow extends BrowserWindow {
    public constructor(options: BrowserWindowConstructorOptions) {
        super({
            center: true,
            webPreferences: {
                nodeIntegration: false,
                nodeIntegrationInWorker: true,
                contextIsolation: true,
                preload: path.join(__dirname, "../preload/api.js"),
                devTools: isDev
            },
            ...options
        });
    }
}