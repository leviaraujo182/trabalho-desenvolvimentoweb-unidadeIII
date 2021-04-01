import React from 'react';
import './style/style.css';
import { Card, CardContent, TextField, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';




function Login(){

    const StyledInput = withStyles({
        root:{
            marginBottom: 10,
        
        }
    })(TextField);

    const StyleLabel = withStyles ({
        root: {
            fontSize: 30,
            fontWeight: 'bold'
        }
    })(Typography)

    const history = useHistory();

    function callScreen(){
        history.push("/main");
    }

    return (
        <div className="container">
            <Card className="card">
                <CardContent>
                    <div className="inputlabel">
                    <StyleLabel align="center">Logar</StyleLabel>
                    <StyledInput placeholder="Email" />
                    <StyledInput placeholder="Senha" />
                    <Button onClick={callScreen} className="btnlogar" variant="contained" style={{ backgroundColor: '#000066', color: '#FFF', marginTop: 10, fontWeight: 'bold' }}>Logar</Button>
                    <Button variant="outlined" style={{ marginTop: 12, }}>Cadastre-se</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;