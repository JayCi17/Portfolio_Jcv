import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/Components/Animations/splitHeader.scss';

function SplitHeader() {
  const titleRef = useRef();

  useEffect(() => {
    const title = titleRef.current;

    if (title) {
      const chars = title.textContent.split('');
      title.innerHTML = ''; // Efface le contenu original

      chars.forEach((char, index) => {
        const charSpan = document.createElement('span');
        charSpan.className = 'char';
        charSpan.textContent = char === ' ' ? '\u00a0' : char;
        title.appendChild(charSpan);
      });

      const charElements = title.querySelectorAll('.char');

      const tl = gsap.timeline({
        repeat: 0,
        repeatDelay: 0.65,
        defaults: { duration: 0.15, ease: 'power2.out' }
      });

      charElements.forEach((char, index) => {

        tl.set(char, {
          x: '+=' + getRandom(-500, 500),
          y: '+=' + getRandom(-500, 500),
          rotation: '+=' + getRandom(-720, 720),
          scale: 0,
          opacity: 0
        });

        tl.to(char, {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
        });
      });
    }
  }, []);

  return (
    <h1 id="Portfolio-title" ref={titleRef}>
      Jean-Charles VALENTIN
    </h1>
  );
}

export default SplitHeader;

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
