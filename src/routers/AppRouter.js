import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import ExpenseDashboardPage from '../components/Dashboard'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/EditExpense'
import HelpExpensePage from '../components/Help'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header></Header>
        </div>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
            <Route path="/create" component={AddExpensePage}></Route>
            <Route path="/edit/:id" component={EditExpensePage}></Route>
            <Route path="/help" component={HelpExpensePage}></Route>
            <Route component={NotFoundPage}></Route>
        </Switch>
    </BrowserRouter>
)

export default AppRouter
