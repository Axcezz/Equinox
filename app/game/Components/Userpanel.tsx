'use client'
import Image from 'next/image';

import ProfileImage from '/public/uploads/defaultprofileimg.png'
import InventoryIcon from '/public/icons/inventory.png' 
import MailIcon from '/public/icons/mail.png'
import SpaceshipIcon from '/public/icons/spaceship.png'
import RankIcon from '/public/icons/rank.png'
import FederationIcon from '/public/icons/federation.png'
import PlanetIcon from '/public/icons/planet.png'
import MoneyIcon from '/public/icons/money_icon.png'
import CreditIcon from '/public/icons/credit_icon.png' 

import { ProgressBar } from 'primereact/progressbar';


function Userpanel() {
    return (
<div>
<div className="avatarBorder">
    <Image src={ProfileImage} alt='Profile Image' className='avatar'/>
</div>
<span className="welcome">
    Alexander
</span>
<span className="lvl">
    lvl. 1
</span>
<div style={{ display: 'flex', justifyContent: 'center' , gap: '10px' }}>
 
    <a href="messages.php" className="notification" target="trigger">
      <span>
        <Image alt='mail' src={MailIcon} width="35" height="25" />
      </span>
    </a>

    <a href="inventory.php" className="" target="trigger">
      <span>
        <Image src={InventoryIcon} width="30" height="25" alt="Inventory" />
      </span>
    </a>

    <a href="spaceship.php" className="" target="trigger">
      <span>
        <Image src={SpaceshipIcon} width="25" height="30" alt="Spaceship" />
      </span>
    </a>
</div>

<div className="flex flex-column">
<div className="flex m-2">
    <Image src={RankIcon} alt='Rank' className='size-6'/>
    <span className="pb-1 pl-2"  id="rankValue">Commander</span>
  </div>

  <div className="flex  m-2">
    <Image src={FederationIcon} alt='Federation'className='size-6' />
    <span className="pb-1 pl-2"  id="federationValue">Raiders</span>
  </div>

  <div className="flex m-2">
    <Image src={PlanetIcon} alt="Planet" className='size-6'/>
    <span className="pb-1 pl-2"  id="locationValue">Earth</span>
  </div>

  <div className="flex  m-2">
    <Image src={MoneyIcon} alt='Money' className='size-6' />
    <span className="pb-1 pl-2" id="moneyValue">10000</span>
  </div>

  <div className="flex  m-2">
    <Image src={CreditIcon} alt="Credits" className='size-6' /> 
    <span className="pb-1 pl-2" id="creditsValue">100</span>
  </div>


<div className="w-44">
<span className="pb-1 pl-2">Health</span>
<ProgressBar
    value={50}
    pt={{
        value: { style: { color: '#ffffff' , background: 'linear-gradient(to right, #8f0000, #d42727)'} }
    }}
></ProgressBar>
  </div>
  <div className="w-44">
<span className="pb-1 pl-2">Energy</span>
<ProgressBar
    value={50}
></ProgressBar>
  </div>
  <div className="w-44">
<span className="pb-1 pl-2">Fuel</span>
<ProgressBar
    value={50}
    pt={{
        value: { style: { color: '#ffffff' , background: 'linear-gradient(to right, #fff600, #d2c100)'} }
    }}
></ProgressBar>
  </div>
  <div className="w-44 pt-4">
<span className="pt-5">Resources</span>

<div className="grid">
    <div className="col">
        <div className="text-center text-xs p-1 ">
        <Image src={PlanetIcon} alt="Planet" className='size-6'/> 
          360</div>
    </div>
    <div className="col">
        <div className="text-center text-xs p-1 ">
        <Image src={PlanetIcon} alt="Planet" className='size-6'/> 
          360</div>
    </div>
    <div className="col">
        <div className="text-center text-xs p-1 ">
        <Image src={PlanetIcon} alt="Planet" className='size-6'/> 
          360</div>
    </div>
    <div className="col">
        <div className="text-center text-xs p-1 ">
        <Image src={PlanetIcon} alt="Planet" className='size-6'/> 
          360</div>
    </div>

</div>

<div className="grid">
<div className="col">
        <div className="text-center text-xs p-1 ">
        <Image src={PlanetIcon} alt="Planet" className='size-6'/>  
        360</div>
    </div>
    <div className="col ">
        <div className="text-center text-xs p-1 ">
        <Image src={PlanetIcon} alt="Planet" className='size-6'/> 
          360</div>
    </div>
    <div className="col">
        <div className="text-center content-center text-xs p-1 ">
        <Image src={PlanetIcon} alt="Planet" className='size-6'/> 
        360</div>
    </div>
    <div className="col">
        <div className="text-center text-xs p-1 ">
        <Image src={PlanetIcon} alt="Planet" className='size-6'/> 
        360</div>
    </div>
</div>
  </div>

  </div>
      </div>
    )
  }
  
  export default Userpanel;