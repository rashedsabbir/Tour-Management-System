# Tour-Management-System
#### Live Link: https://tour-management-system-phi.vercel.app

I have built an API for a tour management system for this assignment. In this system, I had provided several endpoints to the client. The endpoints are:

### GET /tours
Get all the tours
The client can select some specific fields for getting the information he needs as query. 
Example: /tours?fields=name,image
Must be paginated.
(BONUS) The client can send a field (e.g. price) as query to sort the data with it.
Example: /tours?sort=price
### POST /tours
Add a tour
Must have a schema and the body should be validated through it.
### GET /tours/:id
Get a tour details by id
Send all the information of the tour
Increase the view count by 1 for this tour every time a user hits this endpoint.
### PATCH /tour/:id
Update a tour
(BONUS) Body should be validated
### GET /tour/trending
Get top 3 viewed tour
### GET /tour/cheapest
Get top 3 cheapest tours
