import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import myNovaProfessors from "../assets/imgs/projects/novaProfessors.png";
import portfolio from "../assets/imgs/projects/portfolio.png";
import mcBuilds from "../assets/imgs/projects/mcbuilds.png";
import cartelTheme from "../assets/imgs/projects/cartelTheme.png";
import dailyRewards from "../assets/imgs/projects/dailyRewards.jpg";

function ProjectsComponent() {
  return (
    <>
      <p className="self-start text-white m-3 text-slate-200 mt-28 mb-1">
        Things I created
      </p>
      <h2 className="self-start text-5xl text-white font-extrabold m-3 mt-0">
        My Projects
      </h2>
      <p className="self-start  text-white m-3 max-w-[36rem] text-slate-200 mb-12">
        Take a look at my personal creations. Each project reflects my
        dedication, creativity, and passion. They offer a glimpse into my
        capabilities and the problems I've sought to solve
      </p>

      <div className="flex flex-wrap justify-center max-w-[96rem]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.5 },
          }}
        >
          <div className="flex-initial rounded-xl bg-black p-4 h-auto w-full sm:w-80 md:w-96 m-4 hover:shadow-md hover:scale-105 transition-transform transition-shadow duration-300">
            <img
              className="rounded-xl"
              src="https://placehold.co/400x300/"
              alt="NotePal"
            />
            <div className="flex justify-between my-2">
              <h3 className="text-xl text-white font-bold">
                NotePal | Note Generator
              </h3>
              <div>
                <a
                  href="https://github.com/Zeiyon/NotePal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className=""
                    icon={faGithub}
                    size="xl"
                    style={{ color: "#ffffff" }}
                  />
                </a>
                <a
                  href="https://note.pal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="ml-2"
                    icon={faLink}
                    size="lg"
                    style={{ color: "#ffffff" }}
                  />
                </a>
              </div>
            </div>

            <p className="text-white mb-2 text-slate-200">
              Developed an online notepad for immediate note-taking, initiating
              with a blank note. Integrated advanced code formatting & CRUD.
              Used Angular & .NET Core for secure user authentication & data
              storage
            </p>
            <h5 className="text-red-500 inline-block">#angular&nbsp;</h5>
            <h5 className="text-purple-500 inline-block">
              #asp.net core&nbsp;
            </h5>
            <h5 className="text-blue-500 inline-block">#tailwind&nbsp;</h5>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.5 },
          }}
        >
          <div className="flex-initial rounded-xl bg-black p-4 h-auto w-full sm:w-80 md:w-96 m-4 hover:shadow-md hover:scale-105 transition-transform transition-shadow duration-300">
            <img
              className="rounded-xl"
              src={myNovaProfessors}
              alt="MyNovaProfessors"
            />
            <div className="flex justify-between my-2">
              <h3 className="text-xl text-white font-bold">MyNovaProfessors</h3>
              <div>
                <a
                  href="https://github.com/Zeiyon/MyNovaProfessorsWebsite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="xl"
                    style={{ color: "#ffffff" }}
                  />
                </a>
                <a
                  href="https://mynovaprofessors.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="ml-2"
                    icon={faLink}
                    size="lg"
                    style={{ color: "#ffffff" }}
                  />
                </a>
              </div>
            </div>
            <p className="text-white mb-2 text-slate-200">
              Chrome extension utilizing GraphQL API to pull data from
              RateMyProfessor. Displays crucial info on hover through a detailed
              GUI popup. Streamlines process, allowing users to rapidly select
              professors without the need for excessive tab navigation
            </p>
            <h5 className="text-yellow-500 inline-block">#jquery&nbsp;</h5>
            <h5 className="text-pink-500 inline-block">#graphql&nbsp;</h5>
            <h5 className="text-purple-500 inline-block">#tailwind&nbsp;</h5>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.5 },
          }}
        >
          <div className="flex-initial rounded-xl bg-black p-4 h-auto w-full sm:w-80 md:w-96 m-4 hover:shadow-md hover:scale-105 transition-transform transition-shadow duration-300">
            <img
              height="300"
              width="400"
              className="rounded-xl"
              src={portfolio}
              alt="Parallax Portfolio"
            />
            <div className="flex justify-between my-2">
              <h3 className="text-xl text-white font-bold">
                Parallax Portfolio
              </h3>
              <div>
                <a
                  href="https://github.com/Zeiyon/Parallax-Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="xl"
                    style={{ color: "#ffffff" }}
                  />
                </a>
                <a
                  href="https://talha.bio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="ml-2"
                    icon={faLink}
                    size="lg"
                    style={{ color: "#ffffff" }}
                  />
                </a>
              </div>
            </div>
            <p className="text-white mb-2 text-slate-200">
              Designed a dynamic parallax portfolio website to display my
              expertise and works, delving into novel technologies. Embedded
              custom animations utilizing React's state & hooks to guarantee a
              superior and intuitive user interaction experience
            </p>
            <h5 className="text-blue-500 inline-block">#react&nbsp;</h5>
            <h5 className="text-purple-500 inline-block">#tailwind&nbsp;</h5>
          </div>
        </motion.div>

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.3 }}
  variants={{
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.5 },
  }}
