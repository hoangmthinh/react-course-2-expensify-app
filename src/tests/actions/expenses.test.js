import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action  = removeExpense({id: '123'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    })
})

test('should setup edit expense action object', () => {
    const action  = editExpense('123', {note: 'new note value'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            note: 'new note value'
        }
    })
})

test('should setup add expense action object', () => {
    const expenseData = {
        description: 'rent',
        amount: 1000,
        createdAt: 1000,
        note: 'last month'
    }

    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            ...expenseData,
            id: expect.any(String)
        }
    })

})

test('should setup add expense action object with default value', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
    
})