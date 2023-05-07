export type Expand<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: O[K] }
    : never
  : T

export type WithoutKeys<
  T extends Record<PropertyKey, unknown>,
  K extends keyof T,
> = Expand<Omit<T, K>>

export type Spread<T1, T2> = Expand<Omit<T2, keyof T1> & T1>
