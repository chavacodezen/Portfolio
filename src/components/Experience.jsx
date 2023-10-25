import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="object-contain rounded-full"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold tracking-wider">
        {experience.title}
      </h3>
      <h4 className="mt-2 text-secondary text-[18px] font-semibold tracking-wider">
        {experience.company_name}
      </h4>
    </div>

    <ul className="mt-2 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[16px] tracking-wider"
        >
          <span style={{ textDecoration: "underline" }}>{point.text}</span>
          {point.subpoints && (
            <ul className="mt-2 space-y-2 list-disc ml-5">
              {point.subpoints.map((subpoint, subindex) => (
                <li
                  key={`subpoint-${subindex}`}
                  className="text-white-100 text-[14px] tracking-wider"
                >
                  {subpoint}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-10 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");