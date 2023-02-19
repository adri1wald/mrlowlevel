type AnyRecord = Record<string, any>
type RecordValueUnion<T extends AnyRecord> = T[keyof T]
type ReplaceRecordValueType<T extends AnyRecord, U> = T extends infer O
  ? {
      [K in keyof O]: U
    }
  : never

export function transformValues<T extends AnyRecord, U>(
  obj: T,
  fn: (value: RecordValueUnion<T>, key: string) => U,
): ReplaceRecordValueType<T, U> {
  return Object.keys(obj).reduce((acc, key) => {
    // @ts-ignore
    acc[key] = fn(obj[key], key)
    return acc
  }, {} as ReplaceRecordValueType<T, U>)
}
