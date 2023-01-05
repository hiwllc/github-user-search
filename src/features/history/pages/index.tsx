import { Card } from '../../../components'
import { useLocalStorage } from '../../../hooks/use-localstorage'
import { List, ListItem, ListLink, Title } from '../components'
import { formatDate } from '../functions/format-date'
import { sortByDate } from '../functions/sort-by-date'

type Storage = {
  date: string
  term: string
}

export function HistoryPage() {
  const { value } = useLocalStorage<Storage[]>('github-search')
  const history = sortByDate(value ?? [])

  return (
    <>
      <Title>Histórico de busca</Title>
      {Boolean(history.length) ? (
        <Card>
          <List>
            {history.map((item, index) => (
              <ListItem key={`${item.date}-${index}`}>
                <ListLink to={`/?search=${item.term}`}>
                  <span>{item.term}</span>
                </ListLink>
                <span>{formatDate(item.date)}</span>
              </ListItem>
            ))}
          </List>
        </Card>
      ) : null}
    </>
  )
}
