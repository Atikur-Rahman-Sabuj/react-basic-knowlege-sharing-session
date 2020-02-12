import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import FunctionalComp from './FunctionalComponent'
import ClassComp from './ClassComponent'
import Home from './Home'
import ToDoDetails from './ToDoDetails'
import MyForm from './Form'

function componentName() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact> <Home/> </Route>
                    <Route path="/func" exact> <FunctionalComp/> </Route>
                    <Route path="/class" exact> <ClassComp/> </Route>
                    <Route path="/form" exact component={MyForm}/>
                    <Route path="/tododetails/:toDoId" exact component={ToDoDetails}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default componentName
