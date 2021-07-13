import React, { useState, useCallback } from "react";
import { NutrientOutput } from "./displaynutrients";

export function ImageInput() {
  const [state, setState] = useState({ clicked: false, file: null });
  const [profile, setProfile] = useState([]);

  const handleClick = useCallback(async () => {
    setState({ clicked: true, file: state.file });
    /*
    let reader = new FileReader();
    reader.readAsDataURL(state.file);
    reader.onload = () => {
      setState({ file: reader.result });
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state.file)
    };

    const response = await fetch("/uploadimage", requestOptions);
    const data = await response.json();
    if (response.ok) {
      console.log("response worked");
      setProfile(data.foodprofile);
      setState({ clicked: true });
    }
    */
  }, [state.file]);

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
            setState(({ file }) => ({ file: event.target.files[0] }))
          }
          style={{
            position: "relative",
            left: "45%",
            right: "65%",
            paddingBottom: "10px"
          }}
        />

        {/* Check if state.file=true && <Render <img>}*/}
        {Boolean(state.file) && (
          <img
            src={URL.createObjectURL(state.file)}
            alt="food"
            width="150"
            height="100"
          />
        )}
      </div>

      <button
        type="button"
        class="btn btn-dark"
        onClick={handleClick}
        style={{ marginTop: "10px", marginBottom: "20px" }}
      >
        Submit Image
      </button>

      {/* Check if state.clicked=true && <Render <NutrientOutput> table}*/}
      {state.clicked && <NutrientOutput profile={profile} />}
    </form>
  );
}
//paddingLeft: "100px"
