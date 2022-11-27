import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

export const DirectionsPanel = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-text-directions"
                aria-expanded={open}
              >
                Text Directions
              </button>
            </h5>
          </div>

          <Collapse in={open}>
            <div id="collapse-search-bar">
              <div id="panel" className="card-body pt-0"></div>
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
};
