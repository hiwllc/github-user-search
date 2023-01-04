import { DefaultBodyType, rest } from 'msw'
import { User } from '../features/search/types'

export const handlers = [
  rest.get<DefaultBodyType, User>(
    'https://api.github.com/users/octocat',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id: 583231,
          login: 'octocat',
          avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
          gravatar_id: '',
          html_url: 'https://github.com/octocat',
          repos_url: 'https://api.github.com/users/octocat/repos',
          name: 'The Octocat',
          company: '@github',
          blog: 'https://github.blog',
          location: 'San Francisco',
          email: null,
          bio: null,
          twitter_username: null,
          created_at: '2011-01-25T18:44:36Z',
        })
      )
    }
  ),
]
