import { useState, useCallback, useMemo } from "react";
import { RUB_CURRENCY } from "constants/constants";
import type { Nullable } from "types/types";
import { formatNumber } from "utils/formatNumber/formatNumber";
import { isWholeNumber } from "utils/isWholeNumber";
import { DEFAULT_MONTHS_VALUE, DEFAULT_INTERVAL_VALUE, INTERVALS, MONTH_INTERVAL_KEY, YEAR_INTERVAL_KEY, ROUND_TO_WHOLE_NUMBER, ROUND_TO_TWO_DECIMALS } from "../constants";
import type { MonthsAmount, IntervalValues, IntervalKeys } from "../types";
import { REPLACE_INNER_SPACES } from "patterns/patterns";
import styles from '../credit-calculator.module.css';
import { FINAL_PRICE_SUFFIX } from "./constants";

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
        }}) + FINAL_PRICE_SUFFIX
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