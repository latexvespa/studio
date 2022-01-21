import React from "react";
import styled from "styled-components";
import SaveButton from "../ui/save-button";
import { getLissajousData } from "../utils/data";
import Line from "../primitives/line";
import { getRange } from "../utils/helpers";
import { range, random } from "lodash";

const Wrapper = styled.div`
  padding: 40px 40px;
`;

const xDim = 1000;
const yDim = 1000;
const padding = 155;

const Lines = () => {

  const svgRef = React.useRef();
  const svgRange = getRange(xDim, yDim, padding);
  const domain = {x: [-1, 1], y: [-1, 1]};
  return (
    <Wrapper>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${xDim} ${yDim}`}
        style={{ width: "60%", background: "white" }}
      >
      <g transform="translate(-100 -150)">
        {range(0, 100, 1).map((a) => {
          return (
              <Line
                key={a}
                range={svgRange}
                domain={domain}
                data={getLissajousData({ a: 4 })}
                transform={`translate(${a * 2} ${a * 3})`}
              />
            );
        })}
      </g>
      </svg>
      <SaveButton ref={svgRef} fileName={`lissajous-${Date.now()}`}/>
    </Wrapper>
  );
};

export default Lines;
