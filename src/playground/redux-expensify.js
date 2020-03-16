import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

const demoState = {
    expenses: [
        {
            id: '1111',
            description: 'jan rend',
            note: 'final payment',
            amount: 45000,
            createAt: 0
        }
    ],
    filters: {
        text: 'rents',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined 
    }
}

const addExpense = ({description = '', note = '', amount = 0, createAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expenses: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
})

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})


const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expenses]
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state;
    }
}

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})


const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate

})

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text}
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'}
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'}
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate}
        case 'SET_END_DATE':
            return {...state, endDate: action.endDate}
        default:
            return state;
    }
}

const getVisibleExpenses = (expenses, filters) => {
    return expenses
}

const store = createStore(combineReducers(
        {
            expenses: expensesReducer,
            filters: filtersReducer
        }
    )
)

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100 }))
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 50 }))
const expenseThree = store.dispatch(addExpense({ description: 'tea', amount: 50 }))

// console.log(expenseOne);


// store.dispatch(removeExpense({id: expenseOne.expenses.id}))
// store.dispatch(editExpense(expenseTwo.expenses.id, {amount: 150}))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

store.dispatch(setStartDate(125))
store.dispatch(setStartDate())
store.dispatch(setEndDate(1250))



