import { app } from "electron";
import { MainWindow } from "./window/MainWindow";

app.on("ready", () => {
    MainWindow.create();    

    app.on("activate", () => {
        if(MainWindow.getAllWindows().length === 0) MainWindow.create();
    })
});

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") app.quit();
});