const express = require('express');
const Direct_sales_executives = require('../Model/dse');
const DirectSalesController = require('../Controller/DirectSales');
const multer = require('multer');



const storage = multer.diskStorage({
    destination:(req,file,cb)=> {
      cb(null,"./Upload")
    },
    filename: (req, file,cb)=> {
      cb(null, file.originalname)
    }
  })
const upload = multer({ storage: storage });
const router = express.Router();

router.post('/v1/dse',upload.single("dselist"), DirectSalesController.Upload).get('/v1/dse', DirectSalesController.DseList)

module.exports = router