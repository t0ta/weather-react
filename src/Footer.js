import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      This App was coded by t0ta,
      <a
        href="https://github.com/t0ta/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on GitHub
      </a>
      and
      <a
        href="https://willowy-melba-ac6d6f.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        hosted on Netlify
      </a>
    </footer>
  );
}
