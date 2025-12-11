import React, { FC } from 'react';
import { sizeConfig } from "@/config/size.config";
import { productService } from "@/api/service/products";
import { notFound } from "next/navigation";
import { IProduct } from "@/types/product";

interface Props {
    params: {
        slug: string;
    }
}

const Page: FC<Props> = async ({ params }) => {
    const { slug } = await params;
    let currentProduct: IProduct;

    try {
        currentProduct = await productService.getProduct(Number(slug));
    } catch (error) {
        console.log(error);
        notFound()
    }

    return (
        <section
            className="h-screen bg-white dark:bg-gray-800"
        >
            <div className="max-w-5xl mx-auto px-3.5">
                <div
                    className="text-white"
                    style={{paddingTop: `calc(20px + ${sizeConfig.headerSize}px)`}}
                >Products</div>
                <ul>
                    <li>Title: {currentProduct.title}</li>
                    <li>Description: {currentProduct.description}</li>
                </ul>
            </div>
        </section>
    );
};

export default Page;