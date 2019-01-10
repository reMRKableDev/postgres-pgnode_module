# postgres-pgnode_module
A short introduction to using the pg module on nodejs.

Sample database operations ran from a node application.
Remember to change the Client information for each 'app.js' file to match your system's db variables:

const client = new Client({
    database: <YOUR DATABASE>,
    host: <YOUR HOST>,
    user: <YOUR OWNER/USER> 
    // also password if you have it setup.
});

To use the examples provided:
1. Clone repo.
2. Run 'npm install' on your local repo so as to get the required dependencies.
3. Choose desired folder + run node apps.


Have fun :)
