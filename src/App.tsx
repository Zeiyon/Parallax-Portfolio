import "./App.css";
import "./index.css";
import TimelineComponent from "./components/timeline/Timeline";
import ProjectsComponent from "./components/projects/Projects";
import SkillsComponent from "./components/skills/Skills";
import ContactComponent from "./components/contact/Contact";
import FooterComponent from "./components/footer/Footer";
import layer1 from "./assets/imgs/layer1.png";
import layer2 from "./assets/imgs/layer2.png";
import layer3 from "./assets/imgs/layer3.png";
import layer4 from "./assets/imgs/layer4.png";
import layer5 from "./assets/imgs/layer5.png";
import layer6 from "./assets/imgs/layer6.png";
import layer7 from "./assets/imgs/layer7.png";
import layer8 from "./assets/imgs/layer8.png";
import layer9 from "./assets/imgs/layer9.png";
import layer10 from "./assets/imgs/layer10.png";
import layer11 from "./assets/imgs/layer11.png";
import layer12 from "./assets/imgs/layer12.png";
import layer13 from "./assets/imgs/layer13.png";
// import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="parallax min-w-[350px]">
        <div className="parallax_layer parallax_layer_15">
          <img src={layer13} />
        </div>
        <div className="parallax_layer parallax_layer_12">
          <img src={layer12} />
        </div>
        <div className="parallax_layer parallax_layer_9">
          <img src={layer11} />
        </div>
        <div className="parallax_layer parallax_layer_9">
          <img src={layer10} />
        </div>
        <div className="parallax_layer parallax_layer_9">
          <img src={layer9} />
        </div>
        <div className="parallax_layer parallax_layer_9">
          <img src={layer8} />
        </div>
        <div className="parallax_layer parallax_layer_8">
          <img src={layer7} />
        </div>
        <div className="parallax_layer parallax_layer_6 flex justify-center items-end mb-[18vw]">
          <h1 className="lg:text-[40vh] text-center font-bold text-white hidden lg:block">
            TALHA
          </h1>
        </div>
        <div className="parallax_layer parallax_layer_7 flex justify-center items-end mb-[280px] lg:hidden">
          <h1 className="text-[28vw] text-center font-bold text-white">
            TALHA
          </h1>
        </div>
        <div className="parallax_layer parallax_layer_6">
          <img src={layer6} />
        </div>
        <div className="parallax_layer parallax_layer_5">
          <img src={layer5} />
        </div>
        <div className="parallax_layer parallax_layer_4">
          <img src={layer4} />
        </div>
        <div className="parallax_layer parallax_layer_3">
          <img src={layer3} />
        </div>
        <div className="parallax_layer parallax_layer_2">
          <img src={layer2} />
        </div>
        <div className="parallax_layer parallax_layer_1">
          <div className="scroll-down mt-[92vh]"></div>
          <img src={layer1} />
        </div>

        <div className="parallax_cover flex justify-center">
          <div className="block w-[85vw]">
            <div className="flex flex-col items-center">
              <TimelineComponent />

              <SkillsComponent />

              <ProjectsComponent />

              <ContactComponent />
            </div>
            <FooterComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
