'use client'

import { Card } from 'primereact/card';
import Link from 'next/link'
import Image from 'next/image';
import slotImage from '/public/images/casino/slots_logo.png'
import blackjackImage from '/public/images/casino/blackjack_logo.png'
import rouletteImage from '/public/images/casino/roulette_logo.png'
import plinkoImage from '/public/images/casino/plinko_logo.png'
import pokerImage from '/public/images/casino/poker_logo.png'

export default function bank() {
   
  return (


<div className="flex justify-center items-center flex-col justify-content-center w-3/4 mx-auto">
    <div className="grid grid-cols-3 gap-4 w-fit">
        <div className="col p-0">
            <div className="p-0">
                <Card>       
                <Image src={slotImage} alt='Slot' width={250} height={250} />
                </Card>
            </div>
        </div>
        <div className="col p-0">
            <div className="p-0">
                <Card>       
                <Image src={blackjackImage} alt='Slot' width={250} height={250} />
                </Card>
            </div>
        </div>
        <div className="col p-0">
            <div className="p-0">
                <Card>       
                <Image src={rouletteImage} alt='Slot' width={250} height={250} />
                </Card>
            </div>
        </div>
    </div>
    <div className="grid grid-cols-3 gap-4 w-fit pt-4">
        <div className="col p-0">
            <div className="p-0">
                <Card>       
                <Image src={plinkoImage} alt='Slot' width={250} height={250} />
                </Card>
            </div>
        </div>
        <div className="col p-0">
            <div className="p-0">
                <Card>       
                <Image src={pokerImage} alt='Slot' width={250} height={250} />
                </Card>
            </div>
        </div>
        <div className="col p-0">
            <div className="p-0">
{/* last game can be lotto or if more games, race track, bingo, keno or something */}

                <Card>       
                <Image src={slotImage} alt='Slot' width={250} height={250} />
                </Card>
            </div>
        </div>
    </div>
</div>
  )
}
