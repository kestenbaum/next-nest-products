import React from 'react';
import { sizeConfig } from "@/config/size.config";
import { productService } from "@/api/service/products";

const Page = async () => {
    const products = await productService.getAllProducts();
    return (
        <section
            className="h-screen bg-white dark:bg-gray-800"
        >
            <div className="max-w-5xl mx-auto px-3.5">
                <div
                    className="text-white"
                    style={{paddingTop: `calc(20px + ${sizeConfig.headerSize}px)`}}
                >Products</div>
                <div>
                    {products.map(product => <li key={product.id}>{product.title}</li>)}
                </div>
            </div>
        </section>
    );
};

export default Page;