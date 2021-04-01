import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, withStyles, TextField, MenuItem, Select, Options, FormControl, InputLabel, Button, Snackbar } from '@material-ui/core';
import './style/style.css';
import { useParams } from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';
import Axios from 'axios';


    function EditProduto(){

        
        let url = useParams();
        const id = url.id;
        const nomprod = url.nomeprod;
        const marcaprod = url.marcaprod;
        const qntprod = url.qntprod;
        const fornprod = url.fornprod;
        const setorprod = url.setorprod;
        const [Editnome, setEditnome] = useState('');
        const [Editqnt, setEditqnt] = useState('');
        const [Editmarca, setEditmarca] = useState('');
        const [Edifornecedor, setEditfornecedor] = useState('');
        const [Editsetor, setEditsetor] = useState('');
        const [open, setOpen] = React.useState(false);

        const handleClose = (event, reason) => {
            if(reason === 'clickaway'){
                return 
            }
    
            setOpen(false);
        }

        const Update = () => {
            setOpen(true);
            Axios.put("http://localhost:3001/api/update", {
                idprod: id,
                nomeprod: Editnome,
                qntprod: Editqnt,
                fornprod: Edifornecedor,
                marcaprod: Editmarca,
                setorprod: Editsetor
            });
        }

        const SelectSetor = withStyles({
            root:{
                marginTop: 10,
                marginLeft: 20,
                width: '90%'
    
            }
        })(Select);

        return (
            <div className="content_editprod">
                <Card className="card_add">
            <CardContent>
            <Typography style={{ textAlign: 'center', fontSize: 20, marginTop: 10,}}>Editar produto</Typography>
            <div className="style_input">
            <TextField onChange={ (e) => { setEditnome(e.target.value)}} defaultValue={nomprod} label="Nome do produto" className="input_add" style={{ marginRight: 10,}} />
            <TextField onChange={ (e) => { setEditqnt(e.target.value)}} defaultValue={qntprod} label="Quantidade" className="input_quantidade"/>
            </div>

            <div className="style_input">
            <TextField onChange={ (e) => { setEditmarca(e.target.value)}} defaultValue={marcaprod} label="Marca" style={{ width: '100%', marginRight: 30, marginTop: 5 }}/>
            <TextField defaultValue={setorprod} label="Setor" onChange={ (e) =>{ setEditsetor(e.target.value)}} style={{ width: '60%', marginTop: 5 }}/>
            </div>
            <div>
            <TextField onChange={ (e) => { setEditfornecedor(e.target.value)}} defaultValue={fornprod} label="Fornecedor" className="style_fornecedor"/>
            <Button onClick={Update} variant="contained" style={{ backgroundColor: '#000066', color: '#FFF', marginTop: 20, }}>Salvar</Button>
            <Button variant="outlined" style={{color: '#000066', marginTop: 20, marginLeft: 10 }}>Limpar campos</Button>
            </div>
            </CardContent>
        </Card>
        <Snackbar anchorOrigin={{vertical: 'top',horizontal: 'right'}} open={open} autoHideDuration={3000} onClose={handleClose} >
            <MuiAlert severity="info" elevation={6} variant="filled">
                Produtos alterados com sucesso!
            </MuiAlert>
        </Snackbar>
            </div>
        );
    }

export default EditProduto;