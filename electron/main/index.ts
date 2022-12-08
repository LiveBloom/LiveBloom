import { app, BrowserWindow, ipcMain } from "electron";
import { isDev } from "./utils";
import { join } from "path";
import ModalWindow from "./ModalWindow";
import MainWindow from "./MainWindow";
import OBSWebSocket from "obs-websocket-js";


// const createMainWindow = () => {
//     const mainWindow = new BrowserWindow({
//         movable: true,
//         resizable: true,
//         closable: true,
//         minimizable: true,
//         fullscreenable: true,
//         fullscreen: false,

//         center: true,
//         width: 800,
//         height: 600,

//         darkTheme: true,
//         thickFrame: true,

//         webPreferences: {
//             nodeIntegration: false,
//             nodeIntegrationInWorker: true,
//             contextIsolation: true,
//             devTools: isDev(),
//             preload: join(__dirname, "../preload/preload.js")
//         }
//     });

//     mainWindow.setMenu(null);
//     mainWindow.loadFile("dist/web/index.html");
//     mainWindow.webContents.openDevTools({
//         mode: "detach"
//     });
// }

app.on("ready", () => {
    MainWindow.createWindow()

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) MainWindow.createWindow();
    })
})

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") app.quit();
})


ipcMain.on("bruh", () => console.log("Yoooo"))