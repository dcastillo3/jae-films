import { createContext } from "react";

const VideoContext = createContext();

const buildCustomTheme = theme => {
    const customTheme = {
        ...theme
    };

    return customTheme;
};

export {
    VideoContext,
    buildCustomTheme
};