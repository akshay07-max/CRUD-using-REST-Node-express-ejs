// REST: Representational State transfer
// rest is an architectural style that defines a set of constraints to be used for creating a web service.
// RestFul API,s applies concepts of REST.
// REST are rule(not package or anything).
// Mostly used to perform CRUD operations.

// GET : Retrieve Resources // Used to read (R)
// POST : To Submit new Data to server.
// PUT :  Update Existing Data. (To update all data)
// PATCH : Update existing data partially. (T update particular data).
// DELETE : To remove data.

// In this part, we will create a Quara app: on which we can perform CRUD operation

// API structure
// GET      /posts      : To get data for all post.     (Index Route)
// POST     /posts      : to add new data(post).        (Create)
// GET      /posts/:id  : To get one post (using id).   (View Route)
// PATCH    /posts/:id  : To update specific post.      (Update Route)
// DELETE   /posts/:id  : To delete specific post.      (Destroy ROute)