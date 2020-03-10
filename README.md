# Project Search_FT
 
This project builds a server-rendered site that displays an article heading from The Financial Times and can be visited via https://shielded-brook-07382.herokuapp.com/


## Features :

The site is responsive, and is accessible on Heroku.

Site provides Pagination. Currently search results are displayed as a set of 10. If the specific search query has more than 10 results, new pages will be populated. A maximum of 100 results are currently supported.

If a search query has less than 100 results, the returned results will be shown in available pages. 
Example: Search query 'Bangla' returns less 3 pages only.

This page is built with Javascript and NodeJS

It does not rely on any client site architecture like Angular JS or does not use any JQuery.

Currently uses Orgiami components as used in the FT page. Nothing fancy has been added at all.

The app can be progressively advanced. It is such an exciting project and there is so much to build on. As an example, next up would be to allow sorting feature.

It is deployed on Heroku.

Has a similar look to FT sites.

App performs well over 3G connections. App makes use of Service Workers to make assets available offline and uses caching on API calls. As a result, offline support for already searched queries are available. Multiple search results can be visited without any issues.


## Additional Comments
 Testing is done via C# NUnit. The whole process has been quite an interesting and a learning curve. There is so much more that can be developed on top of it, however to keep within timeframe, this version has been submitted.
 
 
 ## Dependencies
 This app has been built with Express for scripting. And EJS has been used for HTML template generations. The project is built with a developer's API key, which has to be declared as an environmental variable, should anyone wish to run this project on a local machine.
 
 `$ root: export API_KEY='xxxxxxxxxxxxxxxxxxxxxxxxxxx'`
 
 The program makes use of the environment variable to execute the search results
 
 ## 
