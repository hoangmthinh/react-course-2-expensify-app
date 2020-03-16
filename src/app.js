import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'

import configureStore from '../src/store/configureStore'
import { addExpense } from '../src/actions/expenses'
import { setTextFilter } from '../src/actions/filters'
import getVisibleExpenses from '../src/selectors/expenses'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 340}))
store.dispatch(addExpense({ description: 'Gas bill', amount: 100, createdAt: 1000}))
store.dispatch(addExpense({ description: 'Rent', amount: 1500}))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))