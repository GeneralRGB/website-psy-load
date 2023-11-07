import Header from "./Header/Header";
import Preview from "./Preview/Preview";
import "./App.css";
import Songs from "./Songs/Songs";
import About from "./About/About";

function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Preview />
        <Songs />
        <About />
      </main>
    </>
  );
}

export default App;
