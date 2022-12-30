import * as electron from "electron";

if (typeof electron === "string") {
	throw new TypeError("Not running Electron!");
}
export const isDev = "ELECTRON_IS_DEV" in process.env ? Number.parseInt(process.env.ELECTRON_IS_DEV ?? "0", 10) === 1 : !electron.app.isPackaged;