export type User = {
  id: string
  login: string
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

export type ActionType = 'search/user' | 'search/repositories'

export type ActionPayload = User
