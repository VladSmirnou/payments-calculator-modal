import { REPLACE_INNER_SPACES } from "patterns/patterns";
import { useCallback, useMemo, useState } from "react";
import type { Nullable } from "types/types";
import { formatNumber } from "utils/formatNumber/formatNumber";
import { getRubblesPriceSuffix } from "utils/getRubblesPriceSuffix/getRubblesPriceSuffix";
import { isWholeNumber } from "utils/isWholeNumber";
import { DEFAULT_INTERVAL_VALUE, DEFAULT_MONTHS_VALUE, INTERVALS, MONTH_INTERVAL_KEY, ROUND_TO_TWO_DECIMALS, ROUND_TO_WHOLE_NUMBER, YEAR_INTERVAL_KEY } from "../constants";
import styles from '../credit-calculator.module.css';
import type { IntervalKeys, IntervalValues, MonthsAmount } from "../types";
import { getLastNumber } from "utils/getLastNumber";

export const useCreditCalculator = () => {
    const [price, setPrice] = useState<Nullable<string>>(null);
    const [monthAmount, setMonthAmount] = useState<MonthsAmount>(DEFAULT_MONTHS_VALUE);
    const [interval, setInterval] = useState<IntervalValues>(DEFAULT_INTERVAL_VALUE);

    const handleSetPrice = useCallback((value: string) => {
        setPrice(value)
    }, [])

    const handleSetInterval = useCallback((value: IntervalKeys) => {
        setInterval(INTERVALS[value])
    }, [])

    const handleSetMonth = useCallback((month: MonthsAmount) => {
        setMonthAmount(month)
    }, [])

    const reset = useCallback(() => {
        setPrice(null)
        setMonthAmount(DEFAULT_MONTHS_VALUE)
        setInterval(DEFAULT_INTERVAL_VALUE)
    }, [])

    const intervalOptionsData = useMemo(() => {
        return {
            options: Object.keys(INTERVALS) as Array<IntervalKeys>,
            classes: {
                container: styles.interval_options_container,
                block: styles.interval_options_block
            }
        }
    }, [])

    const activeIntervalOption: IntervalKeys = interval === DEFAULT_INTERVAL_VALUE ? MONTH_INTERVAL_KEY : YEAR_INTERVAL_KEY;

    let finalPrice = price;
    if (finalPrice) {
        const numericPrice = Number(finalPrice.replace(REPLACE_INNER_SPACES, ''));
        const calculatedPrice = numericPrice / monthAmount * interval;

        finalPrice = formatNumber({value: calculatedPrice, options: {
            maximumFractionDigits: isWholeNumber(calculatedPrice) ? ROUND_TO_WHOLE_NUMBER : ROUND_TO_TWO_DECIMALS
        }}) + getRubblesPriceSuffix(getLastNumber(calculatedPrice))
    }

    return {
        handleSetPrice,
        handleSetInterval,
        handleSetMonth,
        reset,
        intervalOptionsData,
        activeIntervalOption,
        finalPrice,
        monthAmount
    }
}