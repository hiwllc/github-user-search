import { Dispatch } from 'redux'
import { get } from '../../../lib/request'
import { Action, User } from '../types'

export function searchUser(username: string) {
  return async (dispatch: Dispatch<Action>) => {
    const result = await get<User>(`https://api.github.com/users/${username}`)

    return dispatch({
      type: 'search/user',
      payload: { data: result, status: 'success' },
    })
  }
}
