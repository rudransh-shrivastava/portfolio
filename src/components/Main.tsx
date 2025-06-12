import Header from "./Header";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import AnimatedWrapper from "./AnimatedWrapper";
import Experience from "./Experience";

export default function Main() {
  return (
    <div className="w-full max-w-[800px] px-4 py-8">
      <AnimatedWrapper>
        <Header />
        <AboutMe />
        <Experience />
        {/* <Projects /> */}
        <Footer />
      </AnimatedWrapper>
    </div>
  );
}
