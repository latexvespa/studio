import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { saveAs } from "file-saver";
import Canvg, { presets } from "canvg";


const Wrapper = styled.div`
  padding: 40px 40px;
`;

const PngSaveButton = React.forwardRef((props, ref) => {
  const handleDownload = async () => {
    const element = ref.current;
    const serializer = new XMLSerializer();
    const str = serializer.serializeToString(element);
    const canvas = new OffscreenCanvas(element.clientHeight, element.clientWidth);
    const ctx = canvas.getContext("2d");
    const v = await Canvg.from(ctx, str, presets.offscreen());

    // Render only first frame, ignoring animations and mouse.
    await v.render();

    const blob = await canvas.convertToBlob();
    saveAs(blob, `${props.fileName || "test"}.png`);
  }

  return (
    <Wrapper>
      <button onClick={handleDownload}>Download As PNG</button>
    </Wrapper>
  );
});

PngSaveButton.displayName = "SaveButton";
PngSaveButton.propTypes = {
  fileName: PropTypes.string
}


export default PngSaveButton;
