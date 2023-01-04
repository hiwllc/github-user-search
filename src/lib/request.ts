export async function request(url: string, options?: RequestInit) {
  return fetch(url, options)
}

export async function get(url: string) {
  const response = await request(url, { method: 'GET' })
  const data = await response.json()

  if (response.ok) {
    if (data) {
      return { ...data, at: new Date() }
    }

    return Promise.reject(new Error(`No user found with this username.`))
  }

  if (!response.ok) {
    const error = new Error(data.message ?? 'unknown')
    return Promise.reject(error)
  }
}
