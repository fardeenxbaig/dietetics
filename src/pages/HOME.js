import { Header } from "../components/navbar";
import { Footer } from "../components/footer";
import { Hello } from "../components/intro";
import { Welcome } from "../components/welcome";

export function Home() {
  return (
    <div>
      <Header heading="DietLane" />
      <Hello />
      {/*<Welcome />*/}
      <Footer />
    </div>
  );
}
