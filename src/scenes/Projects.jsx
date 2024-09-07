import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, projName, language, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-purple z-30 flex flex-col justify-center items-center text-center p-16 text-white`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
        <div className={overlayStyles}>
        <p className="text-lg font-semibold mb-4">{`${projName}`}</p> 
          <p className="mt-7 text-lg font-sans">{`${language}`}</p>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/${projectTitle}.png`}
          alt={projectTitle}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl text-slate-800">PROJECTS</p>
          <div className="flex justify-center mt-10 mb-5">
          </div>
        </div> 
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <Project title="Project 1" projName="Human Resources Information System" language="Laravel & Vue Js & TailwindCSS" link="" />
          <Project title="Project 2" projName="ChatGPT 3" language="React Js & CSS" link=""/>
          <Project title="Project 3" projName="Personal Portfolio" language="React Js & TailwindCSS" link=" https://pchtrees.github.io/Product-Landing-Page/"/>

          {/* ROW 2 */}
          <Project title="Project 4" projName="Frontend Mentor Theme Switcher" language="JavaScript & SASS" link="https://pchtrees.github.io/Frontend-Mentor_theme-switcher/"/>
          <Project title="Project 5" projName="Frontend Mentor Huddle Landing Page" language="JavaScript & SASS" link="https://pchtrees.github.io/Frontend-Mentor_huddle_landing_page/"/>
          <Project title="Project 6" projName="Museum Appointment Calendar" language="TailwindCSS" link="https://pchtrees.github.io/appointmentCalendar/"/>

          {/* ROW 3 */}
          <Project title="Project 7" projName="Simple Calculator App" language="JavaScript & CSS" link=""/>
          <Project title="Project 8" projName="To Do List App" language="JavaScript & CSS" link="https://pchtrees.github.io/todoList" />
          <Project title="Project 9" projName="Tic Tac Toe App" language="JavaScript & CSS" link="https://pchtrees.github.io/Tic-Tac-Toe/"/>

          </motion.div>
        </div>
    </section>
  );
};

export default Projects;
