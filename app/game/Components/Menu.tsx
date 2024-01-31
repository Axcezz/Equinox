'use client'

import Link from 'next/link'

function Menu() {
    return (

<div className="menu_simple">

<ul id="menu">
<h2 className="menuheader">Admin</h2>
	<li><Link href='/game/admin'>Admin panel</Link></li>
	<li><Link href='/game/admin/test'>Test page</Link></li>
	<li><Link href='/game/admin/todos'>Todos</Link></li>

<h2 className="menuheader">General</h2>
	<li><Link href="/game/gameforum">Game Forum</Link></li>
	<li><Link href="/game">News & Updates</Link></li>
	<li><Link href="/game/tos">Terms Of Service</Link></li>
	<li><Link href="/game/faq">FAQs</Link></li>
	<li><Link href="/game/support">Support</Link></li>
	<li><Link href="/game/online">Online</Link></li>
	<li><Link href="/game/general-stats">General Stats</Link></li>
	<li><Link href="/game/personal-stats">Personal Stats</Link></li>

<h2 className="menuheader">Actions</h2>
	<li><Link href="/game/explore">Explore</Link></li>	
	<li><Link href="/game/mission">Mission</Link></li>
	<li><Link href="/game/university">University</Link></li>
	<li><Link href="/game/research">Research</Link></li>
	<li><Link href="/game/work">Work</Link></li>
	<li><Link href="/game/shop">Shop</Link></li>
	<li><Link href="/game/hospital">Hospital</Link></li>
	<li><Link href="/game/properties">Properties</Link></li>
	<li><Link href="/game/bank">Bank</Link></li>
	<li><Link href="/game/casino">Casino</Link></li>

<h2 className="menuheader">Federation</h2>
	<li><Link href="/game/command-center">Command Center</Link></li>
	<li><Link href="/game/forum">Forum</Link></li>
	<li><Link href="/">Log Out</Link></li>
</ul>

</div>

    )
  }
  
  export default Menu;