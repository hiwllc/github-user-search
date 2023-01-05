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

  rest.get('https://api.github.com/users/octocat/repos', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 132935648,
          name: 'boysenberry-repo-1',
          html_url: 'https://github.com/octocat/boysenberry-repo-1',
          description: 'Testing',
          created_at: '2018-05-10T17:51:29Z',
          stargazers_count: 123,
          language: null,
          topics: [],
        },
      ])
    )
  }),
]
