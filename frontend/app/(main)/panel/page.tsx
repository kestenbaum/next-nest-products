"use client"
import React, { useEffect, useState } from 'react';
import { IProduct } from "@/types/product";
import { productService } from "@/api/service/products";
import { sizeConfig } from "@/config/size.config";

const Page = () => {
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

    return (<section
        className="h-screen bg-white dark:bg-gray-800"
    >
        <div className="max-w-5xl mx-auto px-3.5">
            <div
                className="text-white mb-5"
                style={{paddingTop: `calc(20px + ${sizeConfig.headerSize}px)`}}
            >Products</div>
            <div className={"flex flex-col gap-4"}>
                { data && data.map((product: IProduct) => (
                    <div key={product.id} className="border-2 border-gray-200 p-4 flex items-center justify-between">
                        <span>Title: {product.title}</span>
                        <button className={"text-red-500 hover:text-red-700"}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};

export default Page;