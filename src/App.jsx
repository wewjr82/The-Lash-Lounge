import "./index.css";
import Header from "./componants/Header/Header";
import Hero from "./componants/Hero/Hero";
import Introduction from "./componants/Introduction/Introduction";
import Gallery from "./componants/Gallery/Gallery";
import FAQ from "./componants/FAQ/FAQ";
import Contact from "./componants/Contact/Contact";
import Footer from "./componants/Footer/Footer";

function App() {
  return (
    <div className="App bg-gray-700">
      <Header />
      <Hero />
      <Introduction />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
