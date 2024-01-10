'use client'

import Logo from '/public/equinoxlogo_flat.png'
import Image from 'next/image';

function Header() {
    return (
    <div className="w-full p-2">
    <Image src={Logo} alt='Logo' className=" w-auto h-28 " />
    </div>  
    )
  }
  
  export default Header;