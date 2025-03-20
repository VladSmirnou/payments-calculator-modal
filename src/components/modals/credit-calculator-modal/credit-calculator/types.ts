export type MonthsAmount = 12 | 24 | 36 | 48;
export type IntervalKeys = 'в год' | 'в месяц';
export type IntervalValues = 1 | 12;

export type Interval = Record<IntervalKeys, IntervalValues>;