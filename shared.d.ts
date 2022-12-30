export interface IApi {
    platform: () => NodeJS.Platform,
    arch: () => NodeJS.Architecture,
    versions: {
        node: () => string,
        electron: () => string,
        chrome: () => string
    }
}