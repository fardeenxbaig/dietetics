import React, { useState, useCallback } from "react";
import { Form } from "react-bootstrap";
import { NutrientOutput } from "./displaynutrients";

// "proxy": "https://5624f9b28c77.ngrok.io",
export function ImageInput() {
  //const [state, setState] = useState({ clicked: false, file: null });
  const [file, setFile] = useState();
  const [uploadFile, setUploadFile] = useState({});
  const [click, setClick] = useState(false);
  const [profile, setProfile] = useState([]);
  //const { register, handleSubmit } = useForm();

  const handleClick = useCallback(async () => {
    let reader = new FileReader();
    //let uploadFile = {};
    reader.onload = (r) => {
      console.log(r.target.result);
      const base64StringFile = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      setUploadFile({ image: base64StringFile });
    };
    reader.readAsDataURL(file);
    console.log(uploadFile);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(uploadFile)
    };
    console.log(requestOptions);

    const response = await fetch(
      "https://bf796815c895.ngrok.io/uploadimage",
      requestOptions
    );
    if (response.ok) {
      console.log("response worked");
      const data = await response.json();
      console.log(data.foodprofile);
      setProfile(data.foodprofile);
      setClick(true);
    }
  });

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
          onChange={(event) => setFile(event.target.files[0])}
        />
      </Form.Group>

      {/* Check if state.file=true && <Render <img>}*/}
      {Boolean(file) && (
        <img
          src={URL.createObjectURL(file)}
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
      {click && <NutrientOutput profile={profile} />}
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
