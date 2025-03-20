import { memo } from "react";
import { Button } from "components/button/button";
import { Input } from "components/input/input";
import { useInput } from "./hooks/use-input/use-input";
import styles from './input.module.css';
import type { InputProps } from "./types";

export const PriceInput = memo((props: InputProps) => {
    const { onClick, isCalculatedPriceSet, reset } = props;
    const {
        value,
        error,
        ref,
        handleChange,
        handleClick
    } = useInput({
        onClick, isCalculatedPriceSet, reset
    })

    return (
        <div className={styles.container}>
            <label>
                <span className={styles.label_text}>Ваша сумма кредита</span>
                <div className={styles.input_container}>
                    <Input
                        className={error ? 'input_error' : ''}
                        value={value}
                        ref={ref}
                        onChange={handleChange}
                        placeholder="Введите данные"
                    />
                    {value && <span className={styles.visible_input_value}>{value} ₽</span>}
                </div>
            </label>
            {error && <p className={styles.error}>{error}</p>}
            <Button className="text_button" onClick={handleClick}>Рассчитать</Button>
        </div>
    )
})
