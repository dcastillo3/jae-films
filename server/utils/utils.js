const formatResponseData = (data, err) => {
    let responseData = {};

    //TO-DO: Populate err to send to front end
    if(err) {
        responseData = {
            err: err.message,
            success: false
        };
    } else {
        responseData = {
            data,
            success: true
        };
    };

    return responseData;
};

module.exports = {
    formatResponseData
};