const ENV = require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

const apiKey = process.env.BUNGIE_API_KEY;


//test this funciton using item ID for Gjally => 1274330687
const getSpecificItemInfo = (req, res, apiKey, itemId) => {

  const options = {
    headers: {
      'X-API-Key': apiKey,
    },
  };
  const URL =`https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/${itemId}`;
  axios.get(URL, options)
    .then((response) => {
      switch(response.data.ErrorCode){
        case 1:
          const specificItemInfo = response.data.Response.data;
          return res.status(200).json(specificItemInfo);          
          break;
        case 7:
          //no itemID given
          res.status(400).json({"bungieErrorCode": response.data.ErrorCode, "errorStatus": response.data.ErrorStatus ,"errorMessage": `Item ID is missing from request - Bungie Error :${response.data.Message}`})
        case 21:
          //itemID is invalid
          res.status(404).json({"bungieErrorCode": response.data.ErrorCode, "errorStatus": response.data.ErrorStatus ,"errorMessage": `Item ID appears invalid - Bungie Error :${response.data.Message}`, })
        default:
          console.log(`No switch case written to handle Error Code ${response.data.ErrorCode}`);
          console.log(response.data);
          res.status(400).json({"bungieErrorCode": response.data.ErrorCode, "errorMessage": `Unhandled error in request: ${response.data.Message}`, "errorResponseData": response.data});
      }
        
    })
    .catch((err) => console.error(err));
};

module.exports = (db) => {

  router.get('/getSpecificItemsInfo', async (req, res) => {
    const { itemId } = req.query;
    console.log(req.query);
    if(!itemId) {
      return res.status(400).json({error: "No item id provided in request."})
    }

    getSpecificItemInfo(req,res, apiKey, itemId);
  });



  return router;
}