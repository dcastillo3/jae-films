import styled from "styled-components";
import { Box } from "../styled";

const VimeoPlayerContainer = styled(Box)`
    width: 100vw; /* Full viewport width */
    height: 56.25vw; /* Maintain 16:9 aspect ratio */
    max-width: 100%; /* Avoid overflow */
    max-height: 100vh; /* Fit within the viewport height */
    overflow: hidden;
    position: relative;
`;

const VimeoPlayerVideoTitleContainer = styled(Box)`
    width: 100%;
`;

export {
    VimeoPlayerContainer,
    VimeoPlayerVideoTitleContainer
};