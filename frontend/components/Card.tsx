import React, { FC } from 'react';
import Link from "next/link";
import { IProduct } from "@/types/product";
import Image from "next/image";

interface ProductProps extends IProduct {
    link: string;
    img?: string;
}

const Card: FC<ProductProps> = ({ title, price, link, img }) => {
    return (
        <div className="max-w-xs w-full">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-[1.02]">
                <a href={link || "#"} aria-label={`View details for ${ title|| 'Product'}`}>
                    <div className="relative h-48 w-full">
                        <img
                            src={img || "https://via.placeholder.com/400x300?text=Product+Image"}
                            alt={title || "Product Image"}
                            className="w-full h-full object-cover"
                            width={150}
                            height={150}
                        />
                    </div>
                </a>

                <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 truncate" title={title || "Product Name"}>
                        {title || "Stylish Product Name"}
                    </h3>

                    <div className="flex items-center justify-between mb-4">
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                            ${price || "99.99"}
                        </p>
                    </div>

                    <Link
                        href={link || "#"}
                        className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-700"
                    >
                        View Details
                    </Link>
                </div>

            </div>
        </div>

    );
};

export default Card;