# Kumba-internship-assignment
1. Clone this repository
2. Run npm install to install all the dependencies
3. I have used local MongoDB running on port 27017. Change the "mongoURI" variable in index.js(line no. 11) according to your preference.
4. Run node index.js to run the express server.
The API endpoints are as follows:

1. Create User profile: /create, method: GET
2. Update User profile: /user/:_id, method: PATCH
3. Get list of all profiles: /users, method: GET
4. Get a specific user profile: /user/:_id, method: GET
5. Delete an existing profile: /user/:_id, method: DELETE
6. Create a copy of user profile: /user/:_id, method: COPY