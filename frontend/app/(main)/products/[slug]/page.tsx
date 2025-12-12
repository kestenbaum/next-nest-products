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
        <section className="min-h-screen bg-white dark:bg-gray-800 py-10">
            <div className="max-w-5xl mx-auto px-4">
                <h1
                    className="text-2xl font-semibold text-gray-900 dark:text-white mb-8"
                    style={{ paddingTop: `calc(20px + ${sizeConfig.headerSize}px)` }}
                >
                    {currentProduct.title}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="w-full h-80 bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-inner flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-300">
                    No Image
                </span>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
                                {currentProduct.description}
                            </p>

                            <p className="flex gap-1">
                                <span className={"text-white"}>Price:</span>
                                <span className={"text-fuchsia-200"}>{currentProduct.price}$</span>
                            </p>
                        </div>

                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors cursor-pointer"
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Page;