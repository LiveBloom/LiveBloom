import { BrowserWindow, BrowserWindowConstructorOptions } from "electron";
import { isDev } from "./utils";
import { join } from "path";

export default class GenericWindow extends BrowserWindow {
    public constructor(options: GenericWindowContructorOptions, overrideOptions?: BrowserWindowConstructorOptions) {
        super({
            autoHideMenuBar: true,
            
            closable: true,
            movable: true,

            center: true,

            frame: true,
            thickFrame: true,
            
            webPreferences: {
                devTools: isDev(),
                nodeIntegration: false,
                nodeIntegrationInWorker: true,
                contextIsolation: true,
                preload: options.preload
            },

            ...overrideOptions
        });
        
        this.setMenu(null);
    }
}

interface GenericWindowContructorOptions {
    preload?: string;
}