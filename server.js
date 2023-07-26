const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

router.get('/',function(req, res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/lib', express.static(path.join(__dirname, 'lib')))
app.use(express.static(__dirname));
app.listen(process.env.port || 6789);

console.log('Running at Port 6789');
