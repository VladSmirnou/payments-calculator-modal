import { useState, ChangeEvent } from "react";
import { validateSubmittedValue } from "./validators/validateSubmittedValue";
import { processInputValue } from "./processInputValue";
import { usePositionCursor } from "../use-position-cursor";
import type { useInputArgs } from "./types";
import type { Nullable } from "types/types";
import { formatNumber } from "utils/formatNumber/formatNumber";

export const useInput = (args: useInputArgs) => {
    const { isCalculatedPriceSet, reset, onClick } = args
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<Nullable<string>>(null);
    const [ref, setCursorPosition] = usePositionCursor();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value: inputValue, selectionEnd} = event.target;

        const processedInputValue = processInputValue({
            inputValue,
            isErrorValueSet: !!error,
            isCalculatedPriceSet,
            isValueSet: !!value,
            reset,
            setError,
            setValue
        })

        if (processedInputValue) {
            const formattedRubs = formatNumber({value: Number(processedInputValue)});
            setCursorPosition(selectionEnd!, value, inputValue, formattedRubs)
    
            setValue(formattedRubs);
    
            isCalculatedPriceSet && reset();
            if (error) { setError(null) }
        }
    }

    const handleClick = () => {
        const errorText = validateSubmittedValue(value);
        if (errorText) {
            setError(errorText)
        } else {
            !isCalculatedPriceSet && onClick(value)
        }
    }

    return {
        value,
        error,
        ref,
        handleChange,
        handleClick
    }
}