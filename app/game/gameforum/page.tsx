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
{/* 
dummy data for the topics.
*/}

    const products = [
        { topic: "How to build a spaceship", replies: "1" },
        { topic: "Creator of the game?", replies: "1100" },
        { topic: "Need to make these clickable and open the topic on the right side", replies: "0" }
      ];

{/* 
dummy data for the posted by info.
*/}
      const postedBy = (

        <div key="postInfo">
            <span>Posted by<a href="userprofile"> Axcezz </a></span>
            <span className="float-right"> 1 day ago</span>
        </div>
      );
  return (


<div className="flex justify-center items-center flex-col">
<div className="grid">

{/* 
This left collum is where the topics created will be displayed. Forum moderator or admin's shoudl be able to sticky topics, lock and delete.

Need to Create a button for creating a new topic.
*/}

    <div className="col">
    <div className="p-3">
        <Card className="">       
        <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
    <Column field="topic" header="Topics"></Column>
    <Column field="replies" header="Replies"></Column>
</DataTable>
        </Card>
        </div>
    </div>


{/* 
This right Collum shoudl on entering the gameforum be displayed as default. when users click topics it should appear here.
*/}

<div className="col">
    <div className="p-3">
<Card title="Forum Rules" subTitle={postedBy}>       
        <p> 
            Hello, and welcome to the game forum. <br />
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

{/* 
This is how the replies should look in a topic
*/}

<Card className="mt-3 p-0" subTitle={postedBy}>
This is how it should look in a post
</Card>

{/* 
This is how the writing reply should look
*/}

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
