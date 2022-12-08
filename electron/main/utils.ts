import electron, { app } from "electron";

export const isDev = (): boolean => {
    if(typeof electron === "string") {
        throw new TypeError("Not running in an Electron environment!");
    }

    if("ELECTRON_IS_DEV" in process.env) {
        return Number.parseInt(process.env.ELECTRON_IS_DEV!, 10) === 1;
    } else return !app.isPackaged;
}