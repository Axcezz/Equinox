'use client'
import { Card } from 'primereact/card';
import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import WorkLvl_1Img from '/public/images/work_lvl1.jpg'
import Image from 'next/image';

export default function Work() {

{/* 
dummy data for work level 1 jobs.
*/}

  const categories = [
    { name: 'Plant seeds', reward: '$ 2 000', key: 'L', time: '2' },
    { name: 'Water the plants', reward: '$ 4 000', key: 'M', time: '4' },
    { name: 'Fertelize the crop', reward: '$ 8 000', key: 'H', time: '8' },
    { name: 'Harvest the field', reward: '$ 20 000', key: 'P', time: '10' }
];
const [selectedCategory, setSelectedCategory] = useState(categories[1]);
const header = (
    <Image alt="Card" src={WorkLvl_1Img} className=" h-full w-full"/>
);
const Title = (

  <div key="work header">
      <span>Work</span>
      <span className="float-right">LVL. 1</span>
  </div>
);

return (
  
  <div className="flex justify-center items-center flex-col justify-content-center w-full mx-auto">

    {/* 
Different work based on work level. bigger reward when higher lvl. when they choose a work they get a timer and when the timer is done they get the reward.
might add a progressbar for the work level. also im thinking about adding reward as a chest or something so they can get random item, xp and money.
*/}
      <Card title={Title} className="w-1/3" header={header} subTitle="Work to gain XP and reward. You can level up in the work field to get better jobs.">
          <div className="flex flex-column gap-3 ">
              {categories.map((category) => {
                  return (
                      <div key={category.key} className="flex align-items-center w-full">
                          <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                          <label htmlFor={category.key} className="ml-2 w-5/6">{category.name}</label>
                          <label htmlFor={category.key} className="ml-2 w-2/6">{category.time} Minutes</label>
                          <label htmlFor={category.key} className="ml-2 w-2/6 text-right">
                              <span>{category.reward}</span>
                          </label>
                          
                      </div>
                  );
              })}
          </div>

<div className="flex justify-center items-center flex-col w-full mx-auto pt-5">
          <Button className="">Work</Button>
          </div>


      </Card>
  </div>
);
}