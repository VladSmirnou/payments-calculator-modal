import { ComponentProps } from "react"

export type ButtonProps = ComponentProps<'button'> & ComponentProps<'a'> & {
    as?: 'a'
}