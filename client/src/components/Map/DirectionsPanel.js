import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

export const DirectionsPanel = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div id="accordion">
        <div className="card p-2 mb-1" style={{ "backgroundColor": "#0E6DFD"}}  >
          <div className="" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link p-0"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-text-directions"
                aria-expanded={open}
                style={{ "color": "white"}}
              >
                Directions - Step by Step
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
