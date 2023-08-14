import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const BubbleAnimation = () => {
  const animationControls = useAnimation();
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const animateBubble = async () => {
    await animationControls.start({
      y: -200,
      opacity: 0,
      transition: { duration: 20 },
    });
    animationControls.set({ y: 0, opacity: 1 }); // make the animation reset
    animateBubble();
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    animateBubble();
  }, []); // to run the effect only once

  const generateRandomPosition = () => {
    const { width, height } = windowSize;
    const randomX = Math.random() * (width - 100);
    const randomY = Math.random() * (height - 100);

    return { left: randomX, top: randomY };
  };

  const generateRandomColor = () => {
    const colors = [
      [255, 20, 147], // Pink
      [128, 0, 128], // Purple
      [0, 255, 0], // Green
      [255, 165, 0], // Orange
    ];
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const [r, g, b] = colors[randomColorIndex];

    return `rgba(${r},${g},${b},0.7)`;
  };

  return (
    <>
      {[...Array(5)].map((_, index) => (
        <motion.div
          className="bubble"
          key={index}
          style={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            position: 'absolute',
            background: `linear-gradient(to bottom right, ${generateRandomColor()}, ${generateRandomColor()})`,
            ...generateRandomPosition(),
          }}
          animate={animationControls}
        />
      ))}
    </>
  );
};

export default BubbleAnimation;
