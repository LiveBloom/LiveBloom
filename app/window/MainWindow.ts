import { BrowserWindow } from "electron";
import * as path from "path";
import { GenericWindow } from "./GenericWindow";
import Main = require("electron/main");

export class MainWindow extends GenericWindow {
    private static instance: MainWindow;

    public constructor() {
        super({
            useContentSize: true,
            width: 800,
            height: 450,
            
        });
        this.loadFile("dist/renderer/index.html");

    }

    public static create(): MainWindow {
        if(MainWindow.instance != null) return MainWindow.instance;
        const window = new MainWindow();




        MainWindow.instance = window;
        return MainWindow.instance;
    }
}