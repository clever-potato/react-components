import { ReactElement } from "react";

import { Potato, PotatoProps } from "./potato";

import styles from "./input-container.module.css";
import clsx from "clsx";

export interface InputContainerProps extends PotatoProps {}

export function InputContainer({ as, children, className, ...rest }: InputContainerProps): ReactElement {
  return (
    <Potato as={as} className={clsx(styles.inputContainer, className)} {...rest}>
      {children}
    </Potato>
  );
}
