import React, { useState, useCallback } from "react";
import { Form, InputGroup } from "react-bootstrap";

import { NutrientOutput } from "./displaynutrients";

export function ImageInput() {
  const [state, setState] = useState({ clicked: false, file: null });
  const [profile, setProfile] = useState([]);

  const handleClick = useCallback(async () => {
    setState({ clicked: true, file: state.file });

    let reader = new FileReader();
    let uploadFile;
    reader.readAsDataURL(state.file);
    reader.onload = () => (uploadFile = reader.result);
    //setState({ file: reader.result });   //JSON.stringify(state.file)

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(uploadFile)
    };

    const response = await fetch("/uploadimage", requestOptions);
    const data = await response.json();
    if (response.ok) {
      console.log("response worked");
      setProfile(data.foodprofile);
      setState({ clicked: true });
    }
  }, [state.file]);

  return (
    <Form>
      <h4
        style={{
          fontWeight: "bold",
          paddingTop: "70px",
          paddingBottom: "10px"
        }}
      >
        Upload Your Food Plate
      </h4>

      {/* <label>Browse Image</label>
          className="row justify-content-center"
          className="form-control-file"
          form-inline col-offset-6 centered */}
      <Form.Group>
        <Form.File
          custom
          className="col-lg-4"
          label="Select food plate image..."
          type="file"
          onChange={(event) =>
            setState(({ file }) => ({ file: event.target.files[0] }))
          }
        />
      </Form.Group>

      {/* Check if state.file=true && <Render <img>}*/}
      {Boolean(state.file) && (
        <img
          src={URL.createObjectURL(state.file)}
          alt="food"
          width="150"
          height="100"
        />
      )}

      <Form.Group>
        <button
          type="button"
          class="btn btn-dark"
          onClick={handleClick}
          style={{ marginTop: "20px" }}
        >
          Submit Image
        </button>
      </Form.Group>

      {/* Check if state.clicked=true && <Render <NutrientOutput> table}*/}
      {state.clicked && <NutrientOutput profile={profile} />}
    </Form>
  );
}
//paddingLeft: "100px"

/*
          style={{
            position: "relative",
            left: "45%",
            right: "65%",
            paddingBottom: "10px"
          }}
*/
