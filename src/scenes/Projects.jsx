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

const Project = ({ title, language, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-purple z-30 flex flex-col justify-center items-center text-center p-16 text-white`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
        <div className={overlayStyles}>
          <p className="mt-7 text-lg font-sans">{`${language}`}</p>
        </div>
        <img
          src={`../assets/${projectTitle}.png `}
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
          <Project title="Project 1" language="CSS" link="https://pchtrees.github.io/Frontend-Mentor_huddle_landing_page/" />
          <Project title="Project 2" language="Tailwind" link="https://pchtrees.github.io/appointmentCalendar/"/>
          <Project title="Project 3" language="CSS" link=" https://pchtrees.github.io/Product-Landing-Page/"/>

          {/* ROW 2 */}
          <Project title="Project 4" language="CSS" link="https://pchtrees.github.io/Python-Documentation/"/>
          <Project title="Project 5" language="CSS" link="https://pchtrees.github.io/Museum-Feedback-Form/"/>
          <Project title="Project 6" language="CSS" link="https://pchtrees.github.io/CSSPortfolio/"/>

          {/* ROW 3 */}
          <Project title="Project 7" language="SASS & JS" link="https://pchtrees.github.io/Frontend-Mentor_theme-switcher/"/>
          <Project title="Project 8" language="CSS & JS" link="https://pchtrees.github.io/todoList" />
          <Project title="Project 9" language="CSS & JS" link="https://pchtrees.github.io/Tic-Tac-Toe/"/>
          
          {/* ROW 4 */}
          <Project title="Project 10" language="CSS & JS" link="https://pchtrees.github.io/calcu/"/>
          <Project title="Project 11" language="ReactJS" link="https://pchtrees.github.io/calcu/"/>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
