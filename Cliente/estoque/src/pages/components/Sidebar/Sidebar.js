import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Divider, Typography } from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import Add from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import './Sidebar.css';


function Sidebar(){

    const TypographyTitulo = withStyles({
        root: {
            paddingTop: 17,
            color: '#FFF',
            fontWeight: 'bold',
            fontSize: 20
        }
    })(Typography)

    const history = useHistory();

    function ListaProdutos(){
         history.push('/listaprodutos');
    }

    function AddProduto(){
        history.push('/addproduto');
    }

    function Main(){
        history.push('/main');
    }



    return (
        <div className="sidebar_bg">
            <div className="titulo">
                <TypographyTitulo>Sistema de Gerenciamento</TypographyTitulo>
            </div>
            <Divider />
            <List>

                <ListItem button onClick={ ListaProdutos }>
                    <ListItemIcon style={{ color: '#FFF' }}>
                        <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Listar Produtos" color="#FFF" style={{ color: '#FFF',  }}/>
                </ListItem>


                <ListItem button onClick={ AddProduto }>
                    <ListItemIcon style={{ color: '#FFF' }}>
                        <Add />
                    </ListItemIcon>
                    <ListItemText primary="Adicionar produto" color="#FFF" style={{ color: '#FFF' }}/>
                </ListItem>
            </List>
        </div>
    );
};

export default Sidebar;