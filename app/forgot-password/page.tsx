'use client'
import React, { useState } from "react";
import { usePathname } from 'next/navigation'
import Link from 'next/link'

/* LOGO */
import Logo from '/public/Equinox_logo.png'
import Image from 'next/image';

/* Style Components */
import { ReactNebula } from "@flodlc/nebula";
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';




export default function forgotpass() {


  const [value, setValue] = useState<string>('');
  const pathname = usePathname();
  
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
<div className="flex justify-center items-center h-screen flex-col ">
  
<Image src={Logo} alt='Logo' className="z-10" />
  
  <Card title="Forgot Password" className="z-10">

      <span className="p-float-label mt-5">
          <InputText id="email" value={value} onChange={(e) => setValue(e.target.value)} className="p-inputtext-lg"  />
          <label className="ml-2" htmlFor="email">E-mail</label>
      </span>
         
      <div>        
          <Button className="mt-5" label="Send Password" />
      </div>

      <Divider />

      <p className="space-x-5">
        <span><Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Login</Link></span>
        <span><Link className={`link ${pathname === '/register' ? 'active' : ''}`} href="/register">Register</Link></span>
        <span><Link className={`link ${pathname === '/forgot-password' ? 'active' : ''}`} href="/forgot-password" >Forgot password</Link></span>
        <span><Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">About</Link></span>
      </p>
      
  </Card>
</div>
</div>
  )
}
