const express = require('express');
const { ExpressPeerServer } = require('peer');
const path = require('path');
const http = require('http');

const app = express();
const server = http.createServer(app);

// فایل‌های اصلی وب‌سایتت که توی پوشه public هستن رو لود می‌کنه
app.use(express.static(path.join(__dirname, 'public')));

// تنظیمات PeerServer
const peerServer = ExpressPeerServer(server, {
    path: '/myapp'
});

app.use(peerServer);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
