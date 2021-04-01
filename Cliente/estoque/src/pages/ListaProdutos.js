import React, { useState, useEffect } from 'react';
import './style/style.css'
import EditIcon from '@material-ui/icons/Edit';
import ExcluirIcon from '@material-ui/icons/Clear';
import { Card, CardContent, Typography, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Button, Snackbar} from '@material-ui/core';
import Axios from 'axios';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';

    
    

function ListaProdutos(){

    const [open, setOpen] = React.useState(false);

    const history = useHistory();

    const handleClose = (event, reason) => {
        if(reason === 'clickaway'){
            return 
        }

        setOpen(false);
    }


    function callScreenEdit(id, nomeprod, marcaprod, qntprod, fornprod, setorprod){
        history.push(`/editproduto/${id}/${nomeprod}/${qntprod}/${marcaprod}/${fornprod}/${setorprod}`);
    }

    const [ProductList, setProductList] = useState([])

    useEffect( function teste() {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            setProductList(response.data);
        });
    }, []);


    const deleteReview = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`);
        setOpen(true);
    };

    return(
        <div className="content_listprod">
            <Card className="card_lista">
                <CardContent>
                <Typography className="txtlista" style={{ fontSize: 20,}}>Lista de produtos</Typography>
                <TableContainer className="container_table">
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight:'bold', textAlign: 'center'}}>Id</TableCell>
                                <TableCell style={{ fontWeight:'bold', textAlign: 'center'}}>Nome</TableCell>
                                <TableCell style={{ fontWeight:'bold', textAlign: 'center'}}>Quantidade</TableCell>
                                <TableCell style={{ fontWeight:'bold', textAlign: 'center'}}>Marca</TableCell>
                                <TableCell style={{ fontWeight:'bold', textAlign: 'center'}}>Fornecedor</TableCell>
                                <TableCell style={{ fontWeight:'bold', textAlign: 'center'}}>Setor</TableCell>
                                <TableCell style={{ fontWeight:'bold', textAlign: 'center'}}>Ações</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ProductList.map((val) => {
                                return (
                                    <TableRow>
                                        <TableCell style={{ textAlign: 'center'}}>{val.id}</TableCell>
                                        <TableCell style={{ textAlign: 'center'}}>{val.nome}</TableCell>
                                        <TableCell style={{ textAlign: 'center'}}>{val.qnt}</TableCell>
                                        <TableCell style={{ textAlign: 'center'}}>{val.marca}</TableCell>
                                        <TableCell style={{ textAlign: 'center'}}>{val.fornecedor}</TableCell>
                                        <TableCell style={{ textAlign: 'center'}}>{val.setor}</TableCell>
                                        <TableCell style={{ textAlign: 'center'}}>
                                            <Button variant="contained" onClick={() => {callScreenEdit(val.id, val.nome, val.qnt, val.marca, val.fornecedor, val.setor)}} style={{ backgroundColor: '#000066', color: '#FFF'}}><EditIcon fontSize="small" style={{ color: '#fff'}} /></Button>
                                            <Button onClick={ () => {deleteReview(val.id)}} variant="contained" style={{ color: '#fff', marginLeft: 10, backgroundColor: '#e60000' }}><ExcluirIcon fontSize="small" style={{ color: '#FFF' }} /></Button></TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                </CardContent>
            </Card>

            <Snackbar anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }} open={open} elevation={6} autoHideDuration={3000} onClose={handleClose}>
                <MuiAlert security="sucess" elevation={6} variant="filled">
                    Produto deletado com sucesso!
                </MuiAlert>
            </Snackbar>
        </div>
    );
};

export default ListaProdutos;