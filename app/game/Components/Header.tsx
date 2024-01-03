'use client'

import Logo from '/public/equinoxlogo_flat.png'
import Image from 'next/image';

function Header() {
    return (
    <div className="flex justify-center items-center flex-col p-1">
    <Image src={Logo} alt='Logo' className=" w-auto h-28 " />
    </div>  
    )
  }
  
  export default Header;