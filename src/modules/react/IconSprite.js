import React from "react";
import iconssprite from "../../img/icons/icon-sprite.svg";

const Icon = ({ name, color, width, height, classlist }) => (
  <svg className={classlist} color={color} width={width} height={height}>
    <use xlinkHref={`${iconssprite}#${name}`} />
  </svg>
);

export default Icon