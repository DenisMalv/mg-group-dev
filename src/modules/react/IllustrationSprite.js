import React from "react";
import illustrationsprite from "../../img/illustrations/illustrations-combine.svg";

const Illustration = ({ name, color, stroke, width, height, classlist,id}) => (
  <svg className={classlist} id={id} color={color} stroke={stroke} width={width} height={height}>
    <use xlinkHref={`${illustrationsprite}#${name}`} />
  </svg>
);

export default Illustration