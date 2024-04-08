const path = require('path');

// MJS add one more .. at beginning to get this to point to correct path 
// Currently pts to server/client/dist/index.html, but something elese must be wrong. 
// As this file seems to match the mp. The path.join certainly does. 
// Update 4.8.24: Since this file, htmlRoutes.js is in server/routes doing ../../client seems correct, 
// but both Act14 and the MP use ../client.  ARGHHH. 
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'))
  );
