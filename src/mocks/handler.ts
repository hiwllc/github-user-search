import { DefaultBodyType, rest } from 'msw'

type User = {
  id: string
  avatar_url: string
  gravatar_id: string
  html_url: string
  repos_url: string
  name: string
  company: string
  blog: string
  location: string
  email: string
  bio: string
  twitter_username: string
  created_at: string
  at: string
}

export const handlers = [
  rest.get<DefaultBodyType, User>(
    'https://api.github.com/users/octocat',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id: 583231,
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
