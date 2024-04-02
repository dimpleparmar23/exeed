import React from 'react';

function Assess() {
  const pdfPath = process.env.PUBLIC_URL + '/CS_GATE2022.pdf';

  return (
    <div>
      <h2>PDF Viewer</h2>
      <embed src={pdfPath} type="application/pdf" width="100%" height="600px" />
    </div>
  );
}

export default Assess;
