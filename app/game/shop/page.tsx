'use client'
import React, { useState, useEffect } from 'react';
import { ProductService } from './data/ProductService';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Tag } from 'primereact/tag';
import Image from 'next/image';
import MoneyIcon from '/public/icons/money_icon.png';
interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
}

export default function Shop() {
    const [products, setProducts] = useState<Product[]>([]);
    const [layout, setLayout] = useState('grid');

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data.slice(0, 12)));
    }, []);

    const getSeverity = (product: Product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const listItem = (product: Product) => {
        return (
   
            <div className="col-12">

                         {/* 
List Layout for the shop
*/}
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">         

                    <Image className="w-4 sm:w-8rem xl:w-5rem block xl:block mx-auto border-round" width="128" height="128" src={product.image} alt={product.name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.name}</div>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semibold">{product.category}</span>
                                </span>
                                <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                        <div className="flex align-items-center gap-2">
                            <Image src={MoneyIcon} alt='Money' className='size-6' />
                            <span className="text-1xl font-semibold">{product.price}</span>
                        </div>
                            <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        </div>
                    </div>
                </div>
            </div>
           
        );
    };

    const gridItem = (product: Product) => {
        return (
            
            <div className="col-3 sm:col-6 lg:col-6 xl:col-3 p-2">

                {/* 
Grid Layout for the shop
*/}
                <div className="p-2 border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-tag"></i>
                            <span className="font-semibold">{product.category}</span>
                        </div>
                        <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    </div>
                    <div className="flex flex-column align-items-center gap-2 py-2">
                        <Image className="w-32 border-round" width="128" height="128" src={product.image} alt={product.name} />
                        <div className="text-2xl font-bold">{product.name}</div>
                    </div>
                    <div className="flex align-items-center justify-content-between">
                    
                    
                        <div className="flex align-items-center gap-2">
                            <Image src={MoneyIcon} alt='Money' className='size-6' />
                            <span className="text-1xl font-semibold">{product.price}</span>
                        </div>
                        <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </div>
         
        );
    };

    const itemTemplate = (product: Product, layout: string) => {
        if (!product) {
            return;
        }

        if (layout === 'list') return listItem(product);
        else if (layout === 'grid') return gridItem(product);
    };

    const header = () => {
        return (
            <div className="flex justify-content-end ">
                <DataViewLayoutOptions layout={layout as 'grid' | 'list'} onChange={(e) => setLayout(e.value)} />
            </div>
        );
    };

    return (
        <div className='justify-content-center w-3/4 mx-auto'>
            <div className="card content-center">
                <DataView value={products} itemTemplate={itemTemplate} layout={layout as 'list' | 'grid' | (string & Record<string, unknown>) | undefined} header={header()} />
            </div>
        </div>
    )
}