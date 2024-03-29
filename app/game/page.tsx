'use client'

/* LOGO */

/* Style Components */
import { Card } from 'primereact/card';


export default function Home() {

  return (
<div className="flex justify-center items-center flex-col ">

   {/* 
The news page where patch updates and other news will be posted. should be posted from the admin panel.
*/}

<Card title="Patch Note" subTitle="version 0.1" className="w-3/4 mt-4">       
Several changes have been made to the game, here are the most important ones.
<br />
- Added the layout for the game forum.
<br />
- Added icons and ores for the userpanel.
<br />
- added players online page.
<br />
- Commented some of the code for future reference.
</Card>

<Card title="Welcome" className="w-3/4 mt-4">       
Welcome to Equinox, a game where you can explore the universe and discover new planets, stars and galaxies.
</Card>

</div>
  )
}
