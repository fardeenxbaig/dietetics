import "./styles.css";

import { Header } from "./components/navbar.js";
import { Footer } from "./components/footer.js";
import { HealthForm } from "./components/healthform.js";
import { ImageInput } from "./components/enterimage.js";

export default function App() {
  return (
    <div className="App">
      <Header heading="DietLane" />
      <div style={{ padding: "30px", paddingBottom: "30px" }}>
        <h1 style={{ fontWeight: "bold" }}>Hello from DietLane</h1>
        <h2>Your ultimate food tracking app!</h2>
      </div>
      <HealthForm />
      <ImageInput />
      <Footer />
    </div>
  );
}
