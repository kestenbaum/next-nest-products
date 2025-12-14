'use client'

import React, { useEffect, useState } from 'react';
import { sizeConfig } from "@/config/size.config";
import { productService } from "@/api/service/products";
import Card from "@/components/Card";
import { IProduct } from "@/types/product";

const Page =  () => {
    const [data, setData] = useState<IProduct[]>([]);

    useEffect(() => {
       const fetch = async () => {
           try {
               const data = await productService.getAllProducts()
               setData(data);
           } catch (e) {
               console.error(e);
           }
       }
        fetch()
    }, [])

    return (
        <section
            className="h-screen bg-white dark:bg-gray-800"
        >
            <div className="max-w-5xl mx-auto px-3.5">
                <div
                    className="text-white mb-5"
                    style={{paddingTop: `calc(20px + ${sizeConfig.headerSize}px)`}}
                >Products</div>
                <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"}>
                    {data && data.map(product => <Card
                        key={product.id}
                        price={product.price}
                        title={product.title}
                        description={product.description}
                        id={product.id}
                        link={`/products/${product.id}`}
                    />)}
                </div>
            </div>
        </section>
    );
};

export default Page;