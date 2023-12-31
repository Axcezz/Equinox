'use client'
import Link from 'next/link'
/* LOGO */
import Logo from '/public/Equinox_logo.png'
import Image from 'next/image';

/* Style Components */
import { ReactNebula } from "@flodlc/nebula";
import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';




export default function about() {


  return (
    <div>
    <ReactNebula config={{
"starsCount": 300,
"starsColor": "#FFFFFF",
"starsRotationSpeed": 4.2,
"cometFrequence": 98,
"nebulasIntensity": 8,
"bgColor": "rgb(0,0,0)",
"sunScale": 5,
"planetsScale": 5,
"solarSystemOrbite": 79,
"solarSystemSpeedOrbit": 30
       }}/>
<div className="flex items-center h-screen flex-col ">

  <Image src={Logo} alt='Logo' className="z-10"/>

  <Card title="About" className="z-10">
    <p>Welcome to Equinox. <br /><br />
    Equinox is a text based mmorpg browser game that is currently in development. <br />
    The game is set in a distant future where humanity has colonized the solar system. <br />
    You will be able to explore the solar system, mine asteroids, build your own space ship, <br />
    base and will have the opertunity to join a federation and fight for control of the solar system. <br />
    The game is currently in development and is being developed by a single developer. <br />
    The game is being developed using the following technologies: <br /><br />
    - Next.js <br />
    - Typescript <br />
    - React <br />
    - PostgreSQL <br />
    - Tailwind CSS <br />
    - Nebula <br />
    - PrimeReact <br /><br />

    Would you like to contribute to the game? <br />
    Contact me on Discord: alxu <br /><br />

    About me: <br />
    I am a 33 year old developer from Norway. I like to code at my spare time and always had this project as a milestone to be completed. <br />
    I have former experience with PHP and this is my first project using Typescript and Next.js. <br />
    I'm still learning react and typescript so the code might not be the best. <br />
    if you have experience with react and typescript and would like to contribute to the project, please contact me on Discord. <br />
    i would really appreciate if someone could help me with the project and teach me the best practices. <br /><br /> 
    </p>

<Divider />

    <p className="space-x-5 text-center">
        <span><Link href="/">Login</Link></span>
        <span><Link href="/register">Register</Link></span>
        <span><Link href="/forgot-password">Forgot password</Link></span>
        <span><Link href="/about">About</Link></span>
    </p>
  </Card>

  </div>
</div>
  )
}
