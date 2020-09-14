const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080;
const app = express();
// __dirnameは、スクリプトが実行されている現在のディレクトリです
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get( '/ ping', (req, res) => res.send('OK'));
app.get('/ *', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);