const express = require('express');

const server = express();

server.get('/',(req, res)=>{
    res.send('Servidor Express funcionando !\nVoce esta na pagina inicial.')
})
server.get('/artigos',(req, res)=>{
    res.send('voce esta na pagina de artigos.')

})


const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`Servidor Express inciando em http://localhost:${PORT}/`);
} )