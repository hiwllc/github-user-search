import { Status } from '../../lib/store'

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

export type Repository = {
  id: string
  name: string
  html_url: string
  description: string
  created_at: string
  stargazers_count: number
  language: string
  topics: string[]
}

export type ActionType = 'search/user'

export type Action = {
  type: ActionType
  payload: {
    user: User
    repositories: Repository[]
    status: Status
  }
}
