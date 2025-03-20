import { ButtonProps } from "./types"
import cn from "classnames";

export const Button = (props: ButtonProps) => {
    const { as: Component = 'button', className, ...rest } = props;

    const finalClassName = cn('button', className)

    return <Component className={finalClassName} {...rest} />
}