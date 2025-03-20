import { EMPTY_FIELD_ERROR } from "../../../../credit-calculator/constants";

export const validateSubmittedValue = (value: string) => {
    if (value === '') return EMPTY_FIELD_ERROR;
}
