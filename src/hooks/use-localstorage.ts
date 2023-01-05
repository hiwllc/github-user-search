import * as React from 'react'

export function useLocalStorage<T>(key: string, value?: T) {
  const [stored, setStored] = React.useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : value
    } catch (e) {
      return value
    }
  })

  const save = (value: T | ((val: T) => T)) => {
    try {
      const toStore = value instanceof Function ? value(stored) : value
      setStored(toStore)
      window.localStorage.setItem(key, JSON.stringify(toStore))
    } catch (e) {
      console.error(e)
    }
  }

  return {
    value: stored,
    save,
  } as const
}
