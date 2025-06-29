import React, { useEffect, useRef } from 'react';
import Vimeo from '@vimeo/player';
import { useMediaQuery } from '../../hooks';
import { Box, FlexBoxColumn, TextSmall } from '../styled';
import { VimeoPlayerVideoTitleContainer } from './vimeoPlayerStyledComponents';

function VimeoPlayer({ videoTitle, videoId }) {
    const playerRef = useRef(null);
    const playerId = `vimeo-player-${videoId}`;
    const { isMobile, isDesktop } = useMediaQuery();
    const vimeoPlayerPadding = isDesktop ? [5] : [0];
    const vimeoPlayerWidth = isMobile ? '' : 640;

    useEffect(() => {
        if (videoId) {
            const options = {
                id: videoId,
                width: vimeoPlayerWidth
            };

            playerRef.current = new Vimeo(playerId, options);
        };
    }, [videoId]);

    return (
        <FlexBoxColumn $p={vimeoPlayerPadding} $center={true}>
            <VimeoPlayerVideoTitleContainer>
                <Box $p={[2, 4]}>
                    <TextSmall $center={true} $truncate={true}>{videoTitle}</TextSmall>
                </Box>
            </VimeoPlayerVideoTitleContainer>

            <Box id={playerId}></Box>
        </FlexBoxColumn>
    );
}

export default VimeoPlayer;