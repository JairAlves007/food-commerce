import { Decimal } from "@prisma/client/runtime/library";

export type ConvertDecimalToNumber<T> = {
  [K in keyof T]: T[K] extends Decimal
    ? number
    : T[K] extends Array<infer U> // Verifica se é um array
      ? ConvertDecimalToNumber<U>[]
      : T[K] extends object // Verifica se é um objeto (ex.: relacionamentos)
        ? ConvertDecimalToNumber<T[K]>
        : T[K]; // Mantém o tipo original
};
