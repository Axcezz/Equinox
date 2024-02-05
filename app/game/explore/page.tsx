'use client'
import { useState } from 'react';
import { Card } from 'primereact/card';
import Image from 'next/image';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Divider } from 'primereact/divider';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

interface Planet {
  name: string;
  distance: number;
  size: number;
  mass: number;
  radiation: number;
  temperature: number;
  habitability: boolean;
  composition: string[];
  population: number;
  colonized: boolean;
}

interface SolarSystem {
  name: string;
  planets: Planet[];
}

interface Galaxy {
  name: string;
  Location?: string;
  solarSystems: SolarSystem[];
}

export default function Explore() {
  const [selectedGalaxy, setSelectedGalaxy] = useState<Galaxy | null>(null);
  const [selectedSolarSystem, setSelectedSolarSystem] = useState<SolarSystem | null>(null);
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);

  const handleGalaxyClick = (galaxy: Galaxy) => {
    setSelectedGalaxy(galaxy);
  };

  const handleSolarSystemClick = (solarSystem: SolarSystem) => {
    setSelectedSolarSystem(solarSystem);
  };

  const handlePlanetClick = (planet: Planet) => {
    setSelectedPlanet(planet);
    setDialogVisible(true);
  };

  const handleDialogHide = () => {
    setSelectedPlanet(null);
    setDialogVisible(false);
  };

