/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, ChangeEvent, useContext } from "react"
import { OptionProps, SelectProps } from "./interface"
import { applyMergeCss, applyOptionStyle, applyRadioSize } from "./style"
import { omit, useMergeValue } from "@illa-design/system"

export const Option = forwardRef<HTMLLIElement, OptionProps>((props, ref) => {
  const { children, disabled, value, defaultValue, onChange, ...otherProps } =
    props

  const [currentValue, setCurrentValue] = useMergeValue(undefined, {
    value: value,
    defaultValue: defaultValue,
  })

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist()
  }

  return (
    <li css={applyOptionStyle} ref={ref}>
      {children}
    </li>
  )
})

Option.displayName = "Option"
