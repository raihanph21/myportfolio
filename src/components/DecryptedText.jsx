import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function DecryptedText({
  text,
  speed = 50,
  pause = "800",
  className = "",
}) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let iteration = 0;
    let isPaused = false;
    let intervalId;

    intervalId = setInterval(() => {
      if (isPaused) return;

      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return char;
            return randomChar();
          })
          .join("")
      );

      iteration += 1 / 3;

      if (iteration >= text.length) {
        setDisplayText(text);
        isPaused = true;

        setTimeout(() => {
          iteration = 0;
          isPaused = false;
        }, pause);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, pause]);

  return <span className={className}>{displayText}</span>;
}
