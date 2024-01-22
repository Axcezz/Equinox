'use client'
import Image from 'next/image';
import Link from 'next/link';
import ProfileImage from '/public/uploads/defaultprofileimg.png'
import InventoryIcon from '/public/icons/inventory.png' 
import MailIcon from '/public/icons/mail.png'
import SpaceshipIcon from '/public/icons/spaceship.png'
import RankIcon from '/public/icons/rank.png'
import FederationIcon from '/public/icons/federation.png'
import PlanetIcon from '/public/icons/planet.png'
import MoneyIcon from '/public/icons/money_icon.png'
import CreditIcon from '/public/icons/credit_icon.png' 
import AluminiumOre from '/public/resources/AluminiumOre.png' 
import CopperOre from '/public/resources/CopperOre.png' 
import IronOre from '/public/resources/IronOre.png' 
import GoldOre from '/public/resources/GoldOre.png' 
import MagnesiumOre from '/public/resources/MagnesiumOre.png' 
import ErestrumOre from '/public/resources/ErestrumOre.png' 
import NeodymiumOre from '/public/resources/NeodymiumOre.png' 
import PentaxidOre from '/public/resources/PentaxidOre.png' 
import PlatinOre from '/public/resources/PlatinOre.png' 
import PromethiumOre from '/public/resources/CobaltOre.png' 
import SathiumOre from '/public/resources/SathiumOre.png' 
import SiliconOre from '/public/resources/SiliconOre.png' 
import Sulfur from '/public/resources/Sulfur.png' 
import TitanOre from '/public/resources/TitanOre.png' 
import ZascosiumOre from '/public/resources/ZascosiumOre.png' 
import CobaltOre from '/public/resources/CobaltOre.png' 

import { ProgressBar } from 'primereact/progressbar';


function Userpanel() {
    return (
<div>
<div className="avatarBorder">
    <Image src={ProfileImage} alt='Profile Image' className='avatar'/>
</div>
<span className="welcome">
  {/* 
Should show the users name.
*/}
    Alexander
</span>
<div style={{ display: 'flex', justifyContent: 'center' , gap: '10px' }}>
 {/* 
Route the users to the messages page.
*/}
   <Link href="/game/messages" >
      <span>
        <Image alt='mail' src={MailIcon} width="35" height="25" />
      </span>
      </Link>
 {/* 
Route the users to the inventory page.
*/}
   <Link href="/game/inventory" >
      <span>
        <Image src={InventoryIcon} width="30" height="25" alt="Inventory" />
      </span>
      </Link>
 {/* 
Route the users to the hangar page.
*/}
   <Link href="/game/hangar" >
      <span>
        <Image src={SpaceshipIcon} width="25" height="30" alt="Spaceship" />
      </span>
      </Link>
</div>

<div className="flex flex-column">
   {/* 
The rank the user has.
*/}
<div className="flex m-2">
    <Image src={RankIcon} alt='Rank' className='size-6'/>
    <span className="pb-1 pl-2"  id="rankValue">Commander</span>
  </div>

 {/* 
The name of the federation the user is part of
*/}
  <div className="flex  m-2">
    <Image src={FederationIcon} alt='Federation'className='size-6' />
    <span className="pb-1 pl-2"  id="federationValue">Raiders</span>
  </div>

 {/* 
The Location of the user has.
*/}
  <div className="flex m-2">
    <Image src={PlanetIcon} alt="Planet" className='size-6'/>
    <span className="pb-1 pl-2"  id="locationValue">Earth</span>
  </div>

 {/* 
The amount of Money the user has.
*/}
  <div className="flex  m-2">
    <Image src={MoneyIcon} alt='Money' className='size-6' />
    <span className="pb-1 pl-2" id="moneyValue">10000</span>
  </div>

 {/* 
The amount of credits the user has.
*/}
  <div className="flex  m-2">
    <Image src={CreditIcon} alt="Credits" className='size-6' /> 
    <span className="pb-1 pl-2" id="creditsValue">100</span>
  </div>

   {/* 
The amount of health the user has. Might want it to show in numbers like full health 100/100. so they can buy more health or craft health booster.
*/}
<div className="w-44">
<span className="pb-1 pl-2">Health</span>
<ProgressBar
    value={50}
    pt={{
        value: { style: { color: '#ffffff' , background: 'linear-gradient(to right, #8f0000, #d42727)'} }
    }}
></ProgressBar>
  </div>

    {/* 
The amount of Energy the user has. Might want it to show in numbers like full energy 100/100. so they can buy more energy or craft energy booster.
*/}
  <div className="w-44">
<span className="pb-1 pl-2">Energy</span>
<ProgressBar
    value={50}
></ProgressBar>
  </div>

   {/* 
The amount of fuel the user has. Might want it to show in numbers like full fuel 100/100. so they can buy more fuel or craft fuel booster.
*/}
  <div className="w-44">
<span className="pb-1 pl-2">Fuel</span>
<ProgressBar
    value={50}
    pt={{
        value: { style: { color: '#ffffff' , background: 'linear-gradient(to right, #fff600, #d2c100)'} }
    }}
></ProgressBar>
  </div>

     {/* 
Not sure on this. Might move this to the inventory page. where they can get an overview of all the resources they have rather than just ores.
*/}
  <div className="w-44 pt-4">
<span className="pt-5">Resources</span>

<div className="grid">
    <div className="col">
        <div className="text-center text-xs p-1 ">
        <Image src={CopperOre} alt="Copper Ore" className='size-6'/> 
          999</div>
    </div>
    <div className="col">
        <div className="text-center text-xs p-1 ">
        <Image src={AluminiumOre} alt="Aluminium Ore" className='size-6'/> 
          258</div>
    </div>
    <div className="col">
        <div className="text-center text-xs p-1 ">
        <Image src={IronOre} alt="Iron Ore" className='size-6'/> 
          126</div>
    </div>
    <div className="col">
        <div className="text-center text-xs p-1 ">
        <Image src={GoldOre} alt="Gold Ore" className='size-6'/> 
          86</div>
    </div>

</div>

<div className="grid">
<div className="col">
        <div className="text-center text-xs p-1 ">
        <Image src={MagnesiumOre} alt="Magnesium Ore" className='size-6'/>  
        22</div>
    </div>
    <div className="col ">
        <div className="text-center text-xs p-1 ">
        <Image src={CobaltOre} alt="Cobalt Ore" className='size-6'/> 
          31</div>
    </div>
    <div className="col">
        <div className="text-center content-center text-xs p-1 ">
        <Image src={ErestrumOre} alt="Erestrum Ore" className='size-6'/> 
        3</div>
    </div>
    <div className="col">
        <div className="text-center text-xs p-1 ">
        <Image src={NeodymiumOre} alt="Neodymium Ore" className='size-6'/> 
        12</div>
    </div>
</div>
  
  <div className="grid">
<div className="col">
        <div className="text-center text-xs p-1 ">
        <Image src={PentaxidOre} alt="Pentaxid Ore" className='size-6'/>  
        12</div>
    </div>
    <div className="col ">
        <div className="text-center text-xs p-1 ">
        <Image src={PlatinOre} alt="Platin Ore" className='size-6'/> 
          28</div>
    </div>
    <div className="col">
        <div className="text-center content-center text-xs p-1 ">
        <Image src={PromethiumOre} alt="Promethium Ore" className='size-6'/> 
        3</div>
    </div>
    <div className="col">
        <div className="text-center text-xs p-1 ">
        <Image src={ZascosiumOre} alt="Zascosium Ore" className='size-6'/> 
        0</div>
    </div>
    </div>
  <div className="grid">
<div className="col">
        <div className="text-center text-xs p-1 ">
        <Image src={SathiumOre} alt="Sathium Ore" className='size-6'/>  
        2</div>
    </div>
    <div className="col ">
        <div className="text-center text-xs p-1 ">
        <Image src={SiliconOre} alt="Silicon Ore" className='size-6'/> 
          36</div>
    </div>
    <div className="col">
        <div className="text-center content-center text-xs p-1 ">
        <Image src={Sulfur} alt="Sulfur" className='size-6'/> 
        89</div>
    </div>
    <div className="col">
        <div className="text-center text-xs p-1 ">
        <Image src={TitanOre} alt="Titan Ore" className='size-6'/> 
        46</div>
    </div>
</div>
</div>
</div>
  </div>
     
    )
  }
  
  export default Userpanel;