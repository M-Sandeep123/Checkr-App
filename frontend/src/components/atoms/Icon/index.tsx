import React from "react";
import { IMAGE_NOT_FOUND } from "../../../constants";
export interface IconProps {
  src: string;
  alt?: string;
  style?: React.CSSProperties;
  onclick?: () => void;
}
const Icon = ({ src, alt, style, onclick }: IconProps) => {
  return <img src={src} alt={alt ? alt : IMAGE_NOT_FOUND} style={style} onClick={onclick} />;
};

export default Icon; 
