const express = require('express');
const router = express.Router();

/* Response Handler ---------------------------*/
const responseHandler = require('../common/responseHandler.js');

/* Db Models ---------------------------*/
const AuctionModel = require('./AuctionModel.js');

router.get('/current', (req,res) => {

    const RH = responseHandler({
        title: 'Current Auction',
        payloadKey: 'currentAuction',
        routerResp: res,
    })

    AuctionModel
        .findOne({ status: 'current' })
        .then(RH.dbResp)
        .catch(RH.dbError);
});

module.exports = router;