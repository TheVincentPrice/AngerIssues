import { useState, useRef } from "react";

export const ContactButton = () => {
  const [contactMessage, setContactMessage] = useState("contact");

  const timerRef = useRef(0);

  return (
    <button
      onClick={() => {
        clearTimeout(timerRef.current);
        navigator.clipboard.writeText("contact@emmaacs.com");
        setContactMessage("contact copied!");
        timerRef.current = setTimeout(() => {
          setContactMessage("contact");
        }, 1000);
      }}
    >
      {contactMessage}
    </button>
  );
};
