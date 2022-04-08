import React, { ReactElement } from "react"

// thx arco
export const processChildren = (
  children,
  props,
): Array<Exclude<unknown, boolean | null | undefined>> => {
  return React.Children.map(children, (item, index) => {
    if (!item || !item.props) {
      return item
    }

    const isHTMLElement = typeof item.type === "string"
    const isMenuSubComponent = item.type && item.type.menuType

    // Handling MenuSubComponent that may wrap by other element. e.g <div>
    if (!isMenuSubComponent && item.props.children) {
      const _props = isHTMLElement ? {} : props

      return React.cloneElement(item, {
        ..._props,
        _key: item.key,
        children: processChildren(item.props.children, props),
      })
    }

    return isHTMLElement
      ? item
      : React.cloneElement(item, {
        ...props,
        // Properties of the component itself have higher priority
        ...item.props,
        _key: item.key || `$menu-${index}`,
      })
  })
}
