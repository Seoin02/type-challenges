type Replace<S extends string, From extends string, To extends string> =
  S extends '' ? S
    : S extends `${infer V}${From}${infer R}`
      ? `${V}${To}${R}`
      : S
