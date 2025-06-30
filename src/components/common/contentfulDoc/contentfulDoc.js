import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
    BLOCKS,
    INLINES,
    MARKS
} from '@contentful/rich-text-types';
import { 
    buildContentfulBoldComponent, 
    buildContentfulCodeComponent, 
    buildContentfulHeading4Component, 
    buildContentfulHyperlinkComponent, 
    buildContentfulEmbeddedAssetComponent, 
    buildContentfulItalicComponent, 
    buildContentfulParagraphComponent, 
    buildContentfulQuoteComponent, 
    buildContentfulSubtitleComponent, 
    buildContentfulTextSmallComponent, 
    buildContentfulTitleComponent, 
    buildContentfulTitleMediumComponent, 
    buildContentfulTitleSmallComponent, 
    buildContentfulUnderlineComponent 
} from './contentfulDocUtils';
import { Box } from '../../styled';

function ContentfulDoc({ document }) {
    const renderOptions = {
        renderMark: {
            [MARKS.BOLD]: text => buildContentfulBoldComponent(text),
            [MARKS.ITALIC]: text => buildContentfulItalicComponent(text),
            [MARKS.UNDERLINE]: text => buildContentfulUnderlineComponent(text),
            [MARKS.CODE]: text => buildContentfulCodeComponent(text),
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (_node, children) => buildContentfulParagraphComponent(children),
            [BLOCKS.HEADING_1]: (_node, children) => buildContentfulTitleComponent(children),
            [BLOCKS.HEADING_2]: (_node, children) => buildContentfulTitleMediumComponent(children),
            [BLOCKS.HEADING_3]: (_node, children) => buildContentfulTitleSmallComponent(children),
            [BLOCKS.HEADING_4]: (_node, children) => buildContentfulHeading4Component(children),
            [BLOCKS.HEADING_5]: (_node, children) => buildContentfulSubtitleComponent(children),
            [BLOCKS.HEADING_6]: (_node, children) => buildContentfulTextSmallComponent(children),
            [BLOCKS.QUOTE]: (_node, children) => buildContentfulQuoteComponent(children),
            //TO-DO: Add unordered list, ordered list, list item and table to the design system
            // [BLOCKS.UL_LIST]: (_node, children) => <ul>{children}</ul>,
            // [BLOCKS.OL_LIST]: (_node, children) => <ol>{children}</ol>,
            // [BLOCKS.LIST_ITEM]: (_node, children) => <li>{children}</li>,
            [BLOCKS.HR]: () => <hr />,
            [BLOCKS.EMBEDDED_ASSET]: (node) => buildContentfulEmbeddedAssetComponent(node),
            [INLINES.HYPERLINK]: (node, children) => buildContentfulHyperlinkComponent(node, children),
        },
    };
    const renderDocument = documentToReactComponents(document, renderOptions);

    return (
        <Box>
            {renderDocument}
        </Box>
    );
};

export default ContentfulDoc;
