'use client'
import { productService } from "@/api/service/products";
import { useGetAllItems } from "@/lib/hooks/useGetAllItems";
import Title from "@/components/Title";
import ProductList from "@/components/ProductList";

const Page =  () => {
    const { data, loading, error } = useGetAllItems(() => productService.getAllProducts())

    return (
        <section
            className="h-screen bg-white dark:bg-gray-800"
        >
            <div className="max-w-5xl mx-auto px-3.5">
                <Title>Products</Title>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {data && <ProductList data={data} />}
            </div>
        </section>
    );
};

export default Page;