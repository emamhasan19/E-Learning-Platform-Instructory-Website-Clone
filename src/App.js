import "./App.css";
import Hero from "./Components/Hero/hero";
import Search from "./Components/Search/search";
import Courses from "./Components/Courses/courses";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div>
      <Hero />
      <Search />
      <Courses title="INSTRUCTOR'S COMPETITION" />
      <Courses title="NEWLY LAUNCHED COURSE" />
      <Footer />
    </div>
  );
}

export default App;
