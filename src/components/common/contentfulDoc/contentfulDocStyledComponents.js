import styled from 'styled-components';
import { Image, SemanticSpan } from '../../styled';

const ContentfulDocImage = styled(Image)`
    max-width: 100%;
    height: auto;
`;

const ContentfulUnderline = styled(SemanticSpan)`
    text-decoration: underline;
`;

const ContentfulItalic = styled(SemanticSpan)`
    font-style: italic;
`;

export {
    ContentfulDocImage,
    ContentfulUnderline,
    ContentfulItalic
};