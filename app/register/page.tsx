import React, { useState } from "react";
import Link from 'next/link';
import Logo from '/public/Equinox_logo.png';
import Image from 'next/image';
import { ReactNebula } from "@flodlc/nebula";
import { Button } from 'primereact/button';
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';
import { registerUser } from '@/services/registerService'; // Import registerUser function
import { GetServerSideProps } from 'next';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!termsAccepted) {
      alert("You must accept the terms of service");
      return;
    }

    try {
      // Call registerUser function with form data and registration date
      await registerUser(username, email, password, new Date());
      alert('Registration successful!');
    } catch (error) {
      alert(error.message); // Display any error message returned from registerUser
    }
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
       }} />
      <div className="flex items-center h-screen flex-col">
        <Image src={Logo} alt='Logo' className="z-10" />
        <Card title="Register" className="p-0 z-10">
          <form onSubmit={handleSubmit} className=" ">
            <span className="p-float-label mt-5">
              <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="p-inputtext-lg" />
              <label className="ml-2" htmlFor="username">Username</label>
            </span>
            <span className="p-float-label mt-5">
              <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-inputtext-lg" />
              <label className="ml-2" htmlFor="email">E-mail</label>
            </span>
            <span className="p-float-label mt-5">
              <Password id="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} feedback={true} className="p-inputtext-lg" />
              <label className="ml-2" htmlFor="password">Password</label>
            </span>
            <span className="p-float-label mt-5">
              <Password id="confirmPassword" value={confirmPassword} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} feedback={false} className="p-inputtext-lg" />
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
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data or perform server-side operations here if needed
  return {
    props: {}, // Return any additional props needed by the component
  };
};
