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
  fn: (value: RecordValueUnion<T>, key: keyof T) => U,
): Expand<ReplaceRecordValueType<T, U>> {
  return Object.keys(obj).reduce((acc, key) => {
    // @ts-ignore
    acc[key] = fn(obj[key], key as keyof T)
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

/**
 * A function that turns a list of property keys into a record where each value is the key itself.
 */
export function convertKeysToRecord<Key extends PropertyKey>(
  keys: readonly Key[],
): Readonly<{
  [K in Key]: K
}> {
  return keys.reduce(
    (acc, key) => {
      acc[key] = key
      return acc
    },
    {} as {
      [K in Key]: K
    },
  )
}

/**
 * A function that picks a subset of properties from an object.
 */
export function pick<T extends AnyRecord, K extends keyof T>(
  obj: T,
  keys: readonly K[],
): Expand<Pick<T, K>> {
  const reduced: Pick<T, K> = {} as Pick<T, K>
  for (const key of keys) {
    reduced[key] = obj[key]
  }
  return reduced as Expand<Pick<T, K>>
}
