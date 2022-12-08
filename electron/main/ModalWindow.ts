import { BrowserWindow } from "electron";
import GenericWindow from "./GenericWindow";
import { join } from "path";

export default class ModalWindow extends GenericWindow {
    public constructor(options: ModalWindowConstructorOptions) {
        super({
            preload: join(__dirname, "../preload/modal.js")
        }, {
            parent: options.parent,
            modal: true,
            show: false,

            movable: true,
            resizable: false,
            minimizable: false,
            fullscreenable: false,
            fullscreen: false,

            maxWidth: 640,
            maxHeight: 960
        });
    }

    public open() {
        this.once("ready-to-show", () => {
            this.show();
        })
    }
}

interface ModalWindowConstructorOptions {
    parent: BrowserWindow;
}