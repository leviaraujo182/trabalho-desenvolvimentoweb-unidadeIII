import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, withStyles, TextField, MenuItem, Select, Options, FormControl, InputLabel, Button } from '@material-ui/core';
import './style/style.css';
import IconAdd from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';
import Axios from 'axios';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';


function AddProduto(){

    const [open, setOpen] = React.useState(false);
    const [openError, setopenError] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if(reason === 'clickaway'){
            return 
        }

        setOpen(false);
    }

    const handleCloseError = (event, reason) => {
        if(reason === 'clickaway'){
            return 
        }

        setopenError(false);
    }


    const [nomeProduto, setnomeProduto] = useState('');
    const [qntProduto, setqntProduto] = useState('');
    const [marcaProduto, setmarcaProduto] = useState('');
    const [setorProduto, setsetorProduto] = useState('');
    const [fornecedorProduto, setfornecedorProduto] = useState('');

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
      };

      const submitProduct = () => {
            if(nomeProduto == '' || qntProduto == '' || marcaProduto == '' || fornecedorProduto == '') {
                setopenError(true);
            } else {
            Axios.post('http://localhost:3001/api/insert', 
            {
            nomeProd: nomeProduto,
            qntProd: qntProduto, 
            marcaProd: marcaProduto, 
            setorProd: setorProduto, 
            fornecedorProd: fornecedorProduto}).then(() => {
                alert("Inserido com sucesso!");
            });

            setOpen(true);
        }
      };

    const TypoGraphAdd = withStyles({
        root:{
            marginBottom: 10,
            fontSize: 20,
            textAlign: 'center'
        }
    })(Typography);

    const SelectSetor = withStyles({
        root:{
            marginTop: 10,
            marginLeft: 20,
            width: '90%',

        }
    })(Select);


    return (
        <div className="content_add">
        <Card className="card_add">
            <CardContent>
            <TypoGraphAdd>Adicionar produto</TypoGraphAdd>
            <div className="style_input">
            <TextField label="Nome do produto" className="input_add" style={{ marginRight: 10,}} onChange={ (e) =>{ setnomeProduto(e.target.value)}} />
            <TextField label="Quantidade" className="input_quantidade" onChange={ (e) =>{ setqntProduto(e.target.value)}} />
            </div>

            <div className="style_input">
            <TextField label="Marca" onChange={ (e) =>{ setmarcaProduto(e.target.value)}} style={{ width: '100%', marginRight: 30, marginTop: 5 }}/>
            <TextField label="Setor" onChange={ (e) =>{ setsetorProduto(e.target.value)}} style={{ width: '60%', marginTop: 5 }}/>
            </div>
            <div>
            <TextField label="Fornecedor" onChange={ (e) =>{ setfornecedorProduto(e.target.value)}} className="style_fornecedor"/>
            <Button onClick={submitProduct} variant="contained" style={{ backgroundColor: '#000066', color: '#FFF', marginTop: 20, }}>Adicionar <IconAdd fontSize="small" style={{ marginLeft: 10}} /></Button>
            <Button variant="outlined" style={{color: '#000066', marginTop: 20, marginLeft: 10 }}>Limpar campos<ClearIcon fontSize="small" style={{ marginLeft: 10,}} /></Button>
            </div>
            </CardContent>
        </Card>

        <Snackbar anchorOrigin={{vertical: 'top',horizontal: 'right'}} open={open} autoHideDuration={3000} onClose={handleClose} >
            <MuiAlert severity="success" elevation={6} variant="filled">
                Produto adicionado com sucesso!
            </MuiAlert>
        </Snackbar>

        <Snackbar anchorOrigin={{vertical: 'top',horizontal: 'right'}} open={openError} autoHideDuration={3000} onClose={handleCloseError} >
            <MuiAlert severity="error" elevation={6} variant="filled">
                Preencha todos os campos obrigatórios!
            </MuiAlert>
        </Snackbar>
        </div>
    );
}

export default AddProduto;