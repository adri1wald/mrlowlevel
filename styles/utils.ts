function createConverter(units: string, base: number = 16) {
  return (px: unknown) => {
    if (typeof px === 'number') {
      return `${px / base}${units}`
    }

    if (typeof px === 'string') {
      const replaced = px.replace('px', '')
      if (!Number.isNaN(Number(replaced))) {
        return `${Number(replaced) / base}${units}`
      }
    }

    return px as string
  }
}

export const rem = createConverter('rem')
export const em = createConverter('em')
export const percent = createConverter('%', 1 / 100)
