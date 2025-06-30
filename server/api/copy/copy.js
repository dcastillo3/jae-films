const router = require('express').Router();
const bodyParser = require('body-parser');
const { formatResponseData } = require('../../utils/utils');
const contentfulClient = require('../../contentful');


//Post requests below this line will have body parsed via json method
router.use(bodyParser.json());

//Enable if url encoding needs parsing
// router.use(bodyParser.urlencoded({ extended: true }));

// Get all entries from Contentful
router.get('/', async (req, res) => {
    try {
        const content = await contentfulClient.getEntries();
        
        // If no content is found, return a 404 error
        if (!content || !content.items || content.items.length === 0) {
            const responseData = formatResponseData(null, new Error('No content found'));
            return res.status(404).send(responseData);
        };

        // Format the response data
        const responseData = formatResponseData(content.items, null);

        res.status(200).send(responseData);
    } catch (err) {
        const responseData = formatResponseData(null, err);

        res.status(500).send(responseData);

        console.error(err);
    };
}
);

module.exports = router;