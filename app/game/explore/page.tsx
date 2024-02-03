'use client'
import { useState } from 'react';
import { Card } from 'primereact/card';
import Image from 'next/image';

interface SolarSystem {
  name: string;
  planets: string[];
  Location?: string;
}

const solarSystems: SolarSystem[] = [
  { name: 'Solar System 1', planets: ['Earth', 'Mars'], Location:'' },
  { name: 'Solar System 2', planets: ['Venus', 'Jupiter'], Location:'(Current)' },
  // Add more solar systems as needed
];

export default function Explore() {
  const [selectedSolarSystem, setSelectedSolarSystem] = useState<SolarSystem | null>(null);

  const handleSolarSystemClick = (solarSystem: SolarSystem) => {
    setSelectedSolarSystem(solarSystem);
  };

  return (
    <div className="flex justify-between w-3/4 mx-auto">
      <div className="w-1/2">
        {selectedSolarSystem && (
          <>
            <Image src="/images/planets/sun.png" alt="Sun" width={400} height={400} />
            {selectedSolarSystem.planets.map((planet, index) => (
              <div key={index}>
                <Image src={`/images/planets/${planet}.png`} alt={planet} width={200} height={200} />
                <span>{planet}</span>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="w-1/2">
        {solarSystems.map((solarSystem, index) => (
          <Card key={index} title={`${solarSystem.name} ${solarSystem.Location}`} onClick={() => handleSolarSystemClick(solarSystem)}>
          </Card>
        ))}
      </div>
    </div>
  );
}