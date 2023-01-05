type SortByDateArgs<T> = T &
  {
    date: string
  }[]

export function sortByDate<T>(list: SortByDateArgs<T>) {
  return list.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}
