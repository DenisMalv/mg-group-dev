import React from "react";
import iconssprite from "../../img/icons/icon-sprite.svg";

const Icon = ({ name, color, stroke, width, height, classlist,id }) => (
  <svg className={classlist} id={id} color={color} stroke={stroke} width={width} height={height}>
    <use xlinkHref={`${iconssprite}#${name}`} />
  </svg>
);

export default Icon