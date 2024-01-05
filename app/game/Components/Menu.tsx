'use client'

import Link from 'next/link'

function Menu() {
    return (

<div className="menu_simple">
	<ul id="menu">
		<h2 className="menuheader">Admin</h2>


<li><a href='admin/index.php'>Admin panel</a></li>
<li><a href='testpage.php' target='trigger'>Test page</a></li>
<li><a href='todos.php' target='trigger'>Todos</a></li>

<h2 className="menuheader">General</h2>
	<li><Link href="/game/gameforum">Game Forum</Link></li>
	<li><Link href="/game">News & Updates</Link></li>
	<li><a href="tos.php" target="trigger">Terms Of Service</a></li>
	<li><a href="faq.php" target="trigger">FAQ's</a></li>
	<li><a href="helpcenter.php" target="trigger">Support</a></li>
	<li><a href="online.php" target="trigger" >Online</a></li>
	<li><a href="general_stats.php" target="trigger">General Stats</a></li>
	<li><a href="personal_stats.php" target="trigger" >Personal Stats</a></li>


<h2 className="menuheader">Actions</h2>

	<li><a href="mission.php" target="trigger">Mission</a></li>
	<li><a href="university.php" target="trigger">University</a></li>
	<li><a href="research.php" target="trigger">Research</a></li>
	<li><a href="work.php" target="trigger">Work</a></li>
	<li><a href="shop.php" target="trigger">Shop</a></li>
	<li><a href="hospital.php" target="trigger">Hospital</a></li>
	<li><a href="hengar.php" target="trigger">Hangar</a></li>
	<li><a href="properties.php" target="trigger" >Properties</a></li>
	<li><a href="credit_transfer.php" target="trigger" >Credit Transfer</a></li>
	<li><a href="bank.php" target="trigger" >Bank</a></li>
	<li><a href="casino.php" target="trigger" >Casino</a></li>
	<li><a href="explore.php" target="trigger">Explore</a></li>

<h2 className="menuheader">Federation</h2>

	<li><a href="/" target="trigger">Command Center</a></li>
	<li><a href="logout.php">Log Out</a></li>

</ul>

</div>

    )
  }
  
  export default Menu;