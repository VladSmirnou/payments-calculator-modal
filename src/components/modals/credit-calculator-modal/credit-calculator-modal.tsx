import cn from "classnames";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "../../button/button";
import { MODAL_DESCRIPTION, MODAL_SEND_BUTTON_TEXT, MODAL_TITLE } from "./constants";
import styles from './credid-calculator-modal.module.css';
import { CreditCalculator } from "./credit-calculator/credit-calculator";
import { type ModalProps } from "./types";

export const CreditCalculatorModal = (props: ModalProps) => {
    const { isOpened, onClose } = props;

    useEffect(() => {
        const eventHandler = (e: KeyboardEvent) => {
            if (isOpened && e.key === 'Escape' ) {
                onClose();
            }
        }
        document.addEventListener('keydown', eventHandler)
        return () => document.removeEventListener('keydown', eventHandler)
    }, [isOpened, onClose])

    return (isOpened ?
        createPortal(
            <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="modalTitle" onClick={onClose}>
                <div className={styles.modal_wrapper} onClick={e => e.stopPropagation()}>
                    <Button className={styles.close_button} onClick={onClose}>
                        <span className='close_cross_button'></span>
                    </Button>
                    <h2 className={styles.modal_title} id="modalTitle">{MODAL_TITLE}</h2>
                    <p className={styles.modal_text}>
                        {MODAL_DESCRIPTION}
                    </p>
                    <CreditCalculator />
                    <Button className={cn(styles.bottom_button, 'filled-button')}>{MODAL_SEND_BUTTON_TEXT}</Button>
                </div>
            </div>,
            document.body
        ) : null)
}