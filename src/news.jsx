// src/Blog.jsx
import React from "react";

export default function Blog() {
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
        <h1>News</h1>
        <article>
    <h2>June 2025 — Introducing The Swamp </h2>
    <p>
      After months of development, Moccasin Factory Instruments has officially launched it's first Eurorack Module, swamp. The Swamp will bring dynamic digital reverb to any euorack setup at cost of only $135. We will be shipping the modules to distributors in August.
    </p>
  </article>

  <article>
    <h2>May 2025 — The Garage Returns in Limited Analog Reissue</h2>
    <p>
      Our original 3-octave tape-based synthesizer, The Garage, is being reissued in a hand-built run of 25 units. Each
      includes a new tape loop stabilization system and CV support. Orders open July 1st.
    </p>
  </article>
  <article>
    <h2>May 2025 — Catch Us at SuperBooth</h2>
    <p>
      We are excited to announce we will be hosting a booth at Berlin Superbooth. Please come by and check out the new gaming system based synth that will soon be unvieled. 
    </p>
  </article>

  <article>
    <h2>April 2025 — Berlin Studio Buildout Complete</h2>
    <p>
      We’ve finished setting up our new headquarters and prototyping space in Berlin. The studio includes custom modular
      testing stations, sound-treated demo rooms, and a community hangout lab for local musicians.
    </p>
  </article>

  <article>
    <h2>March 2025 — KingFM Hits 100,000 Downloads</h2>
    <p>
      KingFM, our flagship mobile synth, officially crossed the one million download mark on iOS. Thank you to everyone
      who continues to create and share music with it.
    </p>
  </article>

  <article>
    <h2>January 2025 — MF Instruments Opens Game Audio Division</h2>
    <p>
      In partnership with several indie developers, Moccasin Factory now offers dedicated tools and sound libraries for
      game audio integration. A VST and FMOD toolkit are currently in development.
    </p>
  </article>
        </section>

      <footer>&copy; {new Date().getFullYear()} Moccasin Factory Instruments</footer>
    </div>
  );
}
