import React from 'react';
import { useCopy, useVideos } from '../hooks';
import { CopyContext, VideoContext } from './';
import { theme } from '../theme';
import { ThemeProvider } from 'styled-components';
import { buildCustomTheme } from './contextUtils';

function AppContext({ children }) {
    const copy = useCopy();
    const videos = useVideos();
    const customTheme = buildCustomTheme(theme);

    return (
        <ThemeProvider theme={customTheme}>
            <CopyContext.Provider value={copy}>
                <VideoContext.Provider value={videos}>
                    {children}
                </VideoContext.Provider>
            </CopyContext.Provider>
        </ThemeProvider>
    );
};

export default AppContext;