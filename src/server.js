require("express")()
.get('/',(req, res) => {
    return res.send("Marley")
})
.get('/study',(req, res) => {
    return res.send("page study")
})
.listen(5500)