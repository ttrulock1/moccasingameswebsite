// src/Jobs.jsx
import React from "react";

export default function Jobs() {
  return (
    <div className="container">
      <nav>
        <a href="/">MF Synth</a>
        <a href="/jobs">Jobs</a>
        <a href="/news">News</a>
        <a href="/about">About</a>
      </nav>
      <img src="/MyLogo(Transparent)erq editewhited.png" alt="Moccasin Logo" className="logo" />


      <section>
        <h1>Jobs</h1>

        <div>
          <h2>Game Developer — $80,000</h2>
          <p>
            We're looking for a game developer with experience in Unity, C++, or Godot who can collaborate on interactive tools for our synth projects. You’ll work alongside the sound team and UX designers to bring new features to life.
          </p>
        </div>

        <div>
          <h2>Social Media Manager — $50,000</h2>
          <p>
            Help shape the public voice of Moccasin Factory Instruments. We need someone who can manage our accounts, schedule posts, grow our audience, and keep the vibes high.
          </p>
        </div>

        <p style={{ marginTop: "2rem" }}>
          To apply, send your resume or portfolio to <strong>jobs@moccasinfactory.com</strong>
        </p>
      </section>

      <footer>&copy; {new Date().getFullYear()} Moccasin Factory Instruments</footer>
    </div>
  );
}