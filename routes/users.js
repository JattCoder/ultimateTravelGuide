let express = require('express');
let Datastore = require('nedb');
const { response } = require('../app');
let router = express.Router();

const database = new Datastore('users.db')
database.loadDatabase()

router.get('/', (req, res) => {
  database.find({email:req.query.email},(err,data) => {
    res.json({
      Message: data.length > 0 ? 'Success' : 'Account Not Found from JS API',
      Error: data.length > 0 ? false : true,
      Info: data.length > 0 ? data[0] : {}
    })
  })
});

module.exports = router;
