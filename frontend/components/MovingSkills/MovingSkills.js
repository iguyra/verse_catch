import React from "react";
import Typed from "typed.js";
import styles from "./movingSkills.module.css";

const TypedReactHooksDemo = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  //https://www.iguyra.com
  React.useEffect(() => {
    const options = {
      strings: [
        // "I love building/workin with <strong>startUps</strong>",
        // "Proficient in developing <strong>responsive webApps</strong>",
        // "Proficient in developing <strong>mobileApps</strong>",
        // "Rich experience in <strong>MonoRepo</strong> Apps",
        "i want problems, always",
        "i want problems, always!",
        "i want problems, always!!",
        "i want problems, always!!!",
        "i don't want peace!!",
        "i don't want peace!!!",
      ],
      typeSpeed: 18,
      backSpeed: 18,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className={styles.movingSkills}>
      <div className="type-wrap">
        <span s ref={el} />
      </div>
    </div>
  );
};

export default TypedReactHooksDemo;
