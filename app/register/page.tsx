'use client'
import React, { useState } from "react";
import Link from 'next/link';
import Logo from '/public/Equinox_logo.png';
import Image from 'next/image';

import { Button } from 'primereact/button';
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Password, PasswordState } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';
import { trpc } from "@/server/client";

export default function Register() {

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);


  const addUser = trpc.user.addUser.useMutation(
    {
      onSettled: () => {
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setTermsAccepted(false);
      },
    }
  );

  return (
    <div>





      <div className="flex items-center h-screen flex-col">
        <Image src={Logo} alt='Logo' className="z-10" />
        <Card title="Register" className="p-0 z-10">

          <form className=" ">
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

            <div className="mt-2">

              <Checkbox inputId="termsAccepted" className="mr-2 mb-1" onChange={e => setTermsAccepted(e.checked || false)} checked={termsAccepted || false}></Checkbox>
              <label htmlFor="termsAccepted" className="text-lg mr-5 inline">Accept Terms of Service</label>
            </div>


            <Button type="submit" className="mt-5" label="Register" onClick ={() => addUser.mutate({username, email, password })} />
            
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
