import { contextBridge } from "electron"

export const MODAL_API = {
    show: () => {}
}

contextBridge.exposeInMainWorld("modal", MODAL_API);