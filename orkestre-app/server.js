let express = require('express');
let app = express();   

app.use(express());

app.use(express.static(__dirname + '/dist/orkestre-app/browser/'));

app.get('/*'), (req, res) => {
    res.sendFile(__dirname + '/dist/orkestre-app/browser/index.html');
} 

app.listen(process.env.PORT || 8080);