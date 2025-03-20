import { useRef, useState } from "react";
import { REPLACE_INNER_SPACES } from "patterns/patterns";

export const usePositionCursor = () => {
    const [spacesAmount, setSpacesAmount] = useState<number>(0);
    const ref = useRef<HTMLInputElement>(null);

    const setRefValue = ({startPos, endPos}: {startPos: number, endPos: number}) => {
        if (ref.current) {
            ref.current.setSelectionRange(startPos, endPos);
        }
    }

    return [
        ref,
        (selectionEnd: number, value: string, inputValue: string, formattedRubs: string) => queueMicrotask(() => {
            let offset = selectionEnd!;

            if (value.length - inputValue.length > 1) {
                setRefValue({startPos: offset, endPos: offset})
                return
            }

            const matchArr = formattedRubs.match(REPLACE_INNER_SPACES);
            const currentSpacesLength = matchArr?.length || 0;

            if (currentSpacesLength !== 0) {
                if (offset < 0) {
                    offset = 0;
                } else if (currentSpacesLength > spacesAmount) {
                    offset += 1;
                } else if (currentSpacesLength < spacesAmount) {
                    offset -= 1
                }
            } else if (currentSpacesLength === 0 && value.replace(REPLACE_INNER_SPACES, ' ').includes(' ')) {
                // когда остается последний пробел.
                // форматер добалвяет не \s, а &nbsp;, который убирается как '\s'.
                offset -= 1
            }

            setRefValue({startPos: offset, endPos: offset})
            setSpacesAmount(currentSpacesLength)
        })
    ] as const;
}