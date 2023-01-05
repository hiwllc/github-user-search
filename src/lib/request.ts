export async function request(url: string, options?: RequestInit) {
  return fetch(url, options)
}

export async function get<T>(url: string): Promise<T | string> {
  const response = await request(url, { method: 'GET' })
  const data = (await response.json()) as T

  if (response.status === 404) {
    return Promise.resolve(`no users found`)
  }

  if (response.ok) {
    if (Array.isArray(data)) {
      return data
    }

    if (data) {
      return { ...data, at: new Date() }
    }

    return Promise.reject(new Error(`No user found with this username.`))
  }

  const error = new Error('something went wrong')
  return Promise.reject(error)
}
