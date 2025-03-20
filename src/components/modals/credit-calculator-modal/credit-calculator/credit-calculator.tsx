import { PriceInput } from "../price-input/price-input";
import { INTERVALS_OPTIONS_TITLE, MONTHS, MONTHS_OPTIONS_TITLE } from "./constants";
import { SingleOptionSettings } from "./settings/single-option-settings";
import { useCreditCalculator } from "./hooks/use-credit-calculator";
import styles from './credit-calculator.module.css';

export const CreditCalculator = () => {
    const {
        handleSetPrice,
        handleSetInterval,
        handleSetMonth,
        reset,
        intervalOptionsData,
        activeIntervalOption,
        finalPrice,
        monthAmount
    } = useCreditCalculator()

    return (
        <div className={styles.credit_calculator}>
            <PriceInput
                onClick={handleSetPrice}
                isCalculatedPriceSet={finalPrice !== null}
                reset={reset}
            />
            <SingleOptionSettings
                title={MONTHS_OPTIONS_TITLE}
                options={MONTHS}
                onOptionChange={handleSetMonth}
                activeOption={monthAmount}
                activeOptionClass={'tag_button_selected'}
            />
            {finalPrice && <>
                <SingleOptionSettings
                    title={INTERVALS_OPTIONS_TITLE}
                    options={intervalOptionsData.options}
                    onOptionChange={handleSetInterval}
                    activeOption={activeIntervalOption}
                    activeOptionClass={'tag_button_selected'}
                    additionalClasses={intervalOptionsData.classes}
                />
                <span className={styles.calculated_price}>{finalPrice}</span>
            </>}
        </div>
    )
}