import React from "react";
import SignatureCanvas from "react-signature-canvas";
import { Button } from "react-bootstrap";
import StyledButton from "../../Styles/StyledButton";

const Canvas = () => {
  let sigPad = {};
  const clear = () => {
    sigPad.clear();
  };
  return (
    <div className="sigCanvas">
      <SignatureCanvas
        canvasProps={{ width: 300, height: 200 }}
        ref={(ref) => {
          sigPad = ref;
        }}
      />
      <StyledButton>
        <Button className="button custom-btn btn-6" onClick={clear}>
          Clear Signature
        </Button>
      </StyledButton>
    </div>
  );
};

export default Canvas;
