'use client'
import React, { useState } from "react";
import Link from 'next/link'
/* LOGO */
import Logo from '/public/Equinox_logo.png'
import Image from 'next/image';

/* Style Components */
import { ReactNebula } from "@flodlc/nebula";
import { Button } from 'primereact/button';
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';


export default function Home() {


  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState<string>('');
  const [value2, setValue2] = useState<string>('');
  


  return (
 <div>
        <ReactNebula config={{
   "starsCount": 300,
   "starsColor": "#FFFFFF",
   "starsRotationSpeed": 4.2,
   "cometFrequence": 98,
   "nebulasIntensity": 8,
   "bgColor": "rgb(8,8,8)",
   "sunScale": 5,
   "planetsScale": 5,
   "solarSystemOrbite": 79,
   "solarSystemSpeedOrbit": 30
           }}/>

         
<div className="flex justify-center items-center h-screen flex-col">

    <Image src={Logo} alt='Logo' className="z-10" />

<Card title="Login" className="z-10">       
      <span className="p-float-label mt-5">
          <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} className="p-inputtext-lg"  />
          <label className="ml-2" htmlFor="username">Username</label>
      </span>
            
      <span className="p-float-label mt-5">
          <Password id="password" value={value2} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue2(e.target.value)} feedback={false} className="p-inputtext-lg"  />
          <label className="ml-2" htmlFor="password">Password</label>
      </span>

    <div>
          <Checkbox inputId="remember" className="mr-2 mb-1" onChange={e => setChecked(e.checked || false)} checked={checked || false}></Checkbox>
          <label htmlFor="remember" className="text-lg mr-5 inline">Remember me</label>
        
          <Button className="mt-5" label="Login" />
    </div>

  <Divider />
      <p className="space-x-5">
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
