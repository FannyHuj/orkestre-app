let express = require('express');
let app = express();   

app.use(express());

app.use(express.static(__dirname + '/dist/orkestre-app/browser/'));

app.get('/*'), (req, res) => {
    res.sendFile(__dirname + '/dist/orkestre-app/browser/index.html');
} 

// Handling non matching request from the client
app.use((req, res, next) => {
    res.status(404).send(
        "<h1>404, Oups page introuvable</h1><button>Retour à l'accueil</button>")
})

// all routes lead to to index.html
// const router = express.Router();
// router.get('*'), (req, res) => {
//   res.sendFile(__dirname + '/dist/orkestre-app/browser/index.html');
// };
// this.express.use('*', router);


app.listen(process.env.PORT || 8080);