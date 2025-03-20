import type { Interval, MonthsAmount } from "./types";

export const EMPTY_FIELD_ERROR = 'Поле обязательно для заполнения';
export const MONTHS: Array<MonthsAmount> = [12, 24, 36, 48];

export const YEAR_INTERVAL_KEY = 'в год'
export const MONTH_INTERVAL_KEY = 'в месяц';
export const DEFAULT_MONTHS_VALUE = 12;
export const DEFAULT_INTERVAL_VALUE = 1;

export const INTERVALS: Interval = {[YEAR_INTERVAL_KEY]: 12, [MONTH_INTERVAL_KEY]: 1}

export const ROUND_TO_TWO_DECIMALS = 2;
export const ROUND_TO_WHOLE_NUMBER = 0;

export const MONTHS_OPTIONS_TITLE = 'Количество месяцев?';
export const INTERVALS_OPTIONS_TITLE = 'Итого ваш платеж по кредиту';
