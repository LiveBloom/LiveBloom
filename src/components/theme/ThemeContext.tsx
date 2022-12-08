import { createContext, CSSProperties, useContext, useState } from "react"
import { ChildProps } from "../../types/PropTypes";
import { getDefaultTheme, Theme } from "./Themes";

const ThemeContext = createContext<Theme>(Theme.Light);
const ThemeChangeContext = createContext<(theme: Theme) => void>(null!);

export const useTheme = () => useContext(ThemeContext);
export const useChangeTheme = () => useContext(ThemeChangeContext);

export const ThemeProvider = ({ children }: ChildProps) => {
    const [theme, setTheme] = useState<Theme>(Theme.Dark);

    const changeTheme = (theme: Theme): void => {
        setTheme(theme);
    }

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeChangeContext.Provider value={changeTheme}>
                <div style={getDefaultTheme(theme).colors as CSSProperties}>
                    {children}
                </div>
            </ThemeChangeContext.Provider>
        </ThemeContext.Provider>
    )
}
