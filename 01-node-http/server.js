const http = require('node:http');

const server = http.createServer((request, response) => {
    console.log(request)
    response.writeHead(200)
    response.write('SErvidor HTTP em Node.js funcionando!')
    response.end()
})

const PORT = 3000

server.listen(PORT,()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}/`)
})
