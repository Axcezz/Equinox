'use client'

import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Link from 'next/link'
import { Button } from 'primereact/button';
import MoneyIcon from '/public/icons/money_icon.png'
import Image from 'next/image';


export default function Hangar() {
      
  return (


<div className="flex justify-center items-center pt-28 flex-col justify-content-center w-3/4 mx-auto">
<div className="grid">

{/* 
This left collum is where the sapceship is displayed. The user should be able to see the ship and its stats. The user should be able to upgrade the ship and its parts. The user should be able to see the ship parts and their stats. The user should be able to upgrade the ship parts.
*/}

    <div className="col">
    <div className="">
        <Card title="" className="">       

        </Card>
        </div>
    </div>


{/* 
This right Collum is where the ship stats are displayed. The user should be able to see the ship stats and upgrade them. The user should be able to see the ship parts and their stats. The user should be able to upgrade the ship parts.
*/}

<div className="col">
    <div className="">
<Card title="Ship stats" className="p-5" >       

</Card>

        </div>
    </div>

{/* 
This is where the ship parts are displayed. the user see their parts and when they hover the parts they show a dialog box showing stats.
*/}
    <div className="grid pt-40">
    <div className="">
    <Card title="Ship Parts" className="">       
      
        </Card>

        </div>
    </div>



</div>
</div>
  )
}
