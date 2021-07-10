import React, { useState, useEffect } from "react";
import { NutrientOutput } from "./displaynutrients";

export function ImageInput() {
  const [state, setState] = useState({ clicked: true, file: null });

  useEffect(() => {
    if (state.clicked) return <NutrientOutput />;
  });

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
          onChange={(event) =>
            setState(({ file }) => ({
              file: URL.createObjectURL(event.target.files[0])
            }))
          }
          style={{
            position: "relative",
            left: "40%",
            right: "60%",
            paddingBottom: "10px"
          }}
        />
        {/* Check if state.file=true && <Render <img>}*/}
        {Boolean(state.file) && (
          <img src={state.file} alt="food" width="200" height="200" />
        )}
      </div>

      <button
        type="submit"
        class="btn btn-dark"
        onClick={() => setState(({ clicked }) => ({ clicked: true }))}
        style={{ marginTop: "10px", marginBottom: "20px" }}
      >
        Submit Image
      </button>
      {/* Check if state.clicked=true && <Render <NutrientOutput> table}*/}
      {state.clicked && <NutrientOutput />}
    </form>
  );
}
//paddingLeft: "100px"
