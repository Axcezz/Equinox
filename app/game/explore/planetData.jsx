import React from "react";
import tx1 from "./textures/1.jpg";
import tx2 from "./textures/2.jpg";
import tx3 from "./textures/3.jpg";
import tx4 from "./textures/4.jpg";
import tx5 from "./textures/5.jpg";
import tx6 from "./textures/6.jpg";


const random = (a, b) => a + Math.random() * b;
const randomInt = (a, b) => Math.floor(random(a, b));
const randomColor = () =>
  `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`;
const shuffle = (a) => {
  const temp = a.slice(0);
  for (let i = temp.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [temp[i], temp[j]] = [temp[j], temp[i]];
  }
  return temp;
};

const textures = shuffle([tx1, tx2, tx3, tx4, tx5, tx6]);

const PlanetData = () => {
  const planetData = [];
  const totalPlanets = 6;
  for (let index = 0; index < totalPlanets; index++) {
    planetData.push({
      id: index,
      color: randomColor(),
      xRadius: (index + 1.5) * 4,
      zRadius: (index + 1.5) * 2,
      size: random(0.5, 1),
      speed: random(0.05, 0.06),
      offset: random(0, Math.PI * 2),
      rotationSpeed: random(0.008, 0.004),
      textureMap: textures[index],
      name: (Math.random() + 1).toString(36).substring(7).toUpperCase(),
      gravity: random(2, 5).toFixed(2),
      orbitalPeriod: randomInt(50, 500),
      surfaceArea: random(100, 1000).toFixed(2)
    });
  }

  return <div>{JSON.stringify(planetData)}</div>;
};

export default PlanetData;
