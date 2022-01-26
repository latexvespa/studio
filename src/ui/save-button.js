import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { saveAs } from "file-saver";

const Wrapper = styled.div`
  padding: 40px 40px;
`;

const SaveButton = React.forwardRef((props, ref) => {
  const handleDownload = () => {
    const element = ref.current;
    const serializer = new XMLSerializer();
    const str = serializer.serializeToString(element);
    const svgBlob = new Blob([str], {type: "image/svg+xml"})
    saveAs(svgBlob, `${props.fileName || "test"}.svg`);
  }

  return (
    <Wrapper>
      <button onClick={handleDownload}>Download</button>
    </Wrapper>
  );
});

SaveButton.displayName = "SaveButton";
SaveButton.propTypes = {
  fileName: PropTypes.string
}


export default SaveButton;
