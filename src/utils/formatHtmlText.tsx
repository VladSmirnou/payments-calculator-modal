import { type ReactNode, Fragment } from 'react';

export function formatHtmlText(
  strings: TemplateStringsArray,
  ...substitutions: Array<ReactNode>
) {
  return (
    <>
      {strings
        .flatMap((string, index) => {
          return index < substitutions.length ? [string, substitutions[index]] : string;
        })
        .map((element, index) => {
          return <Fragment key={index}>{element}</Fragment>;
        })}
    </>
  );
}
