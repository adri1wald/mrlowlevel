import { Expand } from './types'

type AnyRecord = Record<PropertyKey, any>
type RecordValueUnion<T extends AnyRecord> = Expand<T[keyof T]>
type ReplaceRecordValueType<T extends AnyRecord, U> = T extends infer O
  ? {
      [K in keyof O]: U
    }
  : never

export function transformValues<T extends AnyRecord, U>(
  obj: T,
  fn: (value: RecordValueUnion<T>, key: string) => U,
): Expand<ReplaceRecordValueType<T, U>> {
  return Object.keys(obj).reduce((acc, key) => {
    // @ts-ignore
    acc[key] = fn(obj[key], key)
    return acc
  }, {} as ReplaceRecordValueType<T, U>) as Expand<ReplaceRecordValueType<T, U>>
}

/**
 * A function that asserts that a value is never.
 * Useful for exhaustiveness checks in switch statements.
 */
export function assertNever(x: never): never {
  throw new Error(`Unexpected object: ${x}`)
}
