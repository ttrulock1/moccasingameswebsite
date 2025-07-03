import React from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <nav>
        <a href="/#">Home</a>
        <a href="/jobs">Jobs</a>
        <a href="/news">News</a>
        <a href="/about">About</a>
      </nav>

      <img src="/MyLogo(Transparent)erq editewhited.png" alt="Moccasin Logo" className="logo" />

      <header className="container">
        <h1 id="logo">Moccasin</h1>
      </header>



      <section className="container">
        <h2 className="section-header">Introducing: The MFS1</h2>      
        <img src="/tmf.png" alt="The Mother Fucker UI" className="tmf-image" />
        <p>A boutique ******** ***** synthesizer. Analog soul, digital form.</p>

        <p>
          A powerful duophonic synthesizer designed from scratch for the ********* *****. Featuring a Microbrute-inspired
          engine, real-time FX (delay, reverb, chorus), Moog & Steiner filters, an advanced sequencer, ADSR envelope
          shaping, LFO modulation, and patch storage.
        </p>
      </section>

      <section className="container">
        <h2 className="section-header">Features</h2>
        <ul>
          <li>Duophonic pad & sequencer play</li>
          <li>Microbrute-style oscillator with wave shaping</li>
          <li>Real-time modulation (LFO, ADSR)</li>
          <li>Steiner & Moog filter architecture</li>
          <li>Chorus, delay, and reverb effects</li>
          <li>Scale bank and arpeggiator</li>
          <li>Patch & pattern preset saving</li>
          <li>Visual oscilloscope and sequencer UI</li>
        </ul>
      </section>
      <section className="container">
  <h2 className="section-header">New Modules</h2>

  <div className="module-showcase">
    <div className="module">
      <img src="/brums.png" alt="BRUMS Drum Synthesizer" className="module-image" />
      <h3>BRUMS</h3>
      <p>A four-voice FM drum synthesizer. Tight envelopes, snappy modulation, and total operator control. Just released for Max On Ableton.</p>
      {/* <a href="/demos/brums" className="demo-link">+ watch the demo +</a> */}
    </div>

    <div className="module">
      <img src="/chants.png" alt="CHANTS Granular Shifter" className="module-image" />
      <h3>CHANTS </h3>
      <p>Granular reverb, delay, and pitch-shifting inspired by Mutable Clouds. Designed for haunting vocal textures. Now Free to download on Max for Ableton.</p>
      {/* <a href="/demos/chants" className="demo-link">+ watch the demo +</a> */}
    </div>
  </div>

  <div className="module">
  <img src="/kingfm.png" alt="King of FM" className="module-image" style={{ filter: 'grayscale(100%)' }} />
  <h3>King of FM: 100,000 Downloads</h3>
  <p>One of the most downloaded FM synth on iOS, just surpassed 100,000 downloads. Smooth operator control, classic DX-style modulation, and multi-layered presets for sound designers and live players alike. Download it now.</p>
  {/* <a href="/demos/kingfm" className="demo-link">+ watch the demo +</a> */}
</div>

</section>

      <section className="container">
        <h2 className="section-header">Contact</h2>
        <p>Reach out for demo access, collaborations, or publishing inquiries.</p>
        <p>contact@moccasinfactory.com</p>
      </section>

      <footer>
        &copy; {new Date().getFullYear()} Moccasin Factory Instruments. All rights reserved.
      </footer>
    </div>
  );
}
