import { Header } from "../components/navbar";
import { Footer } from "../components/footer";
import { ImageInput } from "../components/enterimage";
//import { NutrientOutput } from "../components/displaynutrients";
//import { Welcome } from "../components/welcome";

export function FoodAssessment() {
  return (
    <div>
      <Header heading="DietLane" />
      <ImageInput />
      {
        //<NutrientOutput />
        //<Welcome />
      }
      <Footer />
    </div>
  );
}
