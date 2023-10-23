import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  // Function to check if the device is an iPhone in landscape mode
  const isIphoneInLandscape = () => {
    return (
      /iPhone/.test(navigator.userAgent) &&
      window.orientation &&
      Math.abs(window.orientation) === 90
    );
  };

  // Conditionally render the ComputersCanvas based on the device and orientation
  const renderComputersCanvas = () => {
    if (isIphoneInLandscape()) {
      return null; // Don't render ComputersCanvas in landscape mode
    }

    return <ComputersCanvas />;
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Bienvenidos!</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm &nbsp;
            <span className="text-[#915eff]">Bryan</span>
            , a Developer dedicated to solve complex challenges through the art
            of coding.
            <br />
            <br />
            Welcome aboard!
          </p>
        </div>
      </div>

      {renderComputersCanvas()}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;