var express = require('express');
var fs = require('fs');
const searchlib = require('../libs/search_func');
var router = express.Router();
const path = require('path');
var data_chunk ;
var location = '../dummy_data.txt';

function  readfile()
{
    
    console.log(location);
    
    fs.readFile(location, 'utf8', function(err, contents) {
        data_chunk+= contents;
        console.log(contents.toString());
        
        // data_chunk = contents;
    });
} 


// var call_search_api = searchlib('query');
// console.log(call_search_api);

/* GET search listing. */
router.get('/', function(req, res, next) {
    // console.log('File contents');
    
    // const loadData = (location) => {
    //     try {
    //       return fs.readFileSync(location, 'utf8')
    //     } catch (err) {
    //       console.error(err)
    //       return false
    //     }
    //   }

    // var all_data = JSON.parse(loadData(location));

    // console.log(all_data);
    var pagenumber;
    
    if (req.query.page_num == undefined)
        pagenumber = 1;
    else
        pagenumber = req.query.page_num;  

    res.render('search', {title: "RandomTitle", stuff:"Some stuff", search_item: req.query.find, page_num: pagenumber });
    
});

module.exports = router;
