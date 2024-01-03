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

<div style={{ display: 'flex', gap: '10px' }}>
  <span className="stats">
    <Image src={RankIcon} alt='Rank' width="25" height="25" />
    <span id="rankValue">Commander</span>
  </span>

  <span className="stats">
    <Image src={FederationIcon} alt='Federation' width="25" height="25" />
    <span id="federationValue">Raiders</span>
  </span>

  <span className="stats">
    <Image src={PlanetIcon} alt="Planet" width="25" height="25" />
    <span id="locationValue">Earth</span>
  </span>

  <span className="stats">
    <Image src={MoneyIcon} alt='Money' />
    <span id="moneyValue">10000</span>
  </span>

  <span className="stats">
    <Image src={CreditIcon} alt="Credits" /> 
    <span id="creditsValue">100</span>
  </span>
</div>
      </div>
    )
  }
  
  export default Userpanel;