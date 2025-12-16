"use client"
import React, { useEffect, useState } from 'react';
import { IProduct } from "@/types/product";
import { productService } from "@/api/service/products";
import { sizeConfig } from "@/config/size.config";
import ConfirmModal from "@/components/ui/ConfirmModal";

const Page = () => {
    const [data, setData] = useState<IProduct[]>([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

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

    const handleClickDelete = (id: string) => {
        setSelectedId(id);
        setModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!selectedId) return;

        setIsLoading(true);

        try {
            await productService.deleteProductById(selectedId);
            setData(prev => prev.filter(p => p.id !== selectedId));
            setModalOpen(false);
            setSelectedId(null);
        } catch (e) {
            console.error(e);
            alert("Error");
        } finally {
            setIsLoading(false);
        }
    };


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
                        <button className={"text-red-500 hover:text-red-700"} onClick={() => handleClickDelete(product.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
            <ConfirmModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onConfirm={handleConfirmDelete}
                title="Delete item"
                danger={true}
                isLoading={isLoading}
            >
                <p>
                    Are you sure you want to delete this item?
                    <br/>
                    This action is <b className="text-red-500">irreversible</b>.
                </p>
            </ConfirmModal>
    </section>
    );
};

export default Page;