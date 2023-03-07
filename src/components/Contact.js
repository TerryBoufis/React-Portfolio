import { useState } from "react";

function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (event.target.value === "") {
      setErrorMessage("You need to fill out all fields");
    }

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage("Email is invalid");
      return;
    }
    setErrorMessage(" ");
  };
  return (
    <div id="contact-container">
      <div id="contact" class="contact">
        <form>
          <input
            defaultValue={name}
            name="name"
            placeholder="name"
            onBlur={handleInputChange}
            type="email"
          />
          <input
            defaultValue={email}
            name="email"
            placeholder="email"
            onBlur={handleInputChange}
            type="text"
          />
          <textarea placeholder="Message"></textarea>
          <button onClick={handleFormSubmit}>Submit</button>
        </form>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
