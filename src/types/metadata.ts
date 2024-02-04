export type Metadata = {
    symbol: string,
    name: string,
    symbol_native: string,
    decimal_digits: number,
    rounding: number,
    code: string,
    name_plural: string,
    type: string
}

export type Currencies = Record<string, Metadata>;
