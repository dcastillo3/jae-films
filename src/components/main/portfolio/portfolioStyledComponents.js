import styled from "styled-components";
import { Card, Image } from "../../styled";

const PortfolioContainer = styled(Card)`
`;

const VideoPosterImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: 0.2s cubic-bezier(0.51, -0.12, 0.03, 1.5);
`;

export {
    PortfolioContainer,
    VideoPosterImage
};