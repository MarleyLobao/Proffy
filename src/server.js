//Servidor ------------------------------------
const express = require("express")
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

//configurar nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

server
//recebendo dados do req.body
.use(express.urlencoded({ extended: true }))
//configurar arquivos estáticos
.use(express.static("public"))
//rotas da aplicação
.get('/',pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes", saveClasses)
//porta de instanciação
.listen(5500)