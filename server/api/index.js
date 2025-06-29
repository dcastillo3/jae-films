const router = require('express').Router();

//Videos route
router.use('/videos', require('./videos/videos'));

//Copy route
router.use('/copy', require('./copy/copy'));

router.use((req, res, next) => {
    const error = new Error('Not Found');
    
    error.status = 404;
    next(error);
});

module.exports = router;