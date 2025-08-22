let express = require('express');
let app = express();   

app.use(express());

app.use(express.static(__dirname + '/dist/orkestre-app/browser/'));

app.get('/*'), (req, res) => {
    res.sendFile(__dirname + '/dist/orkestre-app/browser/index.html');
} 

app.use((req, res, next) => {
    res.status(404).send(
        "<h1>404, Oups page introuvable</h1> <a href = '/'>Retour à l'accueil</a>")
})

app.listen(process.env.PORT || 8080);