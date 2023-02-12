import React = require("react");
// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип


// Hint: infer
export const getDefaultProps = <T>(
  component: React.ComponentType<T>
): Partial<T> | undefined => {
  return component.defaultProps;
};
