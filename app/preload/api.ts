import { contextBridge } from "electron"
import { IApi } from "../../shared";

export const GlobalApi: IApi = {
    platform: () => process.platform,
    arch: () => process.arch,
    versions: {
        node: () => process.versions.node,
        electron: () => process.versions.electron,
        chrome: () => process.versions.chrome
    }
}

contextBridge.exposeInMainWorld("api", GlobalApi);