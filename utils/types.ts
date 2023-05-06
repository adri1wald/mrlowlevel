export type Expand<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: O[K] }
    : never
  : T

export type Recordify<T extends PropertyKey> = Expand<{
  [K in T]: K
}>
