import React from "react";
import PropTypes from "prop-types";
import * as d3Shape from "d3-shape";
import { getDomainFromData, getScale } from "../utils/helpers";

const Line = (props) => {
  const { data, range, style = {}, transform } = props;

  const domain = props.domain || getDomainFromData(data);
  const scale = getScale(domain, range);

  const pathFunction = d3Shape
    .line()
    .curve(d3Shape.curveLinear)
    .x((d) => scale.x(d.x))
    .y((d) => scale.y(d.y));

  const defaultStyle = { stroke: "black", fill: "none" };
  const lineStyle = Object.assign({}, defaultStyle, style);

  return (
    <path d={pathFunction(data)} style={lineStyle} transform={transform} />
  );
};

Line.propTypes = {
  data: PropTypes.array,
  domain: PropTypes.object,
  range: PropTypes.object,
  style: PropTypes.object,
  transform: PropTypes.string
};

export default Line;
