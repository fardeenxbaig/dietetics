import { Header } from "../components/navbar";
import { Footer } from "../components/footer";
import { HealthForm } from "../components/healthform";

export function UserProfile() {
  return (
    <div>
      <Header heading="DietLane" />
      <HealthForm />
      <Footer />
    </div>
  );
}
