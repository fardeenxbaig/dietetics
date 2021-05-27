import React from "react";

export function ImageInput() {
  return (
    <form>
      <h4 style={{ fontWeight: "bold", paddingTop: "40px" }}>
        Upload Your Food Plate
      </h4>

      <div className="form-group">
        <label>Browse Image</label>
        <input
          type="file"
          className="form-control-file"
          style={{
            position: "relative",
            left: "50%",
            right: "50%"
          }}
        />
      </div>

      <button type="submit" class="btn btn-dark">
        Submit Image
      </button>
    </form>
  );
}
//paddingLeft: "100px"
