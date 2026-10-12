javascript
const express = require('express');
const { PeerServer } = require('peer');

const app = express();
app.use(express.static('public'));

const port = process.env.PORT || 3000;

const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});

PeerServer({
  server,
  path: '/myapp'
});
