"use client"
import React, { FC } from 'react';
import Product from "@/components/Product";

interface Props {
    params: {
        slug: string;
    }
}

const Page: FC<Props> =  async ({ params }) => {
    const { slug } = await params;


    return <Product id={slug} />;
};

export default Page;