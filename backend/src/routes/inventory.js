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
          return res.json(specificItemInfo);          
          break;
        default:
          console.log(`No switch case written to handle Error Code ${response.data.ErrorCode}`);
          console.log(response.data);
      }
        
    })
    .catch((err) => console.error(err));
};

module.exports = (db) => {

  router.get('/getSpecificItemsInfo', async (req, res) => {
    // curl -X GET http://localhost:8001/api/inventory/getSpecificItemsInfo -d "itemId=1274330687" to test with gjally ID
    const { itemId } = req.body;

    if(!itemId) {
      return res.status(400).json({error: "No item id provided in request."})
    }

    getSpecificItemInfo(req,res, apiKey, itemId);
  });



  return router;
}