>
  <div className="flex-initial rounded-xl bg-black p-4 h-auto w-full sm:w-80 md:w-96 m-4 hover:shadow-md hover:scale-105 transition-transform transition-shadow duration-300">
    <img className="rounded-xl" src={mcBuilds} alt="MCBuilds" />
    <div className="flex justify-between my-2">
      <h3 className="text-xl text-white font-bold">MCBuilds</h3>
      <div>
        <a
          href="https://github.com/Zeiyon/MCBuilds"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className=""
            icon={faGithub}
            size="xl"
            style={{ color: "#ffffff" }}
          />
        </a>
        <a
          href="https://mcbuilds.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="ml-2"
            icon={faLink}
            size="lg"
            style={{ color: "#ffffff" }}
          />
        </a>
      </div>
    </div>

    <p className="text-white mb-2 text-slate-200">
      Created a responsive theme for my webstore, elevating user
      experience and boosting retention. Passive income venture,
      generating slightly above $100/month by selling ready-to-use video
      game files, generating consistent revenue streams
    </p>
    <h5 className="text-green-500 inline-block">#business&nbsp;</h5>
    <h5 className="text-purple-500 inline-block">#bootstrap&nbsp;</h5>
  </div>
</motion.div>

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.3 }}
  variants={{
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.5 },
  }}
>
  <div className="flex-initial rounded-xl bg-black p-4 h-auto w-full sm:w-80 md:w-96 m-4 hover:shadow-md hover:scale-105 transition-transform transition-shadow duration-300">
    <img className="rounded-xl" src={cartelTheme} alt="MCBuilds" />
    <div className="flex justify-between my-2">
      <h3 className="text-xl text-white font-bold">Enjin Cartel</h3>
      <div>
        <a
          href="https://github.com/Zeiyon/MCBuilds"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className=""
            icon={faGithub}
            size="xl"
            style={{ color: "#ffffff" }}
          />
        </a>
        <a
          href="https://mcbuilds.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="ml-2"
            icon={faLink}
            size="lg"
            style={{ color: "#ffffff" }}
          />
        </a>
      </div>
    </div>

    <p className="text-white mb-2 text-slate-200">
      Created a responsive theme for my webstore, elevating user
      experience and boosting retention. Passive income venture,
      generating slightly above $100/month by selling ready-to-use video
      game files, generating consistent revenue streams
    </p>
    <h5 className="text-orange-500 inline-block">#HTML&nbsp;</h5>
    <h5 className="text-blue-500 inline-block">#CSS&nbsp;</h5>
    <h5 className="text-yellow-500 inline-block">#JavaScript&nbsp;</h5>
  </div>
</motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.5 },
          }}
        >
          <div className="flex-initial rounded-xl bg-black p-4 h-auto w-full sm:w-80 md:w-96 m-4 hover:shadow-md hover:scale-105 transition-transform transition-shadow duration-300">
            <img
              className="rounded-xl"
              src={dailyRewards}
              alt="DailyRewards Plugin"
            />
            <div className="flex justify-between my-2">
              <h3 className="text-xl text-white font-bold">
                DailyRewards Plugin
              </h3>
              <div>
                <a
                  href="https://github.com/Zeiyon/DailyRewards"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="xl"
                    style={{ color: "#ffffff" }}
                  />
                </a>
                <a
                  href="https://github.com/Zeiyon/DailyRewards"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="ml-2"
                    icon={faLink}
                    size="lg"
                    style={{ color: "#ffffff" }}
                  />
                </a>
              </div>
            </div>
            <p className="text-white mb-2 text-slate-200">
              Renowned Java plugin: 500+ downloads, 10+ five-star reviews & 15+
              updates. Merged SQL Databases & multiple APIs for efficiency.
              Steadily enhancing security, feature set, and memory optimization
              to ensure top-notch performance
            </p>
            <h5 className="text-orange-500 inline-block">#java&nbsp;</h5>
            <h5 className="text-yellow-500 inline-block">#spigotapi&nbsp;</h5>
            <h5 className="text-blue-500 inline-block">#mysql&nbsp;</h5>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default ProjectsComponent;
