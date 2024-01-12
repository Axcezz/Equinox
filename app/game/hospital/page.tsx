'use client'
import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputNumber } from 'primereact/inputnumber';

export default function DynamicDemo() {
    const categories = [
        { name: 'Low Care - 5 Health pr. hour', key: 'A' },
        { name: 'Medium Care - 10 Health pr. hour', key: 'M' },
        { name: 'High Care - 20 health pr.hour', key: 'P' },
        { name: 'Premium Care - 50 health pr.hour', key: 'R' }
    ];
    const [selectedCategory, setSelectedCategory] = useState(categories[1]);
   
    return (
        <div className="card flex justify-content-center">
            <Card>
            <div className="flex flex-column gap-3">
                {categories.map((category) => {
                    return (
                         
    
                        
                        <div key={category.key} className="flex align-items-center">
                           
                            <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                            <label htmlFor={category.key} className="ml-2">{category.name}</label>
                            <InputNumber inputId="minmax-buttons" size={1} mode="decimal" showButtons min={0} max={100} />
                            <Button className="ml-2">Buy</Button>
                        </div>
                        
                    );
                })}
            
            </div>
            </Card>
        </div>
    );
}