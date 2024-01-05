'use client'

/* LOGO */

/* Style Components */
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Link from 'next/link'
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';

export default function GameForum() {
   
    const products = [
        { topic: "How to build a spaceship", replies: "1" },
        { topic: "Creator of the game?", replies: "1100" },
        { topic: "Need to make these clickable and open the topic on the right side", replies: "0" }
      ];
    
      const postedBy = (

        <div key="postInfo">
            <span>Posted by<a href="userprofile"> Axcezz </a></span>
            <span className="float-right"> 1 day ago</span>
        </div>
      );
  return (


<div className="flex justify-center items-center pt-28 flex-col">
<div className="grid">


    <div className="col">
    <div className="p-3">
        <Card title="Topics">       
        <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
    <Column field="topic" header="Topics"></Column>
    <Column field="replies" header="Replies"></Column>
</DataTable>
        </Card>
        </div>
    </div>



    <div className="col">
        <div className="p-3">
<Card title="Forum Rules" subTitle={postedBy}>       
    <p> Hello, and welcome to the game forum. <br />
        Please Read and follow the rules stated below. <br />
        <br />
        </p>
  <ul>
    <li>No Pornography</li> <br />
    <li>No Spamming</li><br />
    <li>No Racist images</li><br />
    <li>No Advertisements</li><br />
  </ul>
  <p>
        If any of these rules are broken we will forum ban or ban your account.<br />
        We have the right to change these rules without any prior notice to our players.<br />
        Please be aware if there are any changes. <br />
    </p>
</Card>
<Card className="mt-3 p-0" subTitle={postedBy}>

This is how it should look in a post

</Card>
<Card title="Reply" className="mt-3 p-0">

<div className="card">
            <Editor style={{ height: '200px' }} />
            <Button type="submit" label="Post" className="float-right mt-1 py-1"/>

        </div>
        
</Card>

        </div>
    </div>

</div>
</div>
  )
}
