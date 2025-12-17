"use client"
import React, { FormEvent, useEffect, useState } from 'react';
import { IProduct, ProductProps } from "@/lib/types/product";
import { productService } from "@/api/service/products";
import { sizeConfig } from "@/config/size.config";
import ConfirmModal from "@/components/ui/ConfirmModal";
import { useRouter } from "next/navigation";

const Page = () => {
    const [data, setData] = useState<IProduct[]>([]);
    const [product, setProduct] = useState<ProductProps>({
        title: '',
        price: 0,
        description: ''
    })
    const [isModalOpen, setModalOpen] = useState({
        isModalCreate: false,
        isModalDelete: false,
        isModalEdit: false,
    });

    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

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

    const handleUpdateClick = (id: string) => {
        const productToEdit = data.find(product => product.id === id);

        if (productToEdit) {
            setProduct({
                price: productToEdit.price,
                description: productToEdit.description,
                title: productToEdit.title,
            });
            setSelectedId(id);
            setModalOpen({ ...isModalOpen, isModalEdit: true });
        } else {
            console.error(`Product with ID ${id} not found in data array.`);
        }
    }

    const handleUpdate = async (e: FormEvent) => {
        e.preventDefault();
        if (!selectedId) return;
        setIsLoading(true);

        try {
            const updateProduct = await productService.updateProduct(selectedId, { ...product, id: selectedId });
            setData(prev => prev.map(product => product.id === selectedId ? updateProduct : product))
            setModalOpen({ ...isModalOpen, isModalEdit: false })
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }

    const handleClickDelete = (id: string) => {
        setSelectedId(id);
        setModalOpen({
            ...isModalOpen,
            isModalDelete: true
        })
    };

    const handleConfirmDelete = async () => {
        if (!selectedId) return;
        setIsLoading(true);

        try {
            await productService.deleteProductById(selectedId);
            setData(prev => prev.filter(p => p.id !== selectedId));
            setModalOpen({
                ...isModalOpen,
                isModalDelete: false
            })
            setSelectedId(null);
        } catch (e) {
            console.error(e);
            alert("Error");
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreateClick = () => {
        setModalOpen({
            ...isModalOpen,
            isModalCreate: true
        })
    }

    const handleCreate = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await productService.createProduct(product)
            router.push("/products")
            setModalOpen({
                ...isModalOpen,
                isModalCreate: false
            })
        } catch (e) {
            console.error(e);
        }
    }

    return (<section
        className="h-screen bg-white dark:bg-gray-800"
    >
        <div className="max-w-5xl mx-auto px-3.5">
            <div
                className="text-white mb-5"
                style={{paddingTop: `calc(20px + ${sizeConfig.headerSize}px)`}}
            >Products</div>
            <button onClick={() => handleCreateClick()} className="bg-green-500 text-white p-2 mb-5 rounded-xl border-solid cursor-pointer hover:bg-green-700 focus:outline-none">
                Create new product
            </button>
            <div className={"flex flex-col gap-4"}>
                { data && data.map((product: IProduct) => (
                    <div key={product.id} className="border-2 border-gray-200 p-4 flex items-center justify-between">
                        <span>Title: {product.title}</span>
                        <div className={"flex gap-1"}>
                            <button className={"text-fuchsia-50 cursor-pointer hover:text-fuchsia-300"} onClick={() => handleUpdateClick(product.id)}>Update</button>
                            <button className={"text-red-500 cursor-pointer hover:text-red-700"} onClick={() => handleClickDelete(product.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            <ConfirmModal
                isOpen={isModalOpen.isModalDelete}
                onClose={() => setModalOpen({...isModalOpen, isModalDelete: false})}
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
            <ConfirmModal
                isOpen={isModalOpen.isModalCreate}
                onClose={() => setModalOpen({...isModalOpen, isModalCreate: false})}
                onConfirm={handleCreateClick}
                title="Create item"
                danger={true}
                isLoading={isLoading}
            >
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                            Title:
                        </label>
                        <input
                            type="text"
                            id="text"
                            name="title"
                            placeholder="Product Title"
                            value={product.title}
                            onChange={(e) => setProduct({ ...product, [e.target.name]: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                            Description
                        </label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            placeholder="Product Description"
                            value={product.description}
                            onChange={(e) => setProduct({ ...product, [e.target.name]: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                            Price
                        </label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            placeholder="Product Description"
                            value={product.price}
                            onChange={(e) => setProduct({ ...product, [e.target.name]: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={"bg-green-500 text-white p-2 mb-5 rounded-xl border-solid cursor-pointer hover:bg-green-700 focus:outline-none"}
                        onClick={handleCreate}
                    >
                        Create
                    </button>
                </form>
            </ConfirmModal>
            <ConfirmModal
                isOpen={isModalOpen.isModalEdit}
                onClose={() => setModalOpen({...isModalOpen, isModalEdit: false})}
                onConfirm={() => handleUpdateClick}
                title="Update item"
                danger={true}
                isLoading={isLoading}
            >
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                            Title:
                        </label>
                        <input
                            type="text"
                            id="text"
                            name="title"
                            placeholder={product.title}
                            value={product.title}
                            onChange={(e) => setProduct({ ...product, [e.target.name]: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                            Description
                        </label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            placeholder={product.description}
                            value={product.description}
                            onChange={(e) => setProduct({ ...product, [e.target.name]: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                            Price
                        </label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            placeholder={String(product.price)}
                            value={product.price}
                            onChange={(e) => setProduct({ ...product, [e.target.name]: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={"bg-green-500 text-white p-2 mb-5 rounded-xl border-solid cursor-pointer hover:bg-green-700 focus:outline-none"}
                        onClick={handleUpdate}
                    >
                        Update
                    </button>
                </form>
            </ConfirmModal>
    </section>
    );
};

export default Page;