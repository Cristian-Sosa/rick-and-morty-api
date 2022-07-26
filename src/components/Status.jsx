import { useState } from "react";

function StatusCharacter({ status, species }) {

    if (status == 'unknown') {
        return (
            <div className="d-flex justify-content-start align-items-center">
              <div
                className="me-2 bg-secondary border border-secondary rounded-pill"
                style={{ width: "10px", height: "10px" }}
              ></div>
              <span className="text-white-50 text-center">
                Unknown - {species}
              </span>
            </div>
          );      
    } else {
        return (
            <div className="d-flex justify-content-start align-items-center">
              <div
                className={`me-2 border rounded-pill ${
                  status == 'Alive' && status !== 'Unknown' 
                    ? "bg-success border-success"
                    : "bg-danger border-danger"
                }`}
                style={{ width: "10px", height: "10px" }}
              ></div>
              <span className="text-white-50 text-center">
                {status} - {species}
              </span>
            </div>
          );
    }
}

export default StatusCharacter;
