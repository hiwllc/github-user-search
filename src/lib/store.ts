import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Repository, searchUserReducer, User } from '../features/search'

export type Status = 'idle' | 'success' | 'fetching' | 'error'

export type RootState = {
  data: {
    user: User | null
    repositories: Repository[] | null
    status: Status
  }
}

const reducers = combineReducers({
  data: searchUserReducer,
})

export const initialState: RootState = {
  data: {
    repositories: [],
    status: 'idle',
    user: null,
  },
}

export const store = createStore(reducers, initialState, applyMiddleware(thunk))
