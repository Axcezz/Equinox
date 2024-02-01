import dynamic from 'next/dynamic';

import SolarSystem from './components/SolarSystem';

const SolarSystemDynamic = dynamic(() => import('./components/SolarSystem'), { ssr: false });

export default function Home() {
  return (
    <div>
      <SolarSystem />
    </div>
  );
}