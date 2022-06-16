import Header from "./components/Header";
import Hero from "./components/Hero-section";

import { CountryNameProvider } from "./CountryNameContext";

function App() {
  return (
    <div className="App">
      <Header />
      <CountryNameProvider>
        <Hero />
      </CountryNameProvider>
    </div>
  );
}

export default App;
