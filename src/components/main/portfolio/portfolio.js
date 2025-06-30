import React, { useContext, useState } from 'react';
import { VideoContext } from '../../../context';
import { Modal, modalProps, VimeoPlayer } from '../../common';
import { Box, Grid, cardProps } from '../../styled';
import { useMediaQuery } from '../../../hooks';
import { PortfolioContainer, VideoPosterImage } from './portfolioStyledComponents';

function Portfolio() {
    const [showModal, setShowModal] = useState(false);
    const [activeVideoName, setActiveVideoName] = useState(null);
    const [activeVideo, setActiveVideo] = useState(null);
    const { videos } = useContext(VideoContext);
    const { isDesktop } = useMediaQuery();
    const portfolioContainerPadding = isDesktop ? [5, 8] : [2];
    const videoPostersMargin = isDesktop ? [0, 8] : null;
    const videoPostersItemSize = isDesktop ? 87 : 87;

    const updateActiveVideo = (name, videoId) => {
        setActiveVideoName(name);
        setActiveVideo(videoId);

        toggleModal();
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const renderVideoPosters = videos.map(({name, videoPoster, videoId}, idx) => (
        <Box key={idx} onClick={() => updateActiveVideo(name, videoId)}>
            <VideoPosterImage src={videoPoster} alt={name} />
        </Box>
    ));

    return (
        <PortfolioContainer $variant={cardProps.variant.background} $p={portfolioContainerPadding}>
            <Modal 
                showModal={showModal} 
                variant={modalProps.variant.background} 
                modalComponent={() => <VimeoPlayer videoTitle={activeVideoName} videoId={activeVideo} />} 
                handleToggleModal={toggleModal} 
                center 
            />

            <Grid
                $m={videoPostersMargin} 
                $center={true} 
                $itemSize={videoPostersItemSize}
            >
                {renderVideoPosters}
            </Grid>

        </PortfolioContainer>
    );
};

export default Portfolio;