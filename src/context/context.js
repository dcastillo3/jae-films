import React from 'react';
import { useVideos } from '../hooks';
import { VideoContext } from './';
import { theme } from '../theme';
import { ThemeProvider } from 'styled-components';
import { buildCustomTheme } from './contextUtils';

function AppContext({children}) {
    const videos = useVideos();
    const customTheme = buildCustomTheme(theme);
    
    return (
        <ThemeProvider theme={customTheme}>
            <VideoContext.Provider value={videos}>
                {children}
            </VideoContext.Provider>
        </ThemeProvider>
    );
};

export default AppContext;