import { contextBridge, ipcRenderer } from "electron";

export const API = {
    send: (channel: string, ...args: any[]) => ipcRenderer.send(channel, ...args),

    obs: {
        ws: {
            connect: (ip: string, port: number, password?: string) => ipcRenderer.invoke("obs/ws/connect", )
        }
    }
}

contextBridge.exposeInMainWorld("api", API);