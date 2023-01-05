export function formatDate(date: string) {
  const now = new Date().getTime()
  const created = new Date(date).getTime()
  const time = Math.floor((now - created) / 1000)

  if (time < 60) {
    return `há ${time} segundos`
  }

  if (time < 3600) {
    return `há ${Math.floor(time / 60)} minutos`
  }

  if (time < 86400) {
    return `há ${Math.floor(time / 3600)} horas`
  }

  if (time < 2620800) {
    return `há ${Math.floor(time / 86400)} dias`
  }

  if (time < 31449600) {
    return `há ${Math.floor(time / 2620800)} meses`
  }

  return `há ${Math.floor(time / 31449600)} anos`
}
