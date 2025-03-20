export type SingleOptionSettingsProps<T> = {
    title: string
    options: Array<T>
    onOptionChange: (option: T) => void
    activeOption: T
    activeOptionClass: string
    additionalClasses?: {
        container?: string
        block?: string
    }
}
