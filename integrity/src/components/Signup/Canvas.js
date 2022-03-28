import React from "react";
import SignatureCanvas from "react-signature-canvas";
import { Button } from "react-bootstrap";

const Canvas = () => {
  let sigPad = {};
  const clear = () => {
    sigPad.clear();
  };
  return (
    <div className="sigCanvas">
      <SignatureCanvas canvasProps={{width: 500, height: 200}}
          ref={(ref) => { sigPad = ref }} />
      <Button onClick={clear}>Clear Signature</Button>
    </div>
  );
};

export default Canvas;
