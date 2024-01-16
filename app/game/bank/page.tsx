'use client'

import { Card } from 'primereact/card';
import Link from 'next/link'
import Image from 'next/image';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function bank() {
     
    return (
        <div className="flex justify-center items-center h-fit">
            <div className="float-left pr-5 h-96">
                <Card title="Bank" subTitle="Deposit money in the bank to get interest. 1% of deposited amount for each 24H" className="h-96"> 
                    <div className="grid grid-cols-3 gap-4 pt-2 justify-center items-center">
                        <InputText className="col p-2" placeholder="Amount" /><Button label="Deposit"></Button>
                    </div>
                    <div className="col pt-8 justify-center items-center flex">
                        Currently you have $0 money in the bank.
                    </div>
                </Card>
            </div>

            <div className="float-right">
                <Card title="Send Money" className="mt-5 w-full" subTitle="Send money to another player"> 
                    <div className="grid grid-cols-3 gap-4 w-fit justify-content-center items-center">
                        
                        <InputText className="col p-2" placeholder="Amount" />
                        <InputText className="col p-2" placeholder="Player" />
                        <Button label="Send"></Button>
                       
                    </div>
                    <span className='grid justify-content-center items-center pt-4 text-gray-400'>Transfer fee: 5%</span>
                </Card>
                <Card title="Send Credits" className="mt-5 w-full" subTitle="Send Credits to another player"> 
                    <div className="grid grid-cols-3 gap-4 w-fit justify-content-center items-center">
                        <InputText className="col p-2" placeholder="Amount" />
                        <InputText className="col p-2" placeholder="Player" />
                        <Button label="Send"></Button>
                    </div>
                </Card>
            </div>

            <div className="flex justify-center items-center">
                <span className=""> Property is owned by <Link href="/" className="pl-1">Axcezz</Link></span>
            </div>
        </div>
    )
}
