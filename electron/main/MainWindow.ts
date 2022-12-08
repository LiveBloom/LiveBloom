import GenericWindow from "./GenericWindow";
import { join } from "path";

export default class MainWindow extends GenericWindow {
    public static current: MainWindow;

    private constructor() {
        super({
            preload: join(__dirname, "../preload/preload.js")
        }, {
            width: 960,
            minWidth: 640,
            height: 640,
            minHeight: 360,
            
            fullscreen: false,
            fullscreenable: true,
            minimizable: true,
            resizable: true
        });

        this.loadFile("dist/web/index.html");
        this.webContents.openDevTools({
            mode: "detach"
        })
    }

    public static createWindow() {
        MainWindow.current = new MainWindow();
    }
}