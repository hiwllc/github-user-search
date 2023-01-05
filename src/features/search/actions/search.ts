import { Dispatch } from 'redux'
import { get } from '../../../lib/request'
import { Action, Repository, User } from '../types'

export function searchUser(username: string) {
  return async (dispatch: Dispatch<Action>) => {
    const user = await get<User>(`https://api.github.com/users/${username}`)
    const repositories = await get<Repository[]>(
      `https://api.github.com/users/${username}/repos`
    )

    if (typeof user === 'string') {
      return dispatch({
        type: 'search/error',
        payload: {
          repositories: null,
          user: null,
          status: 'error',
        },
      })
    }

    return dispatch({
      type: 'search/user',
      payload: {
        repositories: (repositories ?? []) as Repository[],
        user: user ?? null,
        status: 'success',
      },
    })
  }
}
