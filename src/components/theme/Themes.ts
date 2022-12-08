export type ThemeType = {
    name: string;
    colors?: {
        [property: `--${string}`]: string;
    },
    other?: {
        [property: `--${string}`]: string | number;
    }
}


export enum Theme {
    Light = "light",
    LightContrast = "lightContrast",
    Dark = "dark",
    DarkContrast = "darkContrast",
    Amoled = "amoled",

    Ocean = "ocean",
    Sapphire = "sapphire"
}

export const getDefaultTheme = (theme: Theme) => {
    return DefaultThemes[theme];
}





const rgb = (red: number, green: number, blue: number, alpha?: number): string => `rgb${alpha ? "a" : ""}(${red}, ${green}, ${blue}${alpha ? `, ${alpha}` : ""})`;
const hex = (color: number) => `#${color.toString(16)}`;

export const DefaultThemes = {
    light: {
        name: "theme.light",
        colors: {
            "--background": rgb(255, 255, 255),
            "--text": rgb(0, 0, 0)
        }
    },
    lightContrast: {
        name: "theme.light.contrast",
        colors: {
            "--background": rgb(255, 255, 255),
            "--text": rgb(0, 0, 0)
        }
    },
    dark: {
        name: "theme.dark",
        colors: {
            "--background": rgb(28, 28, 28),
            "--text": rgb(255, 255, 255)
        }
    },
    darkContrast: {
        name: "theme.dark.contrast",
        colors: {
            "--background": rgb(255, 255, 255)
        }
    },
    amoled: {
        name: "theme.amoled",
        colors: {
            "--background": rgb(255, 255, 255)
        }
    },
    ocean: {
        name: "theme.ocean",
        colors: {
            "--background": rgb(255, 255, 255)
        }
    },
    sapphire: {
        name: "theme.sapphire",
        colors: {
            "--background": rgb(255, 255, 255)
        }
    }
} as {
    [name in typeof Theme[keyof typeof Theme]]: ThemeType;
}