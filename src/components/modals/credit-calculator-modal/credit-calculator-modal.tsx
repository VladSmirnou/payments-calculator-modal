import { Button } from "../../button/button";
import { CreditCalculator } from "./credit-calculator/credit-calculator";
import { type ModalProps } from "./types";
import cn from "classnames";
import { createPortal } from "react-dom";
import { MODAL_DESCRIPTION, MODAL_SEND_BUTTON_TEXT, MODAL_TITLE } from "./constants";
import styles from './credid-calculator-modal.module.css';
import { useEffect } from "react";

export const CreditCalculatorModal = (props: ModalProps) => {
    const { isOpened, onClose } = props;

    const handleClose = () => {
        onClose()
    }

    useEffect(() => {
        const eventHandler = (e: KeyboardEvent) => {
            if (isOpened && e.key === 'Escape' ) {
                handleClose();
            }
        }
        document.addEventListener('keydown', eventHandler)
        return () => document.removeEventListener('keydown', eventHandler)
    }, [isOpened])

    return (isOpened ?
        createPortal(
            <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="modalTitle" onClick={handleClose}>
                <div className={styles.modal_wrapper} onClick={e => e.stopPropagation()}>
                    <Button className={styles.close_button} onClick={handleClose}>
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