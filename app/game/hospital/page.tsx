'use client'
import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputNumber } from 'primereact/inputnumber';
import HospitalImg from '/public/images/hospital.jpg'
import Image from 'next/image';

export default function Hospital() {

    {/* 
dummy data for the Hospital. This should be fetched from the database and displayed in the left collum. 
You select a type of health care and choose the amount of hours of health care you want to buy.
you can buy with money or credits. while in the hospital you cannot be attacked or attack other players.
you will be locked for doing other activities while in the hospital.
Price and health should be balanced.
*/}
    const categories = [
        { name: 'Low Care - 5 Health pr. hour', price: '$ 2 000/h', key: 'L' },
        { name: 'Medium Care - 10 Health pr. hour', price: '$ 4 000/h', key: 'M' },
        { name: 'High Care - 20 health pr.hour', price: '$ 8 000/h', key: 'H' },
        { name: 'Premium Care - 50 health pr.hour', price: '§ 10/h', key: 'P' }
    ];
    const [selectedCategory, setSelectedCategory] = useState(categories[1]);
    const header = (
        <Image alt="Card" src={HospitalImg} />
    );
    return (
        <div className="card flex justify-content-center">
            <Card title="Hospital"className="w-1/3" header={header} subTitle="While in hospital, you cannot do other activities. you can not be attacked or attack other players. Choose the amount of hours you want health care for.">
            <div className="flex flex-column gap-3 ">
                {categories.map((category) => {
                    return (
                        
                        <div key={category.key} className="flex align-items-center w-full">
                           
                            <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                            <label htmlFor={category.key} className="ml-2 w-5/6">{category.name}</label>
                            <label htmlFor={category.key} className="ml-2 w-2/6 flex items-center">
                                <span>{category.price}</span>
                            </label>
                            <InputNumber inputId="minmax-buttons" size={1} mode="decimal" showButtons min={0} max={100} />
                            <Button className="mx-5 w-1/6">Buy</Button>
                        </div>
                        
                    );
                })}
            
            </div>
            </Card>
        </div>
    );
}