import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderNodes } from './contentfulDocConsts';
import { Box, Text, TitleSmall } from '../../styled';
import { ContentfulDocImage } from './contentfulDocStyledComponents';

function ContentfulDoc({ document }) {
    //TO-DO: Map Contentful document nodes to design system components
    const renderOptions = {
        renderNode: {
            //Asset node
            [renderNodes.embeddedAssetBlock]: (node) => {
                const { title, file } = node.data.target.fields;
                const { url: imageUrl } = file;

                return <ContentfulDocImage src={imageUrl} alt={title} />
            }
        }
    };
    const renderDocument = documentToReactComponents(document, renderOptions);

    return (
        <Box>
            {renderDocument}
        </Box>
    );
};

export default ContentfulDoc;
