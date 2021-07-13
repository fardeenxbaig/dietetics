import React, { useState, useRef, useCallback, useEffect } from "react";
import { NutrientOutput } from "./displaynutrients";

export function ImageInput() {
  const [state, setState] = useState({ clicked: false, file: null });
  const [profile, setProfile] = useState([]);

  /*
  const isClick = useRef(true);
  //const [click, setClick] = useState(false);
  //setState(({ clicked }) => ({ clicked: true }))

  const handleClick = useCallback(() => {
    setState({ clicked: true });
  }, []);

  useEffect(() => {
    if (isClick.current) {
      isClick.current = false;
      return;
    } }, [state.clicked]);
    */

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
            left: "40%",
            right: "60%",
            paddingBottom: "10px"
          }}
        />

        {/* Check if state.file=true && <Render <img>}*/}
        {Boolean(state.file) && (
          <img
            src={URL.createObjectURL(state.file)}
            alt="food"
            width="300"
            height="200"
          />
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
      {state.clicked && <NutrientOutput profile={profile} />}
    </form>
  );
}
//paddingLeft: "100px"

/*
######################## ORIGINAL BUTTON CLICK
      <button
        type="submit"
        class="btn btn-dark"
        onClick={(event) =>
          setState(({ clicked }) => ({ clicked: true, file: state.file }))
        }
        style={{ marginTop: "10px", marginBottom: "20px" }}
      >
##################### USEEFFECT TO FETCH DATA
  useEffect(() => {
    fetch("/uploadimage")
      .then((response) => response.json())
      .then((data) => {
        setProfile(data.foodprofile);
      });
  }, []);
  ##############################
  # FINAL BUTTON
        <button
        type="submit"
        class="btn btn-dark"
        onClick={ async() => {
		      let reader = new FileReader();
		      reader.readAsDataURL(state.file);
		      reader.onload = () => { setState({file: reader.result}) };

		      const requestOptions = {
			      method: "POST",
			      headers: {"Content-Type": "application/json"},
			      body: JSON.stringify(state.file)
			      };

		      const response = await fetch("/uploadimage", requestOptions);
		      const data = await response.json();
		      if (response.ok) {
			      console.log("response worked");
			      setProfile(data.foodprofile);
			      setState(({ clicked }) => ({ clicked: true }));
		      }
	      }
        style={{ marginTop: "10px", marginBottom: "20px" }}
      >
*/
