import { createContext } from "react";

const CopyContext = createContext();
const VideoContext = createContext();

const buildCustomTheme = theme => {
    const customTheme = {
        ...theme
    };

    return customTheme;
};

export {
    CopyContext,
    VideoContext,
    buildCustomTheme
};