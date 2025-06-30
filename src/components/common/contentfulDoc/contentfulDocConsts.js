const httpPrefix = 'http';

const httpsUrlPrefix = 'https:';

const acceptedImageTypes = {
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    webp: 'image/webp'
};

const downloadableFileTypes = {
    pdf: 'application/pdf',
    msword: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    zip: 'application/zip'
};

const imageUrlWarning = 'Image URL is not defined for node:';

const imageTitleWarning = 'Image title is not defined for node:';

const fileUrlWarning = 'File URL is not defined for node:';

const fileTitleWarning = 'File title is not defined for node:';

const unsupportedFileTypeWarning = 'Unsupported file type:';

const hyperlinkUriWarning = 'Hyperlink URI is not defined for node:';

const defaultFileName = 'File';

const buttonDownloadText = 'Download';

export {
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
};