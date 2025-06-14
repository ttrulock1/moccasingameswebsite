// src/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="container">
      <nav>
        <a href="/">MF Synth</a>
        <a href="/jobs">Jobs</a>
        <a href="/news">News</a>
        <a href="/about">About</a>
      </nav>
      {/* Logo inserted here, matching homepage */}
      <img src="/MyLogo(Transparent)erq editewhited.png" alt="Moccasin Logo" className="logo" />


      <section>
  <h1>About Us</h1>
  <p>
    Born in the New Orleans Bayou, Moccasin is a synthesizer and musical instrument company based in New Orleans, Louisiana. Founded in 2019 by Sutton Trulock—a self-taught electronic instrument designer and luthier——Moccasin began with the Garage, a fully analogtape-based synthesizer.
    In 2021, the company made its digital debut, designing apps.
  </p>
  <p>
  In 2025, after relocating to Berlin—a city at the intersection of electronic music and indie game development—Moccasin began developing synthesizers for gaming systems.
  </p>
  <p>
    Moccasin builds the kinds of instruments we always dreamed of—tools that prioritize playability, character, and sonic integrity. These are musicians’ instruments, made by musicians.
  </p>
</section>

      <footer>&copy; {new Date().getFullYear()} Moccasin Factory Instruments</footer>
    </div>
  );
}