{/* 
     Galaxies and Solar Systems are displayed in an Accordion component.
     need to do more research on the solar systems, planets and galaxies. 
     need the distance, size, mass and other info to determin the dificulty of the planets, solarsystems and the galaxies.
     - Distance will determin the time it takes to travel to the solar system/planet/galaxy.
     - Size/mass will determin the amount of resources available.
     - radiation will determin the amount of damage the ship will take and what radiation shield is needed.
      - temperature will determin the amount of damage the ship will take and what heat shield is needed.
      - habitality will determin if the planet can be colonized.
      - the composition of the planet will determin the amount and what kind of resources that are available.
      - population - current players on that planet. 
      - colinized - if the planet is colonized or not. the player can colonize the planet if it is not colonized. but need to be a part of a federation to colonize a planet.
      - the player can only colonize a planet if the planet is not colonized.
      */}




  const galaxies: Galaxy[] = [
    {
      name: 'The Milky Way Galaxy',
      Location: '(Current)',
      solarSystems: [
        {
          name: 'Our Solar System',
          planets: [
            {
              name: 'Sun',
              distance: 1,
              size: 1,
              mass: 1,
              radiation: 1,
              temperature: 1,
              habitability: true,
              composition: ['Water', 'Rock'],
              population: 7_800_000_000,
              colonized: true,
            },
            {
              name: 'Mercury',
              distance: 1,
              size: 1,
              mass: 1,
              radiation: 1,
              temperature: 1,
              habitability: true,
              composition: ['Water', 'Rock'],
              population: 7_800_000_000,
              colonized: true,
            },
            {
              name: 'Venus',
              distance: 1,
              size: 1,
              mass: 1,
              radiation: 1,
              temperature: 1,
              habitability: true,
              composition: ['Water', 'Rock'],
              population: 7_800_000_000,
              colonized: true,
            },
            {
              name: 'Earth',
              distance: 1,
              size: 1,
              mass: 1,
              radiation: 1,
              temperature: 1,
              habitability: true,
              composition: ['Water', 'Rock'],
              population: 7_800_000_000,
              colonized: true,
            },
            {
              name: 'Mars',
              distance: 1,
              size: 1,
              mass: 1,
              radiation: 1,
              temperature: 1,
              habitability: true,
              composition: ['Water', 'Rock'],
              population: 7_800_000_000,
              colonized: true,
            },
            {
              name: 'Jupiter',
              distance: 1,
              size: 1,
              mass: 1,
              radiation: 1,
              temperature: 1,
              habitability: true,
              composition: ['Water', 'Rock'],
              population: 7_800_000_000,
              colonized: true,
            },
            {
              name: 'Saturn',
              distance: 1,
              size: 1,
              mass: 1,
              radiation: 1,
              temperature: 1,
              habitability: true,
              composition: ['Water', 'Rock'],
              population: 7_800_000_000,
              colonized: true,
            },
            {
              name: 'Uranus',
              distance: 1,
              size: 1,
              mass: 1,
              radiation: 1,
              temperature: 1,
              habitability: true,
              composition: ['Water', 'Rock'],
              population: 7_800_000_000,
              colonized: true,
            },
            {
              name: 'Neptune',
              distance: 1,
              size: 1,
              mass: 1,
              radiation: 1,
              temperature: 1,
              habitability: true,
              composition: ['Water', 'Rock'],
              population: 7_800_000_000,
              colonized: true,
            }
            // Add other planets in 'Our Solar System' here
          ],
        },
        // Add other solar systems in 'The Milky Way Galaxy' here
          {
            name: 'Alpha Centauri',
            planets: [
              {
                name: 'Sun',
                distance: 1,
                size: 1,
                mass: 1,
                radiation: 1,
                temperature: 1,
                habitability: true,
                composition: ['Water', 'Rock'],
                population: 7_800_000_000,
                colonized: true,
              },
              {
                name: 'Mercury',
                distance: 1,
                size: 1,
                mass: 1,
                radiation: 1,
                temperature: 1,
                habitability: true,
                composition: ['Water', 'Rock'],
                population: 7_800_000_000,
                colonized: true,
              },
              {
                name: 'Venus',
                distance: 1,
                size: 1,
                mass: 1,
                radiation: 1,
                temperature: 1,
                habitability: true,
                composition: ['Water', 'Rock'],
                population: 7_800_000_000,
                colonized: true,
              },
              {
                name: 'Earth',
                distance: 1,
                size: 1,
                mass: 1,
                radiation: 1,
                temperature: 1,
                habitability: true,
                composition: ['Water', 'Rock'],
                population: 7_800_000_000,
                colonized: true,
              }]
            }

        // Add other solar systems in 'The Milky Way Galaxy' here
      ],
    },
    {
      name: 'Andromeda Galaxy',
      Location: '',
      solarSystems: [
        {
          name: 'Trappist-1',
          planets: [
            {
              name: 'Sun',
              distance: 1,
              size: 1,
              mass: 1,
              radiation: 1,
              temperature: 1,
              habitability: true,
              composition: ['Water', 'Rock'],
              population: 7_800_000_000,
              colonized: true,
            },
            {
              name: 'Mercury',
              distance: 1,
              size: 1,
              mass: 1,
              radiation: 1,
              temperature: 1,
              habitability: true,
              composition: ['Water', 'Rock'],
              population: 7_800_000_000,
              colonized: true,
            },
            {
              name: 'Venus',
              distance: 1,
              size: 1,
              mass: 1,
              radiation: 1,
              temperature: 1,
              habitability: true,
              composition: ['Water', 'Rock'],
              population: 7_800_000_000,
              colonized: true,
            }],

          }]
            // Add other planets in 'Our Solar System' here
}];
  
        

  return (
    <div className="flex justify-between w-3/4 mx-auto">
      <div className="w-1/2">
        {selectedGalaxy && (
          <>
            {selectedSolarSystem ? (
              <>
                {selectedSolarSystem.planets.map((planet, index) => (
                  <div
                    key={index}
                    className="flex items-center"
                    onClick={() => handlePlanetClick(planet)}
                  >
                    <Image src={`/images/planets/${planet.name}.png`} alt={planet.name} width={200} height={200} />
                    <span className="ml-2">{planet.name}</span>
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
                  <span className="cursor-pointer text">{solarSystem.name}</span>
                  <Divider />
                </div>
              ))}
            </AccordionTab>
          </Accordion>
        ))}
      </div>
      <Dialog
        visible={dialogVisible}
        onHide={handleDialogHide}
        header={selectedPlanet?.name}
        footer={<Button onClick={() => console.log('Travel button clicked')}>Travel</Button>}
      >
        <Image src={`/images/planets/${selectedPlanet?.name ?? ''}view.png`} alt={selectedPlanet?.name ?? ''} width={800} height={180} />
        <div>
          <p>Distance: {selectedPlanet?.distance}</p>
          <p>Size: {selectedPlanet?.size}</p>
          <p>Mass: {selectedPlanet?.mass}</p>
          <p>Radiation: {selectedPlanet?.radiation}</p>
          <p>Temperature: {selectedPlanet?.temperature}</p>
          <p>Habitability: {selectedPlanet?.habitability ? 'Yes' : 'No'}</p>
          <p>Composition: {selectedPlanet?.composition.join(', ')}</p>
          <p>Population: {selectedPlanet?.population}</p>
          <p>Colonized: {selectedPlanet?.colonized ? 'Yes' : 'No'}</p>
        </div>
      </Dialog>
    </div>
  );
}