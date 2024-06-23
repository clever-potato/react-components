import { ElementType, HTMLAttributes, ReactElement, ReactNode, createElement } from "react";

export interface PotatoProps extends HTMLAttributes<HTMLElement> {
    as: string | ElementType;
    children?: ReactNode;
}

export function Potato({
    as,
    children,
    ...props
}: PotatoProps): ReactElement {
    return createElement(as, props, children);
}