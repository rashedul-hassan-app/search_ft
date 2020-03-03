const rp = require('request-promise');

async function check_cache(previous_item)
{

    let cache = {
        item:"stuffs",
        result:""
    };
    
    var params = {
           
        method: 'GET',
        uri: `https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json`,
    };
    
    
    var item_to_search = previous_item;
    
    if (item_to_search === cache.item)
    {
        console.log('Cache hit');
        console.log(cache.result);
    }
    else
    {
        console.log('==== OLD CACHE ====');
        console.log(cache);
    
        console.log('Cache MISS');
        await rp(params).then(function(result) {
            console.log(result);
            
            cache.item = item_to_search;
            cache.result = result;
        }).catch('Error');
    
        console.log('NEW CACHE');
        console.log(cache);
        
    }
}

check_cache('stuffs');