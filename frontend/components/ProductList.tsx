import React from 'react';
import Card from "@/components/Card";
import { IProduct } from "@/lib/types/product";

interface Props {
    data: IProduct[];
}

const ProductList = ({data}: Props) => {
    return (
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
    );
};

export default ProductList;