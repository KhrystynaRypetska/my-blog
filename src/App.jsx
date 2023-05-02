import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CTA from "./components/CTA";

function App() {
  return (
    <>
        <Header/>
        <main>
            <CTA/>
            <Hero/>
        </main>

        <Footer/>
    </>
  )
}

export default App;
