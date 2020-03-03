var express = require('express');
var router = express.Router();
const rp = require('request-promise');

//  Storing our API calls    
let cache = {
    item:"",
    result:""
};


/* GET search listing. */
router.get('/', async function(req, res, next) {
    var params = {
       
        method: 'POST',
        uri: `http://api.ft.com/content/search/v1?apiKey=${process.env.API_KEY}`,
        body: JSON.stringify({
            "queryString":req.query.find,
            "resultContext":{"aspects":["title"]}
                            })
    };

    // For pagination, if page number not defined, set pagenumber to default 1
    var pagenumber;
    if (req.query.page_num == undefined)
        pagenumber = 1;
    else
        pagenumber = req.query.page_num;  


    // Caching the API Calls, if query not searched already, request a new search
    if (req.query.find === cache.item)
    {
        console.log('Cache hit');
        res.render('search', 
            {
                apidata: JSON.parse(cache.result), 
                page_num: pagenumber, 
                search_item: req.query.find
            });  
    }
    else
    {
        console.log(' === Cache MISS === Fetching new data');
        try
        {
            await rp(params).then(function(result){
                cache.item = req.query.find;
                cache.result = result;
                
                res.render('search', {apidata: JSON.parse(result), page_num: pagenumber, search_item: req.query.find})})
                .catch('Error occured trying to Fetch new information');
        }
        catch(e)
        {
            console.log('Error', e);
            res.render('search', {apidata: "ERROR", page_num: pagenumber, search_item: "ERROR"});
        }
       
        
    }
        

    // rp(params).then(function(result){
    //     res.render('search', {apidata: JSON.parse(result), page_num: pagenumber, search_item: req.query.find})});
   
    
});

module.exports = router;
