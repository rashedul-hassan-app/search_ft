var express = require('express');
var fs = require('fs');
const searchlib = require('../libs/search_func');
var router = express.Router();
const path = require('path');
var data_chunk ;
var location = '../dummy_data.txt';





/* GET search listing. */
router.get('/', function(req, res, next) {

    // const call_search_api = searchlib('query');
    // console.log(call_search_api);
    
    var pagenumber;
    
    if (req.query.page_num == undefined)
        pagenumber = 1;
    else
        pagenumber = req.query.page_num;  

    res.render('search', {title: "RandomTitle", stuff:"Some stuff", search_item: req.query.find, page_num: pagenumber });
    
});

module.exports = router;
