const router = require('express').Router();

//Videos route
router.use('/videos', require('./videos/videos'));

router.use((req, res, next) => {
    const error = new Error('Not Found');
    
    error.status = 404;
    next(error);
});

module.exports = router;