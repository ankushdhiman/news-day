# news-day
A News Aggregation Platform

Prerequisite:
This application expects a simple rest API running on localhost:8080/v1.
API should provide follwing end points:
1. /board - for fetching all the available boards.
2. /board/{boardId}/news - for fetching all the news available under board with given boardId.
3. /news/{newsId} - with GET and DELETE methods for fetching news details for the given newsId and deleting it.
4. /news - with PUT and POST methods for crearion and updation of news.
5. /news/{newsId}/archive - for setting status of news given by {newsId} to archive.
6. /news/{newsId}/draft - for setting status of news given by {newsId} to draft.
7. /news/{newsId}/published - for setting status of news given by {newsId} to published.


Please follow below steps for setup:
1. Run "npm install" to install the application dependencies.
2. Run "npm run serve" to application on localhost:9000.
3. Run "npm run test" to execute the test cases

Application Description:
Application provides navigation to Home page and Board Page.
Hope pages is available to anonymous users, While Board has restricted access and requires login.
Users can also go to login page ny clicking on the login button.
Users can logout using Logout button.

Boards Page:
Boards Page contains cards list of all the available boards.
A logged in User can click on one of the boards and view all the news available for that particular board.
News are categorized in Drafts, Published and Archives Sections.
A button for creating a news under the current board is also provided on this page.

News Card:
Each news card shows the image, title, description and author of that news.
A button is provided to edit the current news in the card.
