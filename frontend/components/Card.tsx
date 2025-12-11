import React, { FC } from 'react';
import Link from "next/link";
import { IProduct } from "@/types/product";

interface ProductProps extends IProduct {
    link: string;
}

const Card: FC<ProductProps> = ({ title, price, link }) => {
    return (
        <div className="w-full p-5 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:bg-gray-800">
            <h2 className="text-white text-lg font-semibold mb-2">
                Name: {title}
            </h2>

            <p className="flex gap-1">
                <span className={"text-white"}>Price:</span>
                <span className={"text-fuchsia-200"}>{price}$</span>
            </p>

            <Link
                href={link}
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors"
            >
                To product
            </Link>
        </div>

    );
};

export default Card;