import cn from "classnames";
import type { InputProps } from "./types";

export const Input = (props: InputProps) => {
    // forwardRef deprecated с 19 версии
    const { className, ...rest } = props;

    return (
        <input
            className={cn('input', className)}
            {...rest}
        />
    )
}