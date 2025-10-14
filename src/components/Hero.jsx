import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoref = useRef();

  useEffect(() => {
    if (videoref.current) videoref.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>Macbook Pro</h1>
        <img src="/title.png" alt="MacBook" />
      </div>

      <video ref={videoref} src="/videos/hero.mp4" autoPlay muted playInline />

      <button>Buy</button>

      <p>From $1,599 or $133/mo for 12 months</p>
    </section>
  );
};

export default Hero;
