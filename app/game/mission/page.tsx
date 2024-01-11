'use client'

/* LOGO */

/* Style Components */
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Link from 'next/link'
import { Button } from 'primereact/button';
import MoneyIcon from '/public/icons/money_icon.png'
import Image from 'next/image';
export default function GameForum() {
{/* 
dummy data for the Missions. This should be fetched from the database and displayed in the left collum. 
When clicked it should display the mission description on the right collum where they also can accept the mission and see rewards.
*/}

    const Mission = [
        { missionID: 0, missionTitle: "Celestial Odyssey", category:"Explore", status:"In progress", reward: "25,000", Location: "Earth", missionDescription: "Embark on an intergalactic journey to explore and document the diverse celestial wonders scattered across the galaxy. Traverse through star systems, witness the birth and death of stars, study unique planetary formations, and uncover the mysteries of distant galaxies. The mission aims to expand our understanding of the vastness of the cosmos and collect data to advance our knowledge of celestial phenomena",missionObjective:"Travle to the Adromeda system and visit the planet Axos" },
        { missionID: 1, missionTitle: "Galactic Unity Expedition", category:"Explore", status:"In progress", reward: "34,000", Location: "Earth", missionDescription: "Initiate a diplomatic and cultural exchange mission by traveling through various galaxies to establish connections with extraterrestrial civilizations. Engage in peaceful interactions, share knowledge, and build alliances to promote unity and cooperation on a galactic scale. The mission seeks to foster interstellar harmony, celebrate diversity, and pave the way for collaborative efforts in addressing common challenges faced by civilizations across the galaxy.", missionObjective:"Travle to the Rexsau system and visit the planet Nosgo-2 to establish diplomatic connections" },
        { missionID: 2, missionTitle: "Cosmic Frontier Exploration", category:"Build", status:"In progress", reward: "110,000", Location: "Earth", missionDescription: "Venture into the uncharted cosmic frontiers to discover habitable exoplanets and potential sites for future human colonization. Utilize advanced space probes and exploration technologies to survey planetary atmospheres, geological compositions, and potential resources. The mission aims to identify suitable locations for the expansion of human civilization beyond our solar system, ensuring the survival and prosperity of humanity in the face of interstellar challenges.", missionObjective:"Establish a home base on a habitable planet" },
      ];

      
  return (


<div className="flex justify-center items-center pt-28 flex-col justify-content-center w-3/4 mx-auto">
<div className="grid">

{/* 
This left collum is where the Missions will be displayed. The missions should be based on the users rank and location. Different missions like mining, exploring, trading, combat and so on should be available. might add a category filter later.
*/}

    <div className="col">
    <div className="">
        <Card title="" className="">       
        <DataTable value={Mission} tableStyle={{ minWidth: '50rem' }}>
        <Column field="missionTitle" header="Mission Title"></Column>
        <Column field="category" header="Category"></Column>
</DataTable>
        </Card>
        </div>
    </div>


{/* 
This right Collum should open the mission selected. The mission description, rewards and accept button should be displayed. when accepted the mission should be added to the users mission log and the user should be able to see the mission progress.
*/}

<div className="col">
    <div className="">
<Card title={Mission[0].missionTitle} className="p-5" >       
<p className="pb-2">{Mission[0].missionDescription}</p>
<p className="py-3 font-bold">{Mission[0].missionObjective}</p>
<div>
    <span className="float-left py-3 inline-block font-bold">Reward: <Image src={MoneyIcon} alt='Money' className='size-6 inline-block' /> {Mission[0].reward}</span>
    <span className="float-right py-2"><Button label="Accept" /></span>
</div>
</Card>

        </div>
    </div>

{/* 
This is where the missions accepted will be placed. upon completeion the user should be able to claim the reward and XP. and the mission should be removed from the mission log.
*/}
    <div className="grid pt-40">
    <div className="">
    <Card title="Mission Log" className="">       
        <DataTable value={Mission} tableStyle={{ minWidth: '100rem' }}>
        <Column field="missionTitle" header="Mission Title"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="status" header="Status"></Column>
        <Column field="claim" header="Claim"><Button label="Claim" disabled /></Column>
</DataTable>
        </Card>

        </div>
    </div>



</div>
</div>
  )
}
