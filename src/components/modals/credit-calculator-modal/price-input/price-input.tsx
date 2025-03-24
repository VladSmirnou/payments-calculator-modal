import { memo } from "react";
import { Button } from "components/button/button";
import { Input } from "components/input/input";
import { useInput } from "./hooks/use-input/use-input";
import styles from './input.module.css';
import type { InputProps } from "./types";
import { CALCULATE_BUTTON_TEXT, INPUT_LABEL_TEXT, INPUT_PLACEHOLDER } from "./constants";
import { RUB_CURRENCY_SYMBOL } from "constants/constants";

export const PriceInput = memo((props: InputProps) => {
    const { onClick, isCalculatedPriceSet, reset } = props;
    const {
        value,
        error,
        inputRef,
        handleChange,
        handleClick
    } = useInput({
        onClick, isCalculatedPriceSet, reset
    })

    return (
        <div className={styles.container}>
            <label>
                <span className={styles.label_text}>{INPUT_LABEL_TEXT}</span>
                <div className={styles.input_container}>
                    <Input
                        className={error ? 'input_error' : ''}
                        value={value}
                        ref={inputRef}
                        onChange={handleChange}
                        placeholder={INPUT_PLACEHOLDER}
                    />
                    {value && <span className={styles.visible_input_value}>{value} {RUB_CURRENCY_SYMBOL}</span>}
                </div>
            </label>
            {error && <p className={styles.error}>{error}</p>}
            <Button className="text_button" onClick={handleClick}>{CALCULATE_BUTTON_TEXT}</Button>
        </div>
    )
})
