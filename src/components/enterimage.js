import React, { useState, useEffect, useForm } from "react";
import { Form } from "react-bootstrap";
import { NutrientOutput } from "./displaynutrients";

async function convertFile(file) {
  let reader = new FileReader();
  let uploadFile = {};
  reader.onload = (r) => {
    console.log(r.target.result);
    const base64StringFile = reader.result
      .replace("data:", "")
      .replace(/^.+,/, "");
    //setUploadFile({ image: base64StringFile });
    uploadFile = { image: base64StringFile };
    console.log(uploadFile);
    return uploadFile;
  };
  reader.readAsDataURL(file);
}

async function getProfile(uploadFile) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(uploadFile)
  };
  console.log(requestOptions);
  console.log(uploadFile);
  // ////////////////////
  const response = await fetch(
    `https://78b72706e351.ngrok.io/uploadimage`,
    requestOptions
  );
  if (response.ok) {
    console.log("response worked");
    //const data = await response.json();
    return await response.json();
  }
}

// "proxy": "https://5624f9b28c77.ngrok.io",
export function ImageInput() {
  //const [state, setState] = useState({ clicked: false, file: null });
  const [file, setFile] = useState();
  const [uploadFile, setUploadFile] = useState({});
  const [click, setClick] = useState(false);
  const [profile, setProfile] = useState([]);
  //const { register, handleSubmit } = useForm();

  useEffect(async () => {
    //async function convertFile() {
    if (Boolean(file)) {
      const convertedFile = convertFile(file);
      console.log(convertedFile);
      setUploadFile(convertFile);
      const data = getProfile(uploadFile);
      setProfile(data.profile);
      console.log(data.profile);
    } else {
      setProfile([]);
    }
  }, [file, uploadFile]);

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
          onClick={() => setClick(true)}
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
