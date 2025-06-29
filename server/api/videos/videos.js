const router = require('express').Router();
const bodyParser = require('body-parser');
const { formatResponseData } = require('../../utils/utils');
const vimeoClient = require('../../vimeo/vimeo');


//Post requests below this line will have body parsed via json method
router.use(bodyParser.json());

//Enable if url encoding needs parsing
// router.use(bodyParser.urlencoded({ extended: true }));

// Get videos from Vimeo
router.get('/', (req, res) => {
    try {
        const videoParams = {
            method: 'GET',
            path: process.env.VIMEO_VIDEOS_PATH
        };
        const videoCallback = (err, { data: videosData }, {statusCode}, {headers}) => {
            const formattedVideosData = videosData.map(videoData => {
                const {
                    name,
                    uri,
                    pictures: { sizes }
                } = videoData;
                const videoId = uri.split('/')[2];
                const videoPoster = sizes[3].link_with_play_button;
                const newVideosData = {
                    name,
                    videoId,
                    videoPoster
                };

                return newVideosData;
            });
            const responseData = formatResponseData(formattedVideosData, null);
    
            res.send(responseData);
        };
        
        vimeoClient.request(videoParams, videoCallback);
    } catch (err) {
        const responseData = formatResponseData(null, err);

        res.status(500).send(responseData);

        console.error(err);
    };
});

module.exports = router;