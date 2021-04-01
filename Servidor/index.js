const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306

});

sql.query("use comercio_novo");
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res) => {
    const sqlinsert = "SELECT * FROM estoque";
    sql.query(sqlinsert, (err, result) =>{
        res.send(result);
    });
});


app.post("/api/insert", (req, res) => {

    const nomeProd = req.body.nomeProd;
    const qntProd = req.body.qntProd;
    const marcaProd = req.body.marcaProd;
    const setorProd = req.body.setorProd;
    const fornecedorProd = req.body.fornecedorProd;

    const query = "INSERT INTO estoque (nome,qnt,marca,fornecedor,setor) VALUES (?,?,?,?,?)";
    sql.query(query, [nomeProd, qntProd, marcaProd, fornecedorProd, setorProd], (err, result) => {
        console.log(result);
    });
});

app.get("/api/counter", (req,res)=>{
    const sqlcounter = "SELECT COUNT(id) FROM estoque";
    sql.query(sqlcounter, (err,result) => {
        if(result){
            console.log(result);
        }
    });
});

app.put("/api/update", (req,res) => {
    const idprod = req.body.idprod;
    const nomeprod = req.body.nomeprod;
    const qntprod = req.body.qntprod;
    const fornecedorprod = req.body.fornprod;
    const marcaprod = req.body.marcaprod;
    const setorprod = req.body.setorprod;
    const sqlupdate = "UPDATE estoque SET nome = ?, qnt = ?, fornecedor = ?, marca = ?, setor = ? WHERE id = ?";
    sql.query(sqlupdate, [nomeprod,qntprod, fornecedorprod, marcaprod, setorprod, idprod], (err, result) =>{
        if(err){
            console.log(err);
        }
    });
});

app.delete("/delete/:id", (req,res)=>{
    const id = req.params.id;
    const sqldelete = "DELETE FROM estoque WHERE id = ?";
    sql.query(sqldelete, id, (err, result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () =>{
    console.log("Servidor rodando!");
});