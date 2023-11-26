## README for using Multer

- Multer is a middleware for handling multipart/form-data, which is primarily used for file uploads.
  This README provides instructions on how to use Multer in your project.

### Version Downgrade to 1.4.3

We have downgraded to version 1.4.3 of Multer due to compatibility issues with other dependencies in our project.
This version has been tested and proven to work well with our current setup.

### Setup Instructions

1. Install Multer by running the following command:
   `npm install multer@1.4.3`

2. Require Multer in your project:
   const multer = require('multer');

3. Configure Multer with your desired options:
   const upload = multer({ dest: 'uploads/' });

## Run Instructions

1. Start your server by running the following command:
   `node server.js`

2. Test server using node client: `npm run test`

3. Endpoints can also be invoked by rest clients (`restclient.rest` is available!)
