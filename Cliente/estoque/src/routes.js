import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import ListaProdutos from './pages/ListaProdutos';
import AddProduto from './pages/AddProduto';
import EditPorduto from './pages/EditProduto';
import './pages/style/style.css';

import Sidebar from './pages/components/Sidebar/Sidebar'

function Routes(){
    return(

         <div className="dois">
             
        <BrowserRouter>
        <Sidebar />
            <Switch>
                <Route exact path='/' component={ Login } />
                <Route exact path='/main' component={ Main } />
                <Route exact path='/listaprodutos' component={ ListaProdutos } />
                <Route exact path='/addproduto' component={ AddProduto } />
                <Route exact path='/editproduto/:id/:nomeprod/:marcaprod/:qntprod/:fornprod/:setorprod' component={ EditPorduto } />
            </Switch>   
            
        </BrowserRouter>

        </div>
    );
};

export default Routes;