import { useEffect, useState } from 'preact/hooks';

interface OrnamentProps {
  className: string;
}

const Ornament = ({ className }: OrnamentProps) => {
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    function getRandomPosition() {
      const containerWidth = window.innerWidth - 100; // Subtract the ornament width
      const containerHeight = window.innerHeight - 100; // Subtract the ornament height

      const randomX = Math.floor(Math.random() * containerWidth * 0.8); // Adjust the range here
      const randomY = Math.floor(Math.random() * containerHeight * 0.8); // Adjust the range here

      return [randomX, randomY];
    }

    const ornament = document.querySelector(`.${className}`) as HTMLDivElement;

    function moveOrnament() {
      const currentPositionX = parseInt(ornament.style.left || '0', 10);
      const currentPositionY = parseInt(ornament.style.top || '0', 10);
      const [targetPositionX, targetPositionY] = getRandomPosition();

      const deltaX = targetPositionX - currentPositionX;
      const deltaY = targetPositionY - currentPositionY;
      const duration = Math.sqrt(deltaX * deltaX + deltaY * deltaY) * 0.05; // Adjust the speed factor here

      ornament.style.animation = `moveOrnamentAnimation ${duration}s ease-out`;
      ornament.style.left = targetPositionX + 'px';
      ornament.style.top = targetPositionY + 'px';

      requestAnimationFrame(() => {
        requestAnimationFrame(moveOrnament);
      });
    }

    // if (!initialLoad) {
    //   moveOrnament(); // Start the movement animation
    // } else {
    //   setInitialLoad(false); // Update initial load state
    // }

    return () => {
      ornament.style.animation = ''; // Remove animation on component unmount
    };
  }, [initialLoad]);

  return <div className={`${className} ornament`} />;
};

export default Ornament;
