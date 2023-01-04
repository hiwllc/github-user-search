import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { searchUserReducer, User } from '../features/search'

export type Status = 'idle' | 'success' | 'fetching'

export type RootState = {
  user: {
    data: User | null
    status: Status
  }
}

const reducers = combineReducers({
  user: searchUserReducer,
})

export const initialState: RootState = {
  user: {
    data: null,
    status: 'idle',
  },
}

export const store = createStore(reducers, initialState, applyMiddleware(thunk))
