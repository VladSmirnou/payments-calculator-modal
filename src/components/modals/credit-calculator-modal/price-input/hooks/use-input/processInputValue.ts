import { REPLACE_SPACES_PATTERN, NUMERIC_INPUT_VALUE_PATTERN } from "../../../../../../patterns/patterns";
import { INPUT_ALLOWED_LENGTH, INVALID_INPUT_FORMAT, TOO_MANY_CHARACTERS_ERR, ZERO_CHAR } from "../../constants";

import type { processInputValueFn } from "../../types";

export const processInputValue: processInputValueFn = (args) => {
    const {
        inputValue,
        isErrorValueSet,
        isValueSet,
        isCalculatedPriceSet,
        setError,
        setValue,
        reset
    } = args

    if (inputValue === ZERO_CHAR) {
        // вводятся нули с самого начала
        return;
    }

    if (inputValue.length > INPUT_ALLOWED_LENGTH) {
        if (!isErrorValueSet) {
            setError(TOO_MANY_CHARACTERS_ERR);
        }
        return;
    }

    const valueNoSpaces = inputValue.replace(REPLACE_SPACES_PATTERN, '');

    if (valueNoSpaces === '') {
        if (isValueSet) {
            // из инпута был удален последний символ
            isCalculatedPriceSet && reset();
            setValue(valueNoSpaces);
        }
        return;
    }

    if (!NUMERIC_INPUT_VALUE_PATTERN.test(valueNoSpaces)) {
        if (!isErrorValueSet) {
            setError(INVALID_INPUT_FORMAT);
        }
        return;
    }
    return valueNoSpaces
}