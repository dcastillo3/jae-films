import React from "react";
import { 
    ContentfulDocImage,
    ContentfulItalic, 
    ContentfulUnderline 
} from "./contentfulDocStyledComponents";
import {
    Anchor,
    Box,
    Card,
    Button,
    Text,
    TextSmall,
    Title,
    TitleMedium,
    TitleSmall,
    SubTitle,
    cardProps
} from '../../styled';
import { 
    httpPrefix, 
    httpsUrlPrefix, 
    acceptedImageTypes,
    downloadableFileTypes,
    imageUrlWarning,
    imageTitleWarning,
    fileUrlWarning,
    fileTitleWarning,
    defaultFileName,
    buttonDownloadText,
    unsupportedFileTypeWarning,
    hyperlinkUriWarning
} from "./contentfulDocConsts";
import { anchorBlank, anchorNoReferrer } from "../../../utils/consts";

const formatContentfulUrl = (url) => url.startsWith(httpPrefix) ? url : `${httpsUrlPrefix}${url}`;

const buildContentfulBoldComponent = text => <SubTitle>{text}</SubTitle>

const buildContentfulItalicComponent = text => <ContentfulItalic>{text}</ContentfulItalic>

const buildContentfulUnderlineComponent = text => <ContentfulUnderline>{text}</ContentfulUnderline>

const buildContentfulCodeComponent = text => (
    <Card $variant={cardProps.variant.backgroundLight} $p={[2]}>
        <Text>
            {text}
        </Text>
    </Card>
);

const buildContentfulParagraphComponent = children => <Text $p={[2, 0]}>{children}</Text>

const buildContentfulTitleComponent = children => <Title>{children}</Title>

const buildContentfulTitleMediumComponent = children => <TitleMedium>{children}</TitleMedium>

const buildContentfulTitleSmallComponent = children => <TitleSmall>{children}</TitleSmall>

const buildContentfulSubtitleComponent = children => <SubTitle>{children}</SubTitle>

const buildContentfulTextSmallComponent = children => <TextSmall>{children}</TextSmall>;

// The current design system does not have a Heading 4 component. Using Text as a placeholder.
const buildContentfulHeading4Component = children => <Text>{children}</Text>;

const buildContentfulQuoteComponent = children => (
    <Card $variant={cardProps.variant.secondary}>
        <Text>{children}</Text>
    </Card>
);

const buildContentfulEmbeddedAssetComponent = (node) => {
    const { file, title } = node?.data?.target?.fields;
    
    //Decide the file type
    switch (file?.contentType) {
        // Handle image files
        case acceptedImageTypes.jpeg:
        case acceptedImageTypes.png:
        case acceptedImageTypes.gif:
        case acceptedImageTypes.webp: {
            // Check if the image URL is defined
            if (!file?.url) {
                console.warn(imageUrlWarning, node);
        
                return null;
            };
            
            // Check if the title is defined
            if (!title) {
                console.warn(imageTitleWarning, node);
            };
            
            const formattedImageUrl = formatContentfulUrl(file.url);

            // Note: The Image component should handle the loading and error states internally
            return <ContentfulDocImage src={formattedImageUrl} alt={title} />;
        };
            // Handle downloadable files
        case downloadableFileTypes.pdf:
        case downloadableFileTypes.msword:
        case downloadableFileTypes.docx:
        case downloadableFileTypes.pptx:
        case downloadableFileTypes.xlsx:
        case downloadableFileTypes.zip: {
            // Check if the file URL is defined
            if (!file?.url) {
                console.warn(fileUrlWarning, node);
                return null;
            };

            // Check if the title is defined
            if (!title) {
                console.warn(fileTitleWarning, node);
            };

            const formattedFileUrl = formatContentfulUrl(file.url);
            const fileName = title || defaultFileName;

            return (
                <Box $p={[2, 0]}>
                    <Button>
                        <Anchor href={formattedFileUrl} target={anchorBlank} rel={anchorNoReferrer}>
                            {buttonDownloadText} {fileName}
                        </Anchor>
                    </Button>
                </Box>
            );
        };
        default: {
            console.warn(unsupportedFileTypeWarning, file?.contentType);
            
            return null;
        };
    };
};

const buildContentfulHyperlinkComponent = (node, children) => {
    const { uri } = node?.data;
    
    // Check if the URI is defined
    if (!uri) {
        console.warn(hyperlinkUriWarning, node);
        return null;
    };

    return (
        <Anchor href={uri} target={anchorBlank} rel={anchorNoReferrer}>
            {children}
        </Anchor>
    );
};

export {
    buildContentfulBoldComponent,
    buildContentfulItalicComponent,
    buildContentfulUnderlineComponent,
    buildContentfulCodeComponent,
    buildContentfulParagraphComponent,
    buildContentfulTitleComponent,
    buildContentfulTitleMediumComponent,
    buildContentfulTitleSmallComponent,
    buildContentfulSubtitleComponent,
    buildContentfulHeading4Component,
    buildContentfulTextSmallComponent,
    buildContentfulQuoteComponent,
    buildContentfulEmbeddedAssetComponent,
    buildContentfulHyperlinkComponent
};