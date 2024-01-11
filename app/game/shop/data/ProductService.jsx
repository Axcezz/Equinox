export const ProductService = {
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Ablative Spray',
                description: 'Product Description',
                image: '/items/AblativeSpray.png',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Adrenaline Shot',
                description: 'Product Description',
                image: '/items/AdrenalineShot.png',
                price: 72,
                category: 'Accessories',
                quantity: 61,
                inventoryStatus: 'INSTOCK',
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'Advanced Upgrade Kit',
                description: 'Product Description',
                image: '/items/AdvancedUpgradeKit.png',
                price: 79,
                category: 'Fitness',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'Ailien Egg',
                description: 'Product Description',
                image: '/items/AlienParts01.png',
                price: 29,
                category: 'Clothing',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'Computer',
                description: 'Product Description',
                image: '/items/Computer.png',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
            },
            {
                id: '1005',
                code: 'av2231fwg',
                name: 'Cold Boost Augment',
                description: 'Product Description',
                image: '/items/Eden_ColdBoostAugmented.png',
                price: 120,
                category: 'Accessories',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
            },
            {
                id: '1006',
                code: 'bib36pfvm',
                name: 'Stamina Regen Kit',
                description: 'Product Description',
                image: '/items/Eden_StaminaRegenKit.png',
                price: 32,
                category: 'Accessories',
                quantity: 5,
                inventoryStatus: 'LOWSTOCK',
            },
            {
                id: '1007',
                code: 'mbvjkgip5',
                name: 'Insulation Boost',
                description: 'Product Description',
                image: '/items/InsulationBoost.png',
                price: 34,
                category: 'Accessories',
                quantity: 23,
                inventoryStatus: 'INSTOCK',
            },
            {
                id: '1008',
                code: 'vbb124btr',
                name: 'Armor Boost',
                description: 'Product Description',
                image: '/items/ArmorBoost.png',
                price: 99,
                category: 'Electronics',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
            },
            {
                id: '1009',
                code: 'cm230f032',
                name: 'Bio Fuel',
                description: 'Product Description',
                image: '/items/BioFuel.png',
                price: 299,
                category: 'Electronics',
                quantity: 63,
                inventoryStatus: 'INSTOCK',
            },
            {
                id: '1010',
                code: 'plb34234v',
                name: 'Laser Kit',
                description: 'Product Description',
                image: '/items/LaserKit.png',
                price: 24,
                category: 'Accessories',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
            }

        ];
    },

    getProductsWithOrdersData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Ablative Spray',
                description: 'Product Description',
                image: '/items/AblativeSpray.png',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                orders: [
                    {
                        id: '1000-0',
                        productCode: 'f230fh0g3',
                        date: '2020-09-13',
                        amount: 65,
                        quantity: 1,
                        customer: 'David James',
                        status: 'PENDING'
                    },
                    {
                        id: '1000-1',
                        productCode: 'f230fh0g3',
                        date: '2020-05-14',
                        amount: 130,
                        quantity: 2,
                        customer: 'Leon Rodrigues',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1000-2',
                        productCode: 'f230fh0g3',
                        date: '2019-01-04',
                        amount: 65,
                        quantity: 1,
                        customer: 'Juan Alejandro',
                        status: 'RETURNED'
                    },
                    {
                        id: '1000-3',
                        productCode: 'f230fh0g3',
                        date: '2020-09-13',
                        amount: 195,
                        quantity: 3,
                        customer: 'Claire Morrow',
                        status: 'CANCELLED'
                    }
                ]
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Ablative Spray',
                description: 'Product Description',
                image: '/items/AblativeSpray.png',
                price: 72,
                category: 'Accessories',
                quantity: 61,
                inventoryStatus: 'INSTOCK',
                orders: [
                    {
                        id: '1001-0',
                        productCode: 'nvklal433',
                        date: '2020-05-14',
                        amount: 72,
                        quantity: 1,
                        customer: 'Maisha Jefferson',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1001-1',
                        productCode: 'nvklal433',
                        date: '2020-02-28',
                        amount: 144,
                        quantity: 2,
                        customer: 'Octavia Murillo',
                        status: 'PENDING'
                    }
                ]
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'Ablative Spray',
                description: 'Product Description',
                image: '/items/AblativeSpray.png',
                price: 79,
                category: 'Fitness',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                orders: [
                    {
                        id: '1002-0',
                        productCode: 'zz21cz3c1',
                        date: '2020-07-05',
                        amount: 79,
                        quantity: 1,
                        customer: 'Stacey Leja',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1002-1',
                        productCode: 'zz21cz3c1',
                        date: '2020-02-06',
                        amount: 79,
                        quantity: 1,
                        customer: 'Ashley Wickens',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'Ablative Spray',
                description: 'Product Description',
                image: '/items/AblativeSpray.png',
                price: 29,
                category: 'Clothing',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
                orders: []
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'Ablative Spray',
                description: 'Product Description',
                image: '/items/AblativeSpray.png',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                orders: [
                    {
                        id: '1004-0',
                        productCode: 'h456wer53',
                        date: '2020-09-05',
                        amount: 60,
                        quantity: 4,
                        customer: 'Mayumi Misaki',
                        status: 'PENDING'
                    },
                    {
                        id: '1004-1',
                        productCode: 'h456wer53',
                        date: '2019-04-16',
                        amount: 2,
                        quantity: 30,
                        customer: 'Francesco Salvatore',
                        status: 'DELIVERED'
                    }
                ]
            }
           
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};