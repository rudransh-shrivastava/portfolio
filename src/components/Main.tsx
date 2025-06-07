import Header from "./Header";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";

export default function Main() {
  return (
    <div className="w-full max-w-[800px] px-4 py-8">
      <Header />
      <AboutMe />
      {/* <Experience /> */}
      {/* <Projects /> */}
      <Footer />
    </div>
  );
}
