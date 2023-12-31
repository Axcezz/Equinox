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

export default function Register() {
  const [username, setUsername] = useState<string>('');

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Add your registration logic here. For example:
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!termsAccepted) {
      alert("You must accept the terms of service");
      return;
    }

    // Send a request to your server here
    console.log({ username, email, password });
  };


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
       
<div className="flex  items-center h-screen flex-col ">
        
  <Image src={Logo} alt='Logo' className="z-10" />

  <Card title="Register" className="p-0 z-10 ">
    
    <form onSubmit={handleSubmit} className=" ">
      <span className="p-float-label mt-5">
          <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="p-inputtext-lg"  />
          <label className="ml-2" htmlFor="username">Username</label>
      </span>

      <span className="p-float-label mt-5">
          <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-inputtext-lg"  />
          <label className="ml-2" htmlFor="email">E-mail</label>
      </span>

      <span className="p-float-label mt-5">
            <Password id="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} feedback={true} className="p-inputtext-lg"  /> 
            <label className="ml-2" htmlFor="password">Password</label>
      </span>
      
      <span className="p-float-label mt-5">
            <Password id="confirmPassword" value={confirmPassword} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} feedback={false} className="p-inputtext-lg"  />
            <label className="ml-2" htmlFor="password">Confirm Password</label>
      </span> 
      
      <div className="mt-2">
          <Checkbox inputId="termsAccepted" className="mr-2 mb-1" onChange={e => setTermsAccepted(e.checked || false)} checked={termsAccepted || false}></Checkbox>
          <label htmlFor="termsAccepted" className="text-lg mr-5 inline">Accept Terms of Service</label>
      </div>
        
          <Button type="submit" className="mt-5" label="Register" />
      
    </form>
      
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
