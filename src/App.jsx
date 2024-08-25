import { BrowserRouter } from "react-router-dom";
import { Experience, Navbar } from "./components";
import { Education } from "./components/Education";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
          </div>
          <Education/>
          <Experience />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
