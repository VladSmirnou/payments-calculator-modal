import { LAST_NUMBER_EQ1, LAST_NUMBER_LT5, LAST_NUMBER_GTE_5 } from "./constants"

export const getRubblesPriceSuffix = (lastNumber: number) => {
    return lastNumber === 1 ? LAST_NUMBER_EQ1
        : lastNumber > 0 && lastNumber < 5 ? LAST_NUMBER_LT5
        : LAST_NUMBER_GTE_5
}