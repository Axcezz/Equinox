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
import AluminiumOre from '/public/icons/resources/AluminiumOre.png' 
import CopperOre from '/public/icons/resources/CopperOre.png' 
import IronOre from '/public/icons/resources/IronOre.png' 
import GoldOre from '/public/icons/resources/GoldOre.png' 
import MagnesiumOre from '/public/icons/resources/MagnesiumOre.png' 
import ErestrumOre from '/public/icons/resources/ErestrumOre.png' 
import NeodymiumOre from '/public/icons/resources/NeodymiumOre.png' 
import PentaxidOre from '/public/icons/resources/PentaxidOre.png' 
import PlatinOre from '/public/icons/resources/PlatinOre.png' 
import PromethiumOre from '/public/icons/resources/CobaltOre.png' 
import SathiumOre from '/public/icons/resources/SathiumOre.png' 
import SiliconOre from '/public/icons/resources/SiliconOre.png' 
import Sulfur from '/public/icons/resources/Sulfur.png' 
import TitanOre from '/public/icons/resources/TitanOre.png' 
import ZascosiumOre from '/public/icons/resources/ZascosiumOre.png' 
import CobaltOre from '/public/icons/resources/CobaltOre.png' 

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