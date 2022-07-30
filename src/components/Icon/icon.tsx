import classNames from "classnames";
import React, { FC } from "react";

interface IconProps extends React.AnchorHTMLAttributes<HTMLElement> {
  icon: string;
  size?: string | number;
}
const Icon: FC<IconProps> = ({ icon, size, className, ...restProps }) => {
  return (
    <i
      style={{ fontSize: `${size}px` }}
      className={classNames(`b-font-${icon}`, className)}
      {...restProps}
    />
  );
};

export default Icon;
