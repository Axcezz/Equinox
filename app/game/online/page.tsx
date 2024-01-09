'use client'

import Link from 'next/link'
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";



function Online() {

    return (
<div className="flex justify-center items-center flex-col">
{/* 
The searchinput should filter out names as they type.
*/}
    <span className="p-input-icon-left float-right mb-5">
        <i className="pi pi-search" />
        <InputText placeholder="Search" />
    </span>

{/* 
The subTitle should show dynamically how many users are online.
*/}
<Card title="Online Players" subTitle="Players online: 4" className="w-3/4">

{/* 
For each user online it should show up like this. 
If a user has a role like admin, moderator, added to friendlist or in the same federation it should show up with a different color.
When the user is clicked it should route to the users profile.
*/}

    <Link href="/">Axcezz</Link>&nbsp;-&nbsp;
    <Link href="/">Alx</Link>&nbsp;-&nbsp;
    <Link href="/">Crank</Link>&nbsp;-&nbsp;
    <Link href="/">Ratchet</Link>

</Card>


</div>

    )
}
export default Online;
