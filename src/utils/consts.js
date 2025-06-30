const apiDirectory = '/api';

const apis = {
    copy: `${apiDirectory}/copy`,
    videos: `${apiDirectory}/videos`,
};

const initialStates = {
    copy: [],
    videos: [],
}

const anchorBlank = '_blank';

const anchorNoReferrer = 'noopener noreferrer';

export {
    apis,
    initialStates,
    anchorBlank,
    anchorNoReferrer
};