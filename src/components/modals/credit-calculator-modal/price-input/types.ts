export type InputProps = {
    onClick: (value: string) => void 
    isCalculatedPriceSet: boolean
    reset: () => void
}

export type processInputValueFn = (
    args: {
        inputValue: string,
        isErrorValueSet: boolean,
        isValueSet: boolean,
        isCalculatedPriceSet: boolean,
        setError: (error: string) => void,
        setValue: (value: string) => void,
        reset: () => void
    }
) => string | undefined