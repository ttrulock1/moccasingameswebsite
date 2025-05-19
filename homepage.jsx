import React from "react";
import './App.css';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-moccasin font-sans">
      <header className="flex flex-col items-center justify-center py-12">
        <img
          src="/MyLogo(Transparent).png"
          alt="Moccasin Factory Instruments Logo"
          className="w-64 mb-6 drop-shadow-lg"
        />
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">Moccasin Factory Instruments</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-center text-moccasin/80">
          A boutique Nintendo Switch synthesizer developer. Analog soul, digital form.
        </p>
      </header>

      <section className="px-6 md:px-12 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Introducing: The Mother Fucker</h2>
        <p className="text-moccasin/90 max-w-3xl leading-relaxed">
          A powerful duophonic synthesizer designed from scratch for the Nintendo Switch.
          Featuring a Microbrute-inspired engine, real-time FX (delay, reverb, chorus), Moog & Steiner filters,
          an advanced sequencer, ADSR envelope shaping, LFO modulation, and patch storage.
        </p>
      </section>

      <section className="px-6 md:px-12 py-10 bg-moccasin text-black">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2">
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

      <section className="px-6 md:px-12 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-moccasin/80">Reach out for demo access, collaborations, or publishing inquiries.</p>
        <p className="mt-2 font-mono">contact@moccasinfactory.com</p>
      </section>

      <footer className="text-center py-6 text-sm text-moccasin/60">
        &copy; {new Date().getFullYear()} Moccasin Factory Instruments. All rights reserved.
      </footer>
    </div>
  );
}