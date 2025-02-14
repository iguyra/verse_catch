import { useState } from "react";
import styles from "./Form.module.css";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let message = value.replace(/[^a-zA-Z.%@0-9?\w\s]/g, "");
    let email = value.replace(/[^a-zA-Z.@0-9]/g, "");
    let username = value.replace(/[^a-zA-Z.@0-9]/g, "");

    if (name === "name") {
      setName(username);
    } else if (name === "message") {
      setMessage(message);
    } else if (name === "email") {
      setEmail(email);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setIsSuccess(false);

    if (!name || !message) {
      setIsSubmitting(false);

      return setError("All fields are required");
    }
    try {
      let { data } = await axios.post("/api/contact", { name, message, email });

      setIsSuccess(data.status);
      setIsSubmitting(false);
      setMessage("");
      setName("");
    } catch (err) {
      let { response } = err;

      let data = response.data;

      setIsSuccess(data.status);
      setIsSubmitting(false);

      return setError("something went wrong,try again");
    }
  };

  return (
    <form
      id="contact"
      className={styles.form}
      onSubmit={(e) => onSubmitHandler(e)}
    >
      {error ? <div className={styles.error}>{error}</div> : null}
      {isSuccess ? (
        <div className={styles.success}>
          Thanks for getting in touch, I will get back to you.
        </div>
      ) : null}

      <div className={styles.formContainer}>
        <h2>Get in touch</h2>
        <div className={styles.formGroup}>
          <label className={styles.name} htmlFor="">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => inputHandler(e)}
            name="name"
            className={styles.input}
            type="text"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.name} htmlFor="">
            Email || Phone
          </label>
          <input
            value={email}
            onChange={(e) => inputHandler(e)}
            name="email"
            className={styles.input}
            type="text"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.name} htmlFor="">
            Message
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => inputHandler(e)}
            className={styles.textarea}
            type="text"
          />
        </div>
        <button className={styles.button}>
          {isSubmitting ? "sending..." : "send"}
        </button>
      </div>
    </form>
  );
};

export default Form;
