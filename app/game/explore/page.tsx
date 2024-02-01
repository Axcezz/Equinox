'use client'
import { useState } from 'react';
import { Card } from 'primereact/card';
import Image from 'next/image';

const solarSystems = [
  { name: 'Solar System 1', planets: ['Earth', 'Mars'] },
  { name: 'Solar System 2', planets: ['Venus', 'Jupiter'] },
  // Add more solar systems as needed
];

export default function Explore() {
  const [selectedSolarSystem, setSelectedSolarSystem] = useState(null);

  const handleSolarSystemClick = (solarSystem) => {
    setSelectedSolarSystem(solarSystem);
  };

  return (
    <div className="flex justify-between w-3/4 mx-auto">
      <div className="w-1/2">
        {selectedSolarSystem && (
          <>
            <Image src="/images/planets/sun.png" alt="Sun" width={200} height={200} />
            {selectedSolarSystem.planets.map((planet, index) => (
              <div key={index}>
                <Image src={`/images/planets/${planet}.png`} alt={planet} width={50} height={50} />
                <span>{planet}</span>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="w-1/2">
        {solarSystems.map((solarSystem, index) => (
          <Card key={index} title={solarSystem.name} onClick={() => handleSolarSystemClick(solarSystem)}>
            <span>Click to view planets</span>
          </Card>
        ))}
      </div>
    </div>
  );
}