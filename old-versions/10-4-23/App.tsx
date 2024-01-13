import "./App.css";
import "./index.css";
import TimelineComponent from "./components/timeline/Timeline";
import ProjectsComponent from "./components/projects/Projects";
import SkillsComponent from "./components/skills/Skills";
import FooterComponent from "./components/footer/Footer";

function App() {
  return (
    <div className="parallax min-w-[350px]">
      <div className="parallax__layer parallax__layer__0">
        <img
          src="https://raw.githubusercontent.com/tashikomaaa/ParallaxFireWatch/master/images/layer_0.png"
          alt="Layer 0"
        />
      </div>
      <div className="parallax__layer parallax__layer__1">
        <img
          src="https://raw.githubusercontent.com/tashikomaaa/ParallaxFireWatch/master/images/layer_1.png"
          alt="Layer 1"
        />
      </div>
      <div className="parallax__layer parallax__layer__logo">
        <img
          src="https://raw.githubusercontent.com/tashikomaaa/ParallaxFireWatch/master/images/logo.png"
          alt="Logo"
        />
      </div>
      <div className="parallax__layer parallax__layer__2">
        <img
          src="https://raw.githubusercontent.com/tashikomaaa/ParallaxFireWatch/master/images/layer_2.png"
          alt="Layer 2"
        />
      </div>
      <div className="parallax__layer parallax__layer__3">
        <img
          src="https://raw.githubusercontent.com/tashikomaaa/ParallaxFireWatch/master/images/layer_3.png"
          alt="Layer 3"
        />
      </div>
      <div className="parallax__layer parallax__layer__4">
        <img
          src="https://raw.githubusercontent.com/tashikomaaa/ParallaxFireWatch/master/images/layer_4.png"
          alt="Layer 4"
        />
      </div>
      <div className="parallax__layer parallax__layer__5">
        <img
          src="https://raw.githubusercontent.com/tashikomaaa/ParallaxFireWatch/master/images/layer_5.png"
          alt="Layer 5"
        />
      </div>
      <div className="parallax__layer parallax__layer__6">
        <img
          src="https://raw.githubusercontent.com/tashikomaaa/ParallaxFireWatch/master/images/layer_6.png"
          alt="Layer 6"
        />
      </div>
      <div className="parallax__cover flex justify-center w-full">
        <div className="block">
          <div className="flex flex-col items-center w-full px-64">
            <TimelineComponent />

            <SkillsComponent />

            <ProjectsComponent />
          </div>
          <FooterComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
