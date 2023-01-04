import { Action } from '../types'

export function searchUserReducer(state = {}, action: Action) {
  switch (action.type) {
    case 'search/user':
      return { ...state, ...action.payload }
    default:
      return state
  }
}
