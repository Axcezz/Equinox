'use client'
import { useState } from 'react';
import { Card } from 'primereact/card';
import Image from 'next/image';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Divider } from 'primereact/divider';
interface Galaxy {
  name: string;
  Location?: string;
  solarSystems: SolarSystem[];
}

interface SolarSystem {
  name: string;
  planets: string[];
}

export default function Explore() {
  const [selectedGalaxy, setSelectedGalaxy] = useState<Galaxy | null>(null);
  const [selectedSolarSystem, setSelectedSolarSystem] = useState<SolarSystem | null>(null);

  const handleGalaxyClick = (galaxy: Galaxy) => {
    setSelectedGalaxy(galaxy);
    
  };

  const handleSolarSystemClick = (solarSystem: SolarSystem) => {
    setSelectedSolarSystem(solarSystem);
  };
  const galaxies: Galaxy[] = [
    { 
      name: 'The Milky Way',
      Location: '(Current)',
      solarSystems: [
        { name: 'Solar System 1', planets: ['Sun','Mercury', 'Venus', 'Earth'] },
        { name: 'Solar System 2', planets: ['Sun','Mars', 'Jupiter', 'Saturn'] },
        { name: 'Solar System 3', planets: ['Sun','Uranus', 'Neptune'] }
      ]
    },
    { 
      name: 'Galaxy 2',
      Location: '',
      solarSystems: [
        { name: 'Solar System 4', planets: ['Sun','Venus', 'Jupiter'] },
        { name: 'Solar System 5', planets: ['Sun','Earth', 'Mars'] }
      ]
    },
    // Add more galaxies as needed
  ];
  return (
    <div className="flex justify-between w-3/4 mx-auto">
      <div className="w-1/2">
        {selectedGalaxy && (
          <>
          
            {selectedSolarSystem ? (
              <>
                {selectedSolarSystem.planets.map((planet, index) => (
                  <div key={index}>
                    <Image src={`/images/planets/${planet}.png`} alt={planet} width={200} height={200} />
                    <span>{planet}</span>
                  </div>
                ))}
              </>
            ) : (
              <span>No solar system selected</span>
            )}
          </>
        )}
      </div>
      <div className="w-1/2">
    

      {galaxies.map((galaxy: Galaxy, index) => (
  <Accordion key={index}>
    <AccordionTab header={galaxy.name} onClick={() => handleGalaxyClick(galaxy)}>
      {galaxy.solarSystems.map((solarSystem, index) => (
        <div key={index} onClick={() => handleSolarSystemClick(solarSystem)}>
          <span className='cursor-pointer text'>{solarSystem.name}</span>
          <Divider/>
        </div>
      ))}
    </AccordionTab>
  </Accordion>
))}
      </div>
    </div>
  );
}