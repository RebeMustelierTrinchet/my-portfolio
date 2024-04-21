import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import styles from './particlesBg.module.css';

export default function ParticlesBg() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className={styles.particlesContainer}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className={styles.particles}
      />
    </div>
  );
}