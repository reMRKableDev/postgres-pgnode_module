# postgres-pgnode_module

A short introduction to using the pg module on nodejs.

## Getting Started

Sample database operations ran from a node application.
Remember to change the Pool information in the 'config.js' file to match your system's db variables:

```
const pool = new Pool({
    database: YOUR DATABASE,
    host: YOUR HOST,
    user: YOUR USER,
    // also password if you have it setup.
});
```

### Prerequisites

What things you need to install the software and how to install them

```
node
postgresql
pg module
```

### How To:

To use the examples provided:

```
1. Clone repo.
2. Run 'npm install' on your local repo so as to get the required dependencies.
3. Choose desired folder + run node apps.

```

Remember that you can only run the "node app.js" when you are in a folder with an app.js.

OBS: At the top of some files you will see /_ eslint-disable no-console _/ line. Ignore this as I have been using eslint tool and needed to pass this so that the console methods didn't throw an error.

Have fun :)
