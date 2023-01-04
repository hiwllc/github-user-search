import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { searchReducer } from '../features/search'

const reducers = combineReducers({ search: searchReducer })
const store = createStore(reducers, applyMiddleware(thunk))

export default store
