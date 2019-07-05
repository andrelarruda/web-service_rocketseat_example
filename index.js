const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
//require-dir - Biblioteca que faz o require em todos os arquivos automaticamente
const requireDir = require('require-dir')
const PORT = 3001

// Iniciando o App
const app = express()
// se quiser restringir os domínios que terão acesso à api, basta passá-los como parâmetro do cors
app.use(cors());

// Iniciando o DB            porta do mongo/nome schema
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
//requireDir importa tudo o que tem dentro do dir models (util se houvessem vários models)
requireDir('./src/models');

app.use(express.json());

//rotas
app.use('/api', require('./src/routes'))

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`)
});