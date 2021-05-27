import "./styles.css";

import { Header } from "./components/navbar.js";
import { Footer } from "./components/footer.js";
import { HealthForm } from "./components/healthform.js";
import { ImageInput } from "./components/enterimage.js";
import { Welcome } from "./components/intro.js";

export default function App() {
  return (
    <div className="App">
      <Welcome />
      <Header heading="DietLane" />
      <HealthForm />
      <ImageInput />
      <Footer />
    </div>
  );
}
