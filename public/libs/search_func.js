const http = require('http');

module.exports = function(searchString)
{
    var data  = [];
    console.log('MY API KEY');
    
    console.log(process.env.API_KEY);
    var url = `http://api.ft.com/content/search/v1?apiKey=${process.env.API_KEY}`;
        const options =
        {
            method: 'POST',
            headers:
            {
                "content-type": "application/json",
            },
        };

    var api_request = http.request(url, options, (res)=>
    {
        res.setEncoding('utf-8');
        console.log('inside http request');
        console.log(res);
    
        console.log(`Status: ${res.statusCode}`);
        console.log(`Headers: ${JSON.stringify(res.headers)}`);
        console.log(`Other ${res.body}`);

        res.on('data', (res)=>{
            data.push(res);
            console.log('====== Starting data chunk =====');
            console.log(res);
        });

        res.on('end', (res)=>{
            data.push(res);
            console.log('====== END data chunk =====');
        });

        res.on('error', (error)=>
        {
            console.log(error);
        });

        console.log('====== DATA =====')
        console.log(data);
    });

    const postData = JSON.stringify({"queryString" : searchString});

    api_request.write(postData);
    api_request.end();

    return data;
}