import React, { useState, useEffect } from "react";
import { NutrientOutput } from "./displaynutrients";

export function ImageInput() {
  const [state, setState] = useState({ clicked: false, file: null });
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch("/uploadimage")
      .then((response) => response.json())
      .then((data) => {
        setProfile(data.foodprofile);
      });
  }, []);

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
        onClick={(event) =>
          setState(({ clicked }) => ({ clicked: true, file: state.file }))
        }
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

/*
# ORIGINAL BUTTON CLICK
<button
        type="submit"
        class="btn btn-dark"
        onClick={(event) =>
          setState(({ clicked }) => ({ clicked: true, file: state.file }))
        }
        style={{ marginTop: "10px", marginBottom: "20px" }}
      >
#########################################
# USEEFFECT TO FETCH DATA
  useEffect(() => {
    fetch("/uploadimage")
      .then((response) => response.json())
      .then((data) => {
        setProfile(data.foodprofile);
      });
  }, []);
########################################
# DEMO BUTTON
<Button
	onClick = { async() => {
		const movie = {title, rating};
		const response = await fetch("/add_movie", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(movie)
			});
		if (response.ok) {
      console.log("response worked");
			}
		}
  }> submit </ Button>
  ##############################
  # HOW MY BUTTON SHOULD BE
  onClick = { async() => {
		const response = await fetch("/uploadimage", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(state.file)
			});
		if (response.ok) {
			console.log("response worked");
			response.json().then((data) => { setProfile(data.foodprofile); })
		}
		setState(({ clicked }) => ({ clicked: true }))
	}
*/
