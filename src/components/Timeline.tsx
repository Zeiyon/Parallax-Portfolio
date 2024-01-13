import "../index.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import schaefflerImage from "../assets/imgs/logos/schaeffler.png";
import builtbybitImage from "../assets/imgs/logos/builtbybit.jpg";
import nvccImage from "../assets/imgs/logos/nvcc.png";
import freelanceImage from "../assets/imgs/logos/freelance.png";
import mineworksImage from "../assets/imgs/logos/mineworks.png";

function TimelineComponent() {
  return (
    <>
      <p className="self-start text-white m-3 text-slate-200 mt-12 mb-1">
        Where I've been
      </p>
      <h2 className="self-start text-5xl text-white font-extrabold m-3 mt-0">
        My Work Experience
      </h2>
      <p className="self-start text-white m-3 max-w-[36rem] text-slate-200 mb-12">
        Explore the different jobs and projects I've tackled over the years.
        From startups to established firms, my work experience showcases my
        growth, skills, and commitment
      </p>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#183536", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #183536" }}
          date="Aug 2023 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <div>
              <img
                src={schaefflerImage}
                alt="Schaeffler Logo"
                className="rounded-full"
              />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title font-bold text-xl">
            Fullstack Software Engineer Co-op
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-medium text-slate-300 text-md pb-2">
            Schaeffler Group
          </h4>
          <ul
            style={{
              fontWeight: "400",
              fontSize: "0.875rem",
            }}
          >
            <li style={{ padding: "0.2rem" }}>
              • &nbsp; Aided in the development of a <b>full-stack</b> web
              application <b>using C#</b> in the
              <b>.NET framework, SQL, and Angular</b>
            </li>
            <li style={{ padding: "0.2rem" }}>
              • &nbsp; Contributed to a <b>Next.js</b> app, dynamically{" "}
              <b>visualizing data</b> with <b>Recharts</b> and interfacing with
              the database using <b>Prisma</b>
            </li>
            <li style={{ padding: "0.2rem" }}>
              • &nbsp; Enhanced <b>Next.js</b> data rendering using{" "}
              <b>React hooks</b>, achieving a <b>2 second reduction</b> via{" "}
              <b>asynchronous database integration</b>
            </li>
            <li style={{ padding: "0.2rem" }}>
              • &nbsp; Expanded on an email service through .NET,{" "}
              <b>dynamically generating</b> new email templates based on
              authorized data
            </li>
          </ul>
          <h5
            style={{
              fontWeight: "400",
              color: "rgb(203 213 225)",
              fontSize: "14px",
              marginTop: "5px",
            }}
          >
            Wooster, OH
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#183536", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #183536" }}
          date="Feb 2022 - Aug 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <div>
              <img
                src={builtbybitImage}
                alt="BuiltByBit Logo"
                className="rounded-full"
              />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title font-bold text-xl">
            Junior Resource Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-medium text-slate-300 text-md pb-2">
            BuiltByBit
          </h4>
          <ul
            style={{
              fontWeight: "400",
              fontSize: "0.875rem",
            }}
          >
            <li style={{ padding: "0.2rem" }}>
              • &nbsp; Conducted thorough source code analysis for user-uploaded
              programs to <b>identify vulnerabilities</b>, ensure quality and
              maintain community guidelines
            </li>
            <li style={{ padding: "0.2rem" }}>
              • &nbsp; Led the resources development team for a large online
              marketplace with over <b>20,000 monthly users</b>
            </li>
            <li style={{ padding: "0.2rem" }}>
              • &nbsp; Boosted user resource approval times by <b>over 60%</b>{" "}
              by implementing a Java GUI (Swing) framework for staff use
            </li>
            <li style={{ padding: "0.2rem" }}>
              • &nbsp; Boosted user resource approval times by over 60% by
              implementing a Java GUI (Swing) framework for staff use
            </li>
          </ul>
          <h5
            style={{
              fontWeight: "400",
              color: "rgb(203 213 225)",
              fontSize: "14px",
              marginTop: "5px",
            }}
          >
            Remote
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#183536", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #183536" }}
          date="Mar 2023 - Oct 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <div>
              <img src={nvccImage} alt="NVCC Logo" className="rounded-full" />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title font-bold text-xl">
            Computer Science & Math Tutor
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-medium text-slate-300 text-md pb-2">
            Northern Virginia Community College
          </h4>
          <ul
            style={{
              fontWeight: "400",
              fontSize: "0.875rem",
            }}
          >
            <li style={{ padding: "0.2rem" }}>
              • &nbsp; Students achieved average <b>one-letter grade</b>{" "}
              improvement through multiple tutoring sessions
            </li>
            <li style={{ padding: "0.2rem" }}>
              • &nbsp; Demonstrated <b>strong communication skills</b> by
              effectively explaining complex concepts in a clear, concise manner
            </li>
          </ul>
          <h5
            style={{
              fontWeight: "400",
              color: "rgb(203 213 225)",
              fontSize: "14px",
              marginTop: "5px",
            }}
          >
            Annandale, VA
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#183536", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #183536" }}
          date="2020 - 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <div>
              <img
                src={freelanceImage}
                alt="Freelance Logo"
                className="rounded-full"
              />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title font-bold text-xl">
            Freelance Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-medium text-slate-300 text-md pb-2">
            Self
          </h4>
          <ul
            style={{
              fontWeight: "400",
              fontSize: "0.875rem",
            }}
          >
            <li style={{ padding: "0.2rem" }}>
              • &nbsp; Developed custom plugins and software solutions for{" "}
              <b>over 40 clients</b>, leveraging expertise in Java programming,
              API integration, and web development to create high-performance,
              efficient solutions that met clients needs
            </li>
            <li style={{ padding: "0.2rem" }}>
              • &nbsp; Successfully earned <b>over $35,000</b> by planning and
              executing over 30 unique projects across various platforms
            </li>
            <li style={{ padding: "0.2rem" }}>
              • &nbsp; Worked with source code from other developers, debugging
              and optimizing programs to be more efficient
            </li>
          </ul>
          <h5
            style={{
              fontWeight: "400",
              color: "rgb(203 213 225)",
              fontSize: "14px",
              marginTop: "5px",
            }}
          >
            Remote
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#183536", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #183536" }}
          date="2021 - 2022"
          iconStyle={{ background: "#fff", color: "#fff" }}
          icon={
            <div>
              <img
                src={mineworksImage}
                alt="MineWorks Logo"
                className="rounded-full mt-1"
              />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title font-bold text-xl">
            Founder/Manager
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-medium text-slate-300 text-md pb-2">
            MineWorks
          </h4>
          <ul
            style={{
              fontWeight: "400",
              fontSize: "0.875rem",
            }}
          >
            <li style={{ padding: "0.2rem" }}>
              • &nbsp; Led business development efforts: identified new
              opportunities, negotiated contracts, & established partnerships
            </li>
            <li style={{ padding: "0.2rem" }}>
              • &nbsp; Orchestrated a collaborative team effort resulting in a
              profitable return of <b>over $13,000</b> as a team
            </li>
          </ul>
          <h5
            style={{
              fontWeight: "400",
              color: "rgb(203 213 225)",
              fontSize: "14px",
              marginTop: "5px",
            }}
          >
            Remote
          </h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}

export default TimelineComponent;
