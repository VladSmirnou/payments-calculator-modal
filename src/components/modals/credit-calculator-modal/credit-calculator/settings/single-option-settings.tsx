import { type ReactNode } from "react";
import { type SingleOptionSettingsProps } from "./types";
import { Button } from "components/button/button";
import styles from './settings.module.css';
import cn from "classnames";
import { typedMemo } from "./constants";

export const SingleOptionSettings = typedMemo(function<T extends ReactNode>(props: SingleOptionSettingsProps<T>) {
    const { title, activeOptionClass, options, onOptionChange, activeOption, additionalClasses } = props;

    function handleSetOption(option: T) {
        onOptionChange(option)
    }

    const { container, block } = additionalClasses || {}

    const finalBlockClasses = cn(styles.block, block);
    const finalContainerClasses = cn(styles.container, container);

    return (
        <div className={finalBlockClasses}>
            <h3 className={styles.title}>{title}</h3>
            <div className={finalContainerClasses}>
                {options.map((option, index) => {
                    return (
                        <Button
                            key={index}
                            className={
                                activeOption === option ? cn(
                                    'tag_button', activeOptionClass
                                ) : 'tag_button'
                            }
                            onClick={() => handleSetOption(option)}
                        >
                            {option}
                        </Button>
                    )
                })}
            </div>
        </div>
    )
})