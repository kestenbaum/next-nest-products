import React, { memo } from 'react';
import Card from "@/components/Card";
import { IProduct } from "@/lib/types/product";

interface ProductListProps {
    data: IProduct[];
}

const ProductList: React.FC<ProductListProps> = memo(({ data }) => {
    if (!data || data.length === 0) {
        return null;
    }

    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            role="grid"
            aria-label="Product grid"
        >
            {data.map((product) => (
                <Card
                    key={product.id}
                    price={product.price}
                    title={product.title}
                    description={product.description}
                    id={product.id}
                    link={`/products/${product.id}`}
                />
            ))}
        </div>
    );
});

ProductList.displayName = 'ProductList';

export default ProductList;