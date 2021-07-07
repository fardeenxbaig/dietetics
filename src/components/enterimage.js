import React, { useState } from "react";
import { NutrientOutput } from "./displaynutrients";

export function ImageInput() {
  const [state, setState] = useState({ clicked: true });
  return (
    <form>
      <h4
        style={{
          fontWeight: "bold",
          paddingTop: "70px",
          paddingBottom: "10px"
        }}
      >
        Upload Your Food Plate
      </h4>

      <div className="form-group">
        <label>Browse Image</label>
        <input
          type="file"
          className="form-control-file"
          style={{
            position: "relative",
            left: "40%",
            right: "60%"
          }}
        />
      </div>

      <button
        type="submit"
        class="btn btn-dark"
        onClick={() => setState(({ clicked }) => ({ clicked: true }))}
        style={{ marginTop: "10px", marginBottom: "20px" }}
      >
        Submit Image
      </button>

      {state.clicked && <NutrientOutput />}
    </form>
  );
}
//paddingLeft: "100px"
