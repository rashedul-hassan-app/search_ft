# Project Search_FT
 
This project builds a server-rendered site that displays an article heading from The Financial Times and can be visited via https://shielded-brook-07382.herokuapp.com/


# Features

The site is responsive, and is accessible on Heroku.

Site provides Pagination. Currently search results are displayed as a set of 10. If the specific search query has more than 10 results, new pages will be populated. A maximum of 100 results are currently supported.

If a search query has less than 100 results, the returned results will be shown in available pages. 
Example: Search query 'Bangla' returns less 3 pages only.

This page is built with Javascript and NodeJS

It does not rely on any client site architecture like Angular JS or does not use any JQuery.

Currently uses Orgiami components as used in the FT page. 

The app can be progressively advanced. It is such an exciting project and there is so much to build on. As an example, next up would be to allow sorting feature.

It is deployed on Heroku.

Has a similar look to FT sites.

App performs well over 3G connections. App makes use of Service Workers to make assets available offline and uses caching on API calls. As a result, offline support for already searched queries are available. Multiple search results can be visited without any issues.
