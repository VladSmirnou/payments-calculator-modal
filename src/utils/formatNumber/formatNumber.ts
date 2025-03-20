import { RU_LOCALE } from "../../constants/constants";
import type { Args } from "./types";

export const formatNumber = (args: Args) => {
    const { value, options, locale = RU_LOCALE } = args;
    return new Intl.NumberFormat(locale, options).format(value);
}
