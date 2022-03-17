import React from "react";
import SignatureCanvas from "react-signature-canvas";
import { Button } from "react-bootstrap";

const Canvas = () => {
  let sigPad = {};
  const clear = () => {
    sigPad.clear();
  };
  return (
    <div>
      <SignatureCanvas ref={(ref) => { sigPad = ref }}/>
      <Button onClick={clear()}>Clear</Button>
    </div>
  );
};

export default Canvas;
