import React from "react";
import SignatureCanvas from "react-signature-canvas";
import { Button } from "react-bootstrap";
import StyledButton from "../../Styles/StyledButton";
import styled from "styled-components";

const StyledCanvas = styled.div`
  border: 2px solid #040404;
  padding: 0;
  background-color: #fff;
`;

const Canvas = () => {
  let sigPad = {};
  const clear = () => {
    sigPad.clear();
  };
  return (
    <>
      <StyledCanvas>
        <div className="sigCanvas">
          <SignatureCanvas
            canvasProps={{ width: 300, height: 200 }}
            ref={(ref) => {
              sigPad = ref;
            }}
          />
        </div>
      </StyledCanvas>
      <StyledButton className="p-0 m-1">
        <Button className="button custom-btn btn-6" onClick={clear}>
          Clear Signature
        </Button>
      </StyledButton>
    </>
  );
};

export default Canvas;
