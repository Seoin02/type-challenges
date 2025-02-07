type DeepReadonly<T> =
  { readonly [K in keyof T]: T[K] extends (...args: any) => any
    ? T[K]
    : T[K] extends { [k in string]: any }
      ? DeepReadonly<T[K]>
      : T[K]
  }
