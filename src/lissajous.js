import React from "react";
import styled from "styled-components";
import { scaleLinear as scale } from "d3-scale";
import * as d3Shape from "d3-shape";
import { range, sortBy } from "lodash";
import { saveAs } from 'file-saver';


const Wrapper = styled.div`
  padding: 40px 40px;
`;

const xDim = 1000;
const yDim = 1000;

const D = Math.PI / 2;
const a = 3;
const b = 2;

const xScale = scale()
  .range([10, xDim - 10])
  .domain([-1, 1]);
const yScale = scale()
  .range([10, yDim - 10])
  .domain([-1, 1]);

const data = range(0, 100, 0.01).map((t) => ({
  t,
  x: Math.sin(a * t + D),
  y: Math.sin(b * t)
}));
const sortedData = sortBy(data, "t");
const pathFunction = d3Shape
  .line()
  .curve(d3Shape.curveLinear)
  .x((d) => xScale(d.x))
  .y((d) => yScale(d.y));

const Lines = () => {

  const svgRef = React.useRef();

  const handleDownload = () => {
    const element = svgRef.current;
    const serializer = new XMLSerializer();
    const str = serializer.serializeToString(element);
    const svgBlob = new Blob([str], {type: "image/svg+xml"})
    saveAs(svgBlob, "hello.svg")
  }

  return (
    <Wrapper>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${xDim} ${yDim}`}
        style={{ width: "60%", background: "white" }}
      >
        <path d={pathFunction(sortedData)} stroke="black" fill="none" />
      </svg>
      <button onClick={handleDownload}>Download</button>
    </Wrapper>
  );
};

export default Lines;
