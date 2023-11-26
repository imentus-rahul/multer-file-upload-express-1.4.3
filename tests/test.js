const axios = require('axios');
const FormData = require('form-data');
const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

describe('Upload Endpoint', () => {
  it('should upload package.json to uploads folder', async () => {
    const filePath = path.resolve(__dirname, '../package.json'); // replace with your file path
    console.log("🚀 ~ file: test.test.js:10 ~ it ~ __dirname:", __dirname);
    console.log("🚀 ~ file: test.test.js:10 ~ it ~ filePath:", filePath);
    
    // // doesnt work: formData.append('myFile', file);
    // const file = fs.readFileSync('package.json');
    // console.log("🚀 ~ file: test.test.js:8 ~ it ~ file:", file);

    const fileStream = fs.createReadStream(filePath);
    // console.log("🚀 ~ file: test.test.js:16 ~ it ~ fileStream:", fileStream);
    
    const formData = new FormData();
    formData.append('some_key', "some_value");
    formData.append('myFile', fileStream);

    const response = await axios.post('http://127.0.0.1:3000/upload', formData 
    // {
    //   headers: formData.getHeaders(),
    // }
    );

    // expect(response.status).equal(200);
    console.log("🚀 ~ file: test.test.js:18 ~ it ~ response.status:", response.status);
    // expect(response.data).to.deep.equal({ success: true });
    console.log("🚀 ~ file: test.test.js:20 ~ it ~ response.data:", response.data);
  });
});