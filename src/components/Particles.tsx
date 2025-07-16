import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Engine } from 'tsparticles-engine';

export default function ParticlesBackground() {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: { value: 80, density: { enable: true } },
          color: { value: "#3b82f6" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { 
            enable: true, 
            speed: 2, 
            outModes: "bounce" 
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}