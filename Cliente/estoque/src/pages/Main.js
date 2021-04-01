import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import './style/style.css';
import { Card, CardContent, Typography } from '@material-ui/core'
import Axios from 'axios';


function Main(){

    
    const [counter, setCounter] = useState('');
    useEffect( function teste() {
        Axios.get("http://localhost:3001/api/counter").then((response) => {
            setCounter(response.data);
        });
    }, []);

    const txtqntprod= {
    
    }

    const stylecard = {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#000066',
        color: '#FFF'
    }

    const styletxtcard = {
        fontWeight: 'bold',
    }

    const txtvalor = {
        fontSize: 20,
    }

    const conteudomain = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10
    }

    const cartconteudomain = {
        width: '98%',
    }

    const txtconteudo = {
        textAlign: 'center',
        fontSize: 20
    }

    return (
        <div style={{ width: '100%', height: '100%', background: '#F5F5F5'}}>
        <div className="main">
        <Card className="cardcontent_home">
            <CardContent style={stylecard}>
                <Typography style={styletxtcard}>Quantidade de produtos</Typography>
                <Typography style={txtvalor}>80</Typography>
            </CardContent>
        </Card>

        <Card className="cardcontent_home">
            <CardContent style={stylecard}>
                <Typography style={styletxtcard}>Último produto</Typography>
                <Typography style={txtvalor}>80</Typography>
                
            </CardContent>
        </Card>
        <Card className="cardcontent_home">
            <CardContent style={stylecard}>
                <Typography style={styletxtcard}>Último produto excluido</Typography>
                <Typography style={txtvalor}>80</Typography>
            </CardContent>
        </Card>
        </div>
        
        <div style={conteudomain}>
        <Card style={cartconteudomain}>
            <CardContent>
                <Typography style={txtconteudo}>Conteudo</Typography>
            </CardContent>
        </Card>
        </div>
        </div>
    );
};

export default Main